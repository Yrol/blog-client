<template>
  <Card
    title=""
    body="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    author="Yrol Fernando"
    publishDate="05 Oct 2020"
  />
</template>
<script>
import agent from '../../api/agent';
import Card from '../../components/Site/Card';
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
