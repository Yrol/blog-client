<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">New Post</h3>
    <div class="mt-5">
      <FormText
        rules="required"
        name="abn"
        label="Post title"
        placeholder="Post title"
        class="my-4"
        icon="newspaper"
        v-model="postTitle"
      ></FormText>
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
              <client-only>
                <RichTextSimpleMDE v-model="richTextContent" />
              </client-only>
            </div>
          </div>
        </div>
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
    </div>
  </div>
</template>
<script>
import md from 'marked';
import RichTextSimpleMDE from '~/components/Input/RichTextSimpleMDE';
import AdminCard from '~/components/Dashboard/AdminCard';
import FormText from '~/components/Input/FormText';
import Button from '~/components/Input/Button';
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
  },
  data() {
    return {
      richTextContent: '',
      postTitle: '',
      buttonDisable: false,
      variant: 'success',
      submitting: false,
    };
  },
};
</script>