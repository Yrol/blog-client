<template>
  <div>
    <Header />
    <PostList :posts="posts" :postsPerPage="postsPerPage" :total="totalPosts" />
    <Footer />
  </div>
</template>
<script>
import PostList from '../../../components/Site/PostList';
import Header from '../../../components/Site/Header';
import Footer from '../../../components/Site/Footer';
import getPosts from '../../../api/getPosts';
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
    };
  },
  async asyncData({ $axios, app, params, error }) {
    return await getPosts($axios, params, error)
      .then((res) => {
        console.log(res.allPosts.meta.total);
        console.log(res.allPosts.meta.per_page);
        return {
          posts: res.allPosts.data,
          totalPosts: res.allPosts.meta.total,
          postsPerPage: res.allPosts.meta.per_page,
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
