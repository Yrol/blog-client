<template></template>
<script>
import PostList from '~/components/Site/PostList';
import Header from '~/components/Site/Header';
import Footer from '~/components/Site/Footer';

export default {
  name: 'CategoryPage',
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
  head() {
    return {
      title: this.$route.params.slug || '',
    };
  },
};
</script>
