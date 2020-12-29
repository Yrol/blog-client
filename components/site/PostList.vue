<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <Card
          v-for="(post, index) in posts"
          :key="index"
          :dataReady="true"
          :title="post.title"
          :body="post.body"
          :author="post.user.name"
          :publishDate="post.created_at_dates.created_at"
        />
      </div>
      <div class="w-ful md:w-1/4 lg:pl-0 md:pl-0 p-4">
        <CategoriesCard />
      </div>
    </div>
    <div class="flex flex-wrap border-t border-gray-200">
      <div class="w-full md:w-3/4">
        <Pagination
          @update-pagenumber="updatePageNumber"
          :total="total"
          :perPage="postsPerPage"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from '../Site/pagination';
import CategoriesCard from '../Site/CategoriesCard';
export default {
  name: 'PostList',
  components: {
    Pagination,
    CategoriesCard,
  },
  props: {
    posts: {
      type: Array,
      default: Array,
    },
    total: {
      type: Number,
      default: 0,
    },
    postsPerPage: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    updatePageNumber(e) {
      console.log(e);
    },
  },
};
</script>
