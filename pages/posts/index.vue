<template>
  <div>
    <Navigation />
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <span v-if="!postsLoaded">
          <Card v-for="index in 5" :key="index" :dataReady="false" />
        </span>
        <span></span>
      </div>
      <div class="w-ful md:w-1/4 lg:pl-0 md:pl-0 p-4">
        <CategoriesCard />
      </div>
    </div>
  </div>
</template>
<script>
import agent from '../../api/agent';
import Navigation from '../../components/Site/Header';
import Card from '../../components/Site/Card';
import CategoriesCard from '../../components/Site/CategoriesCard';
export default {
  name: 'Posts',
  head: {
    title: 'Posts',
  },
  components: {
    Navigation,
    Card,
    CategoriesCard,
  },
  data() {
    return {
      postsLoaded: false,
      postCount: 0,
    };
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
