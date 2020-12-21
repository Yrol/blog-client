<template>
  <div>
    <Header />
    <PostList />
    <Footer />
  </div>
</template>
<script>
import PostList from '../../../components/Site/PostList';
import Header from '../../../components/Site/Header';
import Footer from '../../../components/Site/Footer';
export default {
  name: 'PostListPage',
  components: {
    PostList,
    Header,
    Footer,
  },
  async asyncData({ $content, app, params, error }) {
    console.log(params.page);
  },
};
</script>
