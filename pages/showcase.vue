<template>
  <div>
    <Navigation />

    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <!-- Card -->
        <Card
          title="Lorem ipsum dolor sit amet, consectetur?"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil."
          author="Yrol Fernando"
          publishDate="05 Oct 2020"
          v-bind:tags="tags"
        />
      </div>
      <div class="w-ful md:w-1/4 lg:pl-0 md:pl-0 p-4">
        <!-- Categories Card -->
        <CategoriesCard />
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <client-only>
          <RichTextQuillEditor />
        </client-only>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <client-only>
          <RichTextSimpleMDE />
        </client-only>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <client-only>
          <FormText
            rules="required"
            name="abn"
            label="Article title"
            placeholder="Article title"
            class="my-4"
            v-model="abn"
          ></FormText>
        </client-only>
      </div>
    </div>
    <div class="flex">
      <client-only>
        <FormCheckbox
          v-for="(brand, index) in carbrands"
          :key="index"
          :val="brand"
          v-model="checkBoxRequirement[index]"
        >
          {{ brand }}
        </FormCheckbox>
      </client-only>
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
import Navigation from "~/components/Site/Header";
import Card from "~/components/Site/Card";
import CategoriesCard from "~/components/Site/CategoriesCard";
import Footer from "~/components/Site/Footer";
import Pagination from "~/components/Site/Pagination";
import RichTextQuillEditor from "~/components/Input/RichTextQuillEditor";
import FormText from "~/components/Input/FormText";
import RichTextSimpleMDE from "~/components/Input/RichTextSimpleMDE";
import FormCheckbox from "~/components/Input/FormCheckbox";
export default {
  components: {
    Navigation,
    Card,
    CategoriesCard,
    Footer,
    Pagination,
    RichTextQuillEditor,
    RichTextSimpleMDE,
    FormText,
    FormCheckbox,
  },
  head: {
    title: "Showcase",
  },
  data() {
    return {
      abn: null,
      checkBoxRequirement: [true, false, true, true],
      tags: ["#react", "#javascript", "#tailwind"],
      carbrands: ["Toyota", "Nissan", "Isuzu", "Ford"],
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
