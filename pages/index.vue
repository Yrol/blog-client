<template>
  <div>
    <Navigation />
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <Card
          title="Lorem ipsum dolor sit amet, consectetur?"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil."
          author="Yrol Fernando"
          publishDate="05 Oct 2020"
          v-bind:tags="tags"
        />
        <Card
          title="Lorem ipsum dolor sit amet, consectetur?"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil."
          author="Yrol Fernando"
          publishDate="05 Oct 2020"
          v-bind:tags="tags"
        />
        <Card
          title="Lorem ipsum dolor sit amet, consectetur?"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil."
          author="Yrol Fernando"
          publishDate="05 Oct 2020"
          v-bind:tags="tags"
        />
        <Card
          title="Lorem ipsum dolor sit amet, consectetur?"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil."
          author="Yrol Fernando"
          publishDate="05 Oct 2020"
          v-bind:tags="tags"
        />
        <client-only>
          <RichText />
        </client-only>
        <FormText
          rules="required"
          name="abn"
          label="Article title"
          placeholder="Article title"
          class="my-4"
          v-model="abn"
        ></FormText>
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
import Navigation from "~/components/Site/Header.vue";
import Card from "~/components/Site/Card.vue";
import CategoriesCard from "~/components/Site/CategoriesCard.vue";
import Footer from "~/components/Site/Footer.vue";
import Pagination from "~/components/Site/Pagination.vue";
import RichText from "~/components/Input/RichText.vue";
import FormText from "~/components/Input/FormText.vue";
export default {
  components: {
    Navigation,
    Card,
    CategoriesCard,
    Footer,
    Pagination,
    RichText,
    FormText,
  },
  head: {
    title: "Home",
  },
  data() {
    return {
      abn: null,
      tags: ["#react", "#javascript", "#tailwind"],
    };
  },
  created() {},
  watch: {
    abn(value) {
      if (value) {
        console.log(value);
      }
    },
  },
};
</script>
