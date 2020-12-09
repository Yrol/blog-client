<template>
  <div class="w-full lg:flex shadow-lg">
    <div
      class="w-full bg-white p-4 flex flex-col justify-between leading-normal"
    >
      <div>
        <div class="text-black font-bold text-base mb-2">Categories</div>

        <div v-if="error">
          <span class="text-sm text-gray-600"
            >An error occurred while loading categories. Click
            <button
              class="text-sm text-gray-600 p-1 focus:outline-none hover:text-black"
              v-on:click="getCategories"
            >
              <strong>here</strong>
            </button>
            to reload.</span
          >
        </div>

        <div v-if="!categoriesLoaded">
          <p
            class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"
          ></p>
          <p
            class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"
          ></p>
        </div>
        <div v-else>
          <span
            v-for="(item, index) in categories.data"
            :key="index"
            class="text-xs mb-2 font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1"
            >{{ item.title }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import agent from '../../api/agent';
export default {
  name: 'CategoriesCard',
  data() {
    return {
      categories: [],
      error: false,
      categoriesLoaded: false,
    };
  },
  methods: {
    async getCategories() {
      this.error = false;
      this.categoriesLoaded = false;
      this.categories = [];
      try {
        this.categories = await agent.Categories.categories();
        this.categoriesLoaded = true;
      } catch (error) {
        this.error = true;
      }
    },
  },
  created() {
    this.getCategories();
  },
};
</script>
