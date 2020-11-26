<template>
  <div>
    <Navigation />

    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <!-- Card -->
        <h4 class="leading-none my-2 tracking-wider text-gray-600 font-light">
          Card
        </h4>
        <Card
          title="Lorem ipsum dolor sit amet, consectetur?"
          :body="`Test`"
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
          <RichTextSimpleMDE v-model="richTextContent" />
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
            icon="camera"
            v-model="abn"
          ></FormText>
        </client-only>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
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
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <client-only>
          <FormRadio
            v-for="(val, index) in radio"
            :key="index"
            class="mx-2"
            :val="radio[index]"
            name="myRadio"
            rules="required"
            v-model="defaultCheck"
            >{{ val }}</FormRadio
          >
        </client-only>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-2/4 p-4">
        <client-only>
          <FormDatePicker
            v-model="processingDate"
            name="processingDate"
            rules="required"
            label="Processing Date"
            placeholder="01-01-1970"
          ></FormDatePicker>
        </client-only>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-2/4 p-4">
        <client-only>
          <FormDatePicker
            v-model="processingDate"
            name="processingDate"
            :showOptional="false"
            :dateRange="{ enable: true, end: processingDate, start: endDate }"
            rules="required"
            label="Limited date range (Allow only 1 month from today)"
            placeholder="01-01-1970"
          ></FormDatePicker>
        </client-only>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <client-only>
          <FormTextarea
            v-model="textAreaData"
            name="textarea"
            label="Additional information"
            placeholder="Optional"
            icon="camera"
          ></FormTextarea>
        </client-only>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <client-only>
          <FormToggle v-model="formToggle"></FormToggle>
        </client-only>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <client-only><FileDrop v-model="file"> </FileDrop> </client-only>
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
import Navigation from "~/components/Site/Header";
import Card from "~/components/Site/Card";
import CategoriesCard from "~/components/Site/CategoriesCard";
import Footer from "~/components/Site/Footer";
import Pagination from "~/components/Site/Pagination";
import RichTextQuillEditor from "~/components/Input/RichTextQuillEditor";
import FormText from "~/components/Input/FormText";
import FormTextarea from "~/components/Input/FormTextarea";
import RichTextSimpleMDE from "~/components/Input/RichTextSimpleMDE";
import FormCheckbox from "~/components/Input/FormCheckbox";
import FormDatePicker from "~/components/Input/FormDatePicker";
import FormToggle from "~/components/Input/FormToggle";
import FileDrop from "~/components/Input/FileDrop";
import md from "marked";

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
    FormToggle,
    FileDrop,
  },
  head: {
    title: "Showcase",
  },
  computed: {
    richTextBody() {
      //console.log(this.richTextContent);
      return this.richTextContent.split("").reverse().join("");
    },
    now: function () {
      return Date.now();
    },
  },
  created() {
    this.richTextContent = "";
  },
  data() {
    return {
      abn: null,
      checkBoxRequirement: [true, false, true, true],
      crd: null,
      tags: ["#react", "#javascript", "#tailwind"],
      carbrands: ["Toyota", "Nissan", "Isuzu", "Ford"],
      processingDate: new Date(),
      endDate: new Date(+new Date() + 2678400000),
      radio: ["AM", "PM"],
      defaultCheck: "AM",
      textAreaData: null,
      formToggle: true,
      file: null,
      richTextContent: "",
    };
  },
  watch: {
    abn(value) {
      if (value) {
        console.log(value);
      }
    },
    richTextContent(value) {
      this.richTextContent = value;
    },
  },
};
</script>
