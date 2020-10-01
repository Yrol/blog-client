<template>
  <div class="w-full lg:flex shadow-lg mb-2">
    <div
      class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-3">
        <div class="text-black font-bold text-xl mb-2">Lorem ipsum dolor sit amet, consectetur?</div>
        <p
          class="text-grey-darker text-base"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        <div class="mb-2 mt-2">
          <a href="/t/react" class="text-sm text-gray-600 p-1 hover:text-black">
            <span class="text-opacity-50">#</span>
            react
          </a>
          <a href="/t/javascript" class="text-sm text-gray-600 p-1 hover:text-black">
            <span class="text-opacity-50">#</span>
            javascript
          </a>
          <a href="/t/tailwind" class="text-sm text-gray-600 p-1 hover:text-black">
            <span class="text-opacity-50">#</span>
            tailwind
          </a>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="flex items-center w-3/4 h-12">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src="https://avatars2.githubusercontent.com/u/8627014?s=460&u=d5f69b2710640c2ec400b9018aabd8b1d92eea51&v=4"
            alt="Avatar of Jonathan Reinink"
          />
          <div class="text-sm">
            <p class="text-black leading-none">Yrol Fernando</p>
            <p class="text-grey-dark">Aug 18</p>
          </div>
        </div>
        <div class="flex justify-end w-1/4">
          <button
            class="bg-pink-500 right-0 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style="transition: all .15s ease"
          >
            <i class="fas fa-heart"></i> Read more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    value: String,
    name: String,
    body: String,
    title: String,
    tags: {
      type: Array,
      required: false
    },
    author: String,
    publishDate: String
  },
  data() {
    return {
      proxy: null
    };
  },
  mounted() {
    this.proxy = this.value;
  },
  watch: {
    value(value) {
      if (value !== this.value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
