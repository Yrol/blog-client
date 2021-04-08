<template>
  <div>
    <div class="mb-4 w-full flex flex-wrap">
      <div class="flex w-1/2">
        <h3 class="text-gray-700 text-3xl font-medium">Categories</h3>
      </div>
      <div class="flex justify-end content-end border-8:transparent w-1/2">
        <Button
          variant="success"
          :loading="false"
          :disableButton="false"
          size="small"
          icon="plus"
          @click="addCategory()"
        >
          Add new
        </Button>
      </div>
    </div>
    <div class="mt-4">
      <div v-if="loading">
        <AdminCategoryCard v-for="item in 3" :key="item" :dataReady="false" />
      </div>
      <div class="mt-4" v-else>
        <AdminCategoryCard
          v-for="(category, index) in categories"
          :key="index"
          :dataReady="true"
          :categoryData="category"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AdminCategoryCard from '~/components/Dashboard/AdminCategoryCard.vue';
import Button from '~/components/Input/Button';
import agent from '~/api/agent';
export default {
  name: 'Categories',
  components: {
    Button,
    AdminCategoryCard,
  },
  head: {
    title: 'Categories',
  },
  layout: 'adminLayout',
  data() {
    return {
      error: false,
      loading: true,
      categories: [],
    };
  },
  methods: {
    addCategory() {},
  },
  async fetch() {
    try {
      this.error = false;
      this.loading = true;
      this.categories = await agent.Categories.categories();
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
