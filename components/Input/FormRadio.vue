<template>
  <ValidationProvider :name="name" tag="div" :rules="rules" v-slot="{ errors }">
    <label :for="id" class="cursor-pointer">
      <input
        type="radio"
        :id="id"
        :name="name"
        tabindex="1"
        :value="val"
        v-model="checked"
        @change="change"
        class="hidden"
      />
      <font-awesome-icon
        v-if="isChecked"
        :icon="['fas', 'dot-circle']"
        class="fa-fw mr-1 text-purple-600 subpixel-antialiased"
      />
      <font-awesome-icon
        v-else
        :icon="['fal', 'circle']"
        class="fa-fw mr-1 subpixel-antialiased"
        :class="{ 'text-red-600': errors[0] }"
      />
      <slot></slot>
    </label>
  </ValidationProvider>
</template>
<script>
export default {
  name: "FormRadio",
  inheritAttrs: true,
  props: {
    value: [String, Number, Boolean],
    val: [String, Number, Boolean],
    name: String,
    rules: String,
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(value) {
        this.proxy = value;
      },
    },
    isChecked() {
      return this.value === this.val;
    },
  },
  data() {
    return {
      proxy: false,
      id: `radio#${this._uid}`,
    };
  },
  methods: {
    change() {
      this.$emit("input", this.proxy);
    },
  },
};
</script>
