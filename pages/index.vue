<template>
  <div>
    <Navigation />
    <Card />
  </div>
</template>

<script>
import Navigation from "~/components/site/header.vue";
import Card from "~/components/site/card.vue";
export default {
  components: {
    Navigation,
    Card
  },
  head: {
    title: "Home"
  }
};
</script>
