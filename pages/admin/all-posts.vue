<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">All Posts</h3>
    <div v-if="loading">
      <AdminCard />
    </div>
    <div v-else>
      <AdminCard />
    </div>
  </div>
</template>
<script>
import AdminCard from '~/components/Dashboard/AdminCard';
import agent from '~/api/agent';
export default {
  name: 'AllPosts',
  head: {
    title: 'All Posts',
  },
  layout: 'adminLayout',
  components: {
    AdminCard,
  },
  data() {
    return {
      posts: { title: 'Test title', body: 'Test body' },
      error: false,
      loading: false,
    };
  },
  async fetch() {
    try {
      this.error = false;
      this.loading = true;
      let posts = await agent.Posts.all();
      console.log(posts);
    } catch (error) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
  fetchOnServer: false,
  fetchDelay: 0,
};
</script>
