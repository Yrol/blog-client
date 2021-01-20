<template></template>
<script>
import md from 'marked';
import RichTextSimpleMDE from '~/components/Input/RichTextSimpleMDE';
import AdminCard from '~/components/Dashboard/AdminCard';
export default {
  name: 'Admin',
  head: {
    title: 'Admin',
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
