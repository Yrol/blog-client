<template>
  <div>
    <client-only>
      <vue-editor
        v-model="proxy"
        useCustomImageHandler
        @imageAdded="handleImageAdded"
      >
      </vue-editor>
    </client-only>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'Vue2Editor',
  props: {
    value: String,
  },
  data() {
    return {
      proxy: null,
    };
  },
  mounted() {
    this.proxy = this.value;
  },
  methods: {
    handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
      const CLIENT_ID = '';
      var formData = new FormData();
      formData.append('image', file);
      axios({
        url: 'https://api.imgur.com/3/image',
        method: 'POST',
        headers: {
          Authorization: 'Client-ID ' + CLIENT_ID,
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      })
        .then((result) => {
          let url = result.data.data.link;
          Editor.insertEmbed(cursorLocation, 'image', url);
        })
        .catch((err) => {
          console.log(err);
          this.$toast.show({
            type: 'danger',
            title: 'Error',
            message: 'An error occurred while uploading the image.',
          });
        })
        .finally(() => {
          resetUploader();
        });
    },
  },
  watch: {
    value(value) {
      if (value !== this.proxy) {
        this.proxy = value;
      }
    },
    proxy(value) {
      if (value !== this.value) {
        this.$emit('input', value);
      }
    },
  },
};
</script>

