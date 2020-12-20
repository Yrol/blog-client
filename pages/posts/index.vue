<template>
  <div>
    <Navigation />
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <span v-if="loading">
          <Card v-for="index in 5" :key="index" :dataReady="false" />
        </span>
        <span v-else>
          <Card
            v-for="(activity, index) in activities.data"
            :key="index"
            :dataReady="true"
            :title="activity.title"
            :body="activity.body"
            :author="activity.user.name"
            :publishDate="activity.created_at_dates.created_at"
          />
        </span>
      </div>
      <div class="w-ful md:w-1/4 lg:pl-0 md:pl-0 p-4">
        <CategoriesCard />
      </div>
    </div>
    <div class="flex flex-wrap border-t border-gray-200">
      <div class="w-full md:w-3/4">
        <Pagination @update-pagenumber="updatePageNumber" />
      </div>
    </div>
    <Footer />
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
      activities: [],
      loading: false,
      postCount: 0,
      page: 0,
    };
  },
  methods: {
    async getPosts() {
      this.loading = true;
      try {
        this.activities = await agent.Posts.posts();
        console.log(this.activities);
      } catch (error) {
        //console.log(error);
      } finally {
        this.loading = false;
      }
    },
    updatePageNumber(e) {
      console.log(e);
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
