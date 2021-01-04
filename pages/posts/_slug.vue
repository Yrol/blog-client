<template>
  <span v-if="error">{{ error }}</span>
  <span v-else>This is for testing</span>
</template>

<script>
import getSinglePost from '../../api/getSinglePost';
export default {
  name: 'PostPage',
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
    body: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
  head() {
    return {
      title: this.$route.params.slug || '',
    };
  },
};
</script>
