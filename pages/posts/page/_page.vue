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
      loadingStatus: false,
      statusCode: '',
      message: '',
    };
  },
  async asyncData({ $axios, app, params, error }) {
    const content = await getPosts($axios, params, error);
    return {
      posts: content.allPosts.data,
    };
  },
};
</script>
