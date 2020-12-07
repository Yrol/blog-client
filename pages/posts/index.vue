<template></template>
<script>
import '../../api/agent';
import agent from '../../api/agent';
export default {
  name: 'Posts',
  head: {
    title: 'Posts',
  },
  data() {
    return {};
  },
  methods: {
    async getPosts() {
      try {
        const activities = await agent.Posts.posts();
        console.log(activities);
      } catch (error) {
        //console.log(error);
      }
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
