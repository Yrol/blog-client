<template>
  <div class="wrap">
    <client-only>
      <vue-simplemde v-model="proxy" />
    </client-only>
  </div>
</template>

<script>
export default {
  name: "SimpleMDE",
  props: {
    value: String,
    name: String,
    icon: String,
    label: String,
  },
  data() {
    return {
      proxy: null,
    };
  },
  mounted() {
    this.proxy = this.value;
  },
  watch: {
    value(value) {
      if (value !== this.proxy) {
        this.proxy = value;
      }
    },
    proxy(value) {
      if (value !== this.value) {
        console.log(value);
        this.$emit("vue-simplemde", value);
      }
    },
  },
};
</script>
