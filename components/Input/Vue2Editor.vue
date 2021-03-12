<template>
  <div>
    <client-only>
      <VueEditor v-model="proxy" />
    </client-only>
  </div>
</template>


<script>
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

