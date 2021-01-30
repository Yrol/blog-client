<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">New Post</h3>
    <client-only>
      <ValidationObserver ref="postForm" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(submitPost)">
          <div class="min-w-full">
            <FormText
              rules="required"
              name="abn"
              label="Post title"
              placeholder="Post title"
              class="my-4"
              icon="newspaper"
              v-model="postTitle"
            ></FormText>
          </div>
          <div class="min-w-full">
            <DropDown
              name="category"
              label="Category"
              rules="required"
              icon="folder"
              placeholder="Please choose a category"
              :options="categoryOptions"
              :initialSelected="selectedCategory"
              class="my-4"
              v-model="postCategory"
            />
          </div>
          <div class="min-w-full">
            <div
              class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
            >
              <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
                  <svg
                    class="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                    />
                  </svg>
                  Body content
                </p>
                <div class="text-gray-900 font-bold text-xl mb-2">
                  <RichTextSimpleMDE v-model="richTextContent" />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <FormCheckbox
              v-for="(value, index) in postOptions"
              :key="index"
              :val="value.option"
              v-model="value.selected"
            >
              {{ value.display }}
            </FormCheckbox>
          </div>
          <div class="mt-5">
            <Button
              :variant="variant"
              :loading="submitting"
              :disableButton="buttonDisable"
              icon="sign-in-alt"
            >
              Create
            </Button>
          </div>
        </form>
      </ValidationObserver>
    </client-only>
  </div>
</template>
<script>
import md from 'marked';
import RichTextSimpleMDE from '~/components/Input/RichTextSimpleMDE';
import AdminCard from '~/components/Dashboard/AdminCard';
import FormText from '~/components/Input/FormText';
import Button from '~/components/Input/Button';
import FormCheckbox from '~/components/Input/FormCheckbox';
import DropDown from '~/components/Input/DropDown';
import agent from '../../api/agent';
export default {
  name: 'NewPost',
  head: {
    title: 'New Post',
  },
  layout: 'adminLayout',
  components: {
    RichTextSimpleMDE,
    AdminCard,
    FormText,
    Button,
    FormCheckbox,
    DropDown,
  },
  data() {
    return {
      richTextContent: '',
      postTitle: '',
      postCategory: '',
      buttonDisable: false,
      variant: 'success',
      loading: false,
      errors: Array,
      submitting: false,
      categoriesList: Array,
      postOptions: [
        { display: 'Live', option: 'is_live', selected: true },
        {
          display: 'Disable comments',
          option: 'close_to_comments',
          selected: true,
        },
      ],
      categoryOptions: [
        { value: '1', name: 'Nissan' },
        { value: '2', name: 'Toyota' },
      ],
      selectedCategory: '2',
    };
  },
  methods: {
    async submitPost() {
      if (this.submitting) {
        return;
      }

      this.submitting = true;

      let formData = {
        post_title: this.postTitle,
        body: this.richTextContent,
        is_live: this.postOptions[0].selected,
        close_to_comments: this.postOptions[1].selected,
        category_id: this.postCategory,
      };

      try {
        await agent.Posts.create(formData);
      } catch (error) {
      } finally {
        this.submitting = false;
      }
    },

    async fetchCategories() {
      try {
        let categories = await agent.Categories.categories();
        this.categoriesList = categories.data;
        console.log(this.categoriesList);
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
  },
  beforeMount() {
    this.fetchCategories();
  },
};
</script>
