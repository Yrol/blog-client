<template>
  <div>
    <Header />
    <PostList
      :posts="posts"
      :totalPosts="totalPosts"
      :perPagePosts="postsPerPage"
      :meta="meta"
      paginationToPage="categories-slug-page"
    />
    <Footer />
  </div>
</template>
<script>
import PostList from '~/components/Site/PostList';
import Header from '~/components/Site/Header';
import Footer from '~/components/Site/Footer';
import getPostsByCategory from '~/api/getPostsByCategory';
import { mapGetters } from 'vuex';

export default {
  name: 'CategoryPagePagination',
  components: {
    PostList,
    Header,
    Footer,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      posts: [],
      meta: {},
    };
  },
  computed: {
    ...mapGetters({
      totalPosts: 'categories/totalPosts',
      postsPerPage: 'categories/perPagePosts',
    }),
  },
  head() {
    return {
      title: this.$route.params.slug || '',
    };
  },
  async asyncData({ $axios, store, app, params, error }) {
    console.log('execute');
    return await getPostsByCategory($axios, store, params, error)
      .then((res) => {
        return {
          posts: res.posts.data,
          meta: { to: res.posts.meta.to, from: res.posts.meta.from },
        };
      })
      .catch((e) => {
        return {
          errorStatus: e?.response?.status,
        };
      });
  },
};
</script>
