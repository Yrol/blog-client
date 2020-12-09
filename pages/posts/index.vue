<template>
  <div>
    <Navigation />
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <span v-if="loading">
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
      loading: true,
      postCount: 0,
      page: 0,
    };
  },
  methods: {
    async getPosts() {
      this.loading = true;
      try {
        const activities = await agent.Posts.posts();
        console.log(activities);
      } catch (error) {
        //console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
