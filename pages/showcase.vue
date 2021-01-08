<template>
  <div>
    <Navigation />

    <div class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <!-- Card -->
        <Card
          v-bind:tags="tags"
          :dataReady="true"
          :toLocation="toLocation"
          :postData="articleData"
        />
        <!-- Card Skeleton mode (will be used when loading the posts)-->
        <Card :dataReady="false" />
      </div>
      <div class="w-ful md:w-1/4 lg:pl-0 md:pl-0 p-4">
        <!-- Categories Card -->
        <CategoriesCard />
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
        <span v-html="richTextBody"></span>
      </div>
    </div>
    <!-- Show only if logged in using nuxt auth-->
    <div v-if="isAuthenticated" class="flex flex-wrap">
      <div class="w-full md:w-3/4 p-4">
        <span>User has logged and the token is</span>
        <p class="flex flex-wrap">{{ `${this.$auth.getToken('local')}` }}</p>
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
        <Pagination
          :total="20"
          :perPage="2"
          @update-pagenumber="updatePageNumber"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/Site/Header';
import Card from '~/components/Site/Card';
import CategoriesCard from '~/components/Site/CategoriesCard';
import Footer from '~/components/Site/Footer';
import Pagination from '~/components/Site/pagination';
import FormText from '~/components/Input/FormText';
import FormTextarea from '~/components/Input/FormTextarea';
import RichTextSimpleMDE from '~/components/Input/RichTextSimpleMDE';
import FormCheckbox from '~/components/Input/FormCheckbox';
import FormDatePicker from '~/components/Input/FormDatePicker';
import FormToggle from '~/components/Input/FormToggle';
import FileDrop from '~/components/Input/FileDrop';
import md from 'marked';
import { mapGetters } from 'vuex';

export default {
  name: 'Showcase',
  components: {
    Navigation,
    Card,
    CategoriesCard,
    Footer,
    Pagination,
    RichTextSimpleMDE,
    FormText,
    FormCheckbox,
    FormToggle,
    FileDrop,
  },
  head: {
    title: 'Showcase',
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    richTextBody() {
      return md.parse(this.richTextContent);
    },
    now: function () {
      return Date.now();
    },
  },
  created() {
    this.richTextContent = '';
  },
  data() {
    return {
      abn: null,
      checkBoxRequirement: [true, false, true, true],
      crd: null,
      tags: ['#react', '#javascript', '#tailwind'],
      carbrands: ['Toyota', 'Nissan', 'Isuzu', 'Ford'],
      processingDate: new Date(),
      endDate: new Date(+new Date() + 2678400000),
      radio: ['AM', 'PM'],
      defaultCheck: 'AM',
      textAreaData: null,
      formToggle: true,
      file: null,
      richTextContent: '',
      bodyText: '',
      toLocation: 'posts-slug',
      articleData: {
        title:
          'Pariatur quaerat voluptatem et cumque perspiciatis velit architecto.',
        body:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        category: { title: 'catrgory title' },
        slug:
          'pariatur-quaerat-voluptatem-et-cumque-perspiciatis-velit-architecto',
        created_at_dates: { created_at: 'Aug 16 2020' },
      },
    };
  },
  methods: {
    updatePageNumber(e) {
      console.log(e);
    },
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
