<template>
  <div>
    <Navigation />
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div class="w-full md:w-1/4 p-4">
        <CategoriesCard />
      </div>
    </div>
    <div class="flex flex-wrap border-t border-gray-200">
      <div class="w-full md:w-3/4">
        <Pagination />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "~/components/site/header.vue";
import Card from "~/components/site/card.vue";
import CategoriesCard from "~/components/site/categoriescard.vue";
import Footer from "~/components/site/footer.vue";
import Pagination from "~/components/site/pagination.vue";
export default {
  components: {
    Navigation,
    Card,
    CategoriesCard,
    Footer,
    Pagination
  },
  head: {
    title: "Home"
  }
};
</script>
