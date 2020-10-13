<template>
  <div class="w-full lg:flex shadow-lg mb-2">
    <div
      class="w-full bg-white p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-3">
        <div class="text-black font-bold text-xl mb-2">
          {{ title }}
        </div>
        <p class="text-grey-darker text-base">
          {{ body }}
        </p>
        <div class="mb-2 mt-2">
          <a
            class="text-sm text-gray-600 p-1 hover:text-black"
            v-for="(tag, index) in tags"
            :href="`/t/${tag}`"
            :key="`${index}`"
          >
            <span class="text-opacity-50">{{ tag }}</span>
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
            <p class="text-black leading-none">{{ author }}</p>
            <p class="text-grey-dark">{{ publishDate }}</p>
          </div>
        </div>
        <div class="flex justify-end w-1/4">
          <button
            class="bg-pink-500 right-0 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style="transition: all 0.15s ease"
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
    body: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tags: [],
    author: String,
    publishDate: String,
  },
};
</script>
