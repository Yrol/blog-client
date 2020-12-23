<template>
  <div>
    <Header />
    <PostList :posts="posts" />
    <Footer />
  </div>
</template>
<script>
import PostList from '../../../components/Site/PostList';
import Header from '../../../components/Site/Header';
import Footer from '../../../components/Site/Footer';
import agent from '../../../api/agent';
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
      loadingStatus: false,
      statusCode: '',
      message: '',
    };
  },
  async asyncData({ $axios, app, params, error }) {
    return await $axios
      .$get(`http://localhost:8080/api/articles?page=${params.page}`)
      .then((res) => {
        return { posts: res.data };
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' });
      });
  },
};
</script>
