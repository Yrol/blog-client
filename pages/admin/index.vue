<template></template>
<script>
export default {
  name: 'Admin',
  head: {
    title: 'Admin',
  },
  //middleware: 'unauthinticated',
  components: {},
  data() {
    return {
      mainOptions: [
        { slug: 'all-posts', name: 'All Posts' },
        { slug: 'new-post', name: 'New Post' },
        { slug: 'new-category', name: 'New Category' },
        { slug: 'settings', name: 'Settings' },
        { slug: 'help', name: 'Help' },
      ],
    };
  },
};
</script>
