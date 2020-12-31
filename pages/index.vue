<template>
  <div>
    <Header />
    <PostList :posts="posts" />
    <Footer />
  </div>
</template>
<script>
import PostList from '../components/Site/PostList';
import Header from '../components/Site/Header';
import Footer from '../components/Site/Footer';
import getPosts from '../api/getPosts';
export default {
  name: 'HomePage',
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
        return {
          posts: res.allPosts.data,
        };
      })
      .catch((e) => {});
  },
  head() {
    return {
      title: 'Home',
    };
  },
};
</script>
