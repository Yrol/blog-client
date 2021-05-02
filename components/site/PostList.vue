<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <Card
          v-for="(post, index) in posts"
          :key="index"
          :dataReady="true"
          :toLocation="toLocation"
          :postData="post"
        />
      </div>
      <div class="w-full md:w-1/4 lg:pl-0 md:pl-0 p-4">
        <CategoriesCard />
      </div>
    </div>
    <div class="flex flex-wrap border-t border-gray-200">
      <div class="w-full md:w-3/4">
        <Pagination
          @update-pagenumber="updatePageNumber"
          :total="totalPosts"
          :perPage="perPagePosts"
          :paginationMeta="meta"
          :toPageName="paginationToPage"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from '~/components/Site/Pagination';
import CategoriesCard from '~/components/Site/CategoriesCard';
import Card from '~/components/Site/Card';
export default {
  name: 'PostList',
  components: {
    Pagination,
    CategoriesCard,
    Card,
  },
  data() {
    return {
      toLocation: 'posts-slug',
    };
  },
  props: {
    posts: {
      type: Array,
      default: Array,
    },
    meta: {
      type: Object,
      default: null,
    },
    totalPosts: {
      type: Number,
      default: 0,
    },
    perPagePosts: {
      type: Number,
      default: 0,
    },
    paginationToPage: {
      type: String,
      default: '/',
    },
  },
  methods: {
    updatePageNumber(e) {
      console.log(e);
    },
  },
};
</script>
