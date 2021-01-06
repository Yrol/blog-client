<template>
  <div>
    <Header />
    <div v-if="error"></div>
    <div v-else>
      <PostView :articleData="post" />
    </div>
    <Footer />
  </div>
</template>

<script>
import getSinglePost from '../../api/getSinglePost';
import Header from '../../components/Site/Header';
import Footer from '../../components/Site/Footer';
import PostView from '../../components/Site/PostView';
export default {
  name: 'PostPage',
  components: {
    Header,
    Footer,
    PostView,
  },
  computed: {
    error() {
      if (this.errorStatus == 404) {
        return 'Page not found';
      } else if (this.errorStatus && this.errorStatus != 404) {
        return 'An internal error occurred';
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      errorStatus: '',
    };
  },
  async asyncData({ $axios, store, app, params, error }) {
    return await getSinglePost($axios, store, params, error)
      .then((res) => {
        console.log(res);
        return {
          post: res.post.data,
        };
      })
      .catch((e) => {
        return {
          errorStatus: e.response.status,
        };
      });
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  head() {
    return {
      title: this.$route.params.slug || '',
    };
  },
};
</script>
