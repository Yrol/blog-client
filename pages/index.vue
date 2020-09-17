<template>
  <div>
    <Navigation />
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <client-only>
          <RichText />
        </client-only>
      </div>
      <div class="w-ful md:w-1/4 lg:pl-0 md:pl-0 p-4">
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
import Navigation from "~/components/site/Header.vue";
import Card from "~/components/site/Card.vue";
import CategoriesCard from "~/components/site/CategoriesCard.vue";
import Footer from "~/components/site/Footer.vue";
import Pagination from "~/components/site/Pagination.vue";
import RichText from "~/components/site/RichText.vue";
export default {
  components: {
    Navigation,
    Card,
    CategoriesCard,
    Footer,
    Pagination,
    RichText
  },
  head: {
    title: "Home"
  }
};
</script>
