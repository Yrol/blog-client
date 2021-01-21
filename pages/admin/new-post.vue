<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">New Post</h3>
  </div>
</template>
<script>
import md from 'marked';
import RichTextSimpleMDE from '~/components/Input/RichTextSimpleMDE';
import AdminCard from '~/components/Dashboard/AdminCard';
export default {
  name: 'NewPost',
  head: {
    title: 'New Post',
  },
  layout: 'adminLayout',
  components: {
    RichTextSimpleMDE,
    AdminCard,
  },
  data() {
    return {
      richTextContent: '',
    };
  },
};
</script>
