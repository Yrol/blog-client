<template>
  <div>
    <Header />
    <PostList :posts="posts" :meta="meta" />
    <Footer />
  </div>
</template>
<script>
import PostList from '~/components/Site/PostList';
import Header from '~/components/Site/Header';
import Footer from '~/components/Site/Footer';
import getPosts from '~/api/getPosts';

export default {
  name: 'PostListPage',
  components: {
    PostList,
    Header,
    Footer,
  },
  data() {
    return {
      posts: [],
      totalPosts: 0,
      postsPerPage: 0,
      meta: {},
    };
  },
  async asyncData({ $axios, store, app, params, error }) {
    return await getPosts($axios, store, params, error)
      .then((res) => {
        return {
          posts: res.allPosts.data,
          meta: { to: res.allPosts.meta.to, from: res.allPosts.meta.from },
        };
      })
      .catch((e) => {});
  },
  head() {
    return {
      title: 'Posts',
    };
  },
};
</script>
