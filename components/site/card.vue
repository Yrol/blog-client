<template>
  <div class="w-full lg:flex shadow-lg mb-2">
    <div
      class="w-full bg-white p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-3">
        <div
          :class="[
            dataReady
              ? 'text-black font-bold text-xl mb-2'
              : 'animate-pulse bg-gray-500 mb-2 h-6 w-2/4',
          ]"
        >
          <span v-if="title">{{ title }}</span>
        </div>
        <span
          v-if="dataReady"
          v-html="bodyText"
          class="text-grey-darker text-base"
        ></span>
        <div v-else>
          <p
            class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"
          ></p>
          <p
            class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"
          ></p>
          <p
            class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"
          ></p>
        </div>

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
        <div v-if="dataReady" class="flex items-center w-3/4 h-12">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src="https://avatars2.githubusercontent.com/u/8627014?s=460&u=d5f69b2710640c2ec400b9018aabd8b1d92eea51&v=4"
            alt="Avatar of Yrol Fernando"
          />
          <div class="text-sm">
            <p class="text-black leading-none">{{ author }}</p>
            <p class="text-grey-dark">{{ publishDate }}</p>
          </div>
        </div>
        <div v-else class="flex items-center w-3/4">
          <img class="w-10 h-10 rounded-full mr-4 animate-pulse bg-gray-500" />
          <div class="text-sm">
            <p
              class="text-black mb-3 leading-none w-12 h-2 animate-pulse bg-gray-400"
            ></p>
            <p class="text-grey-dark animate-pulse w-12 h-2 bg-gray-400"></p>
          </div>
        </div>
        <div v-if="toLocation && articleSlug" class="flex justify-end w-1/4">
          <nuxt-link
            :to="{
              name: toLocation,
              params: {
                slug: articleSlug,
              },
            }"
            class="bg-pink-500 right-0 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style="transition: all 0.15s ease"
          >
            <font-awesome-icon
              :icon="['fas', 'book-reader']"
              class="fa-fw fa-lg mr-1 fa-square fa-w-14"
            /><span>Read more </span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import md from 'marked';
export default {
  name: 'Card',
  props: {
    body: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    tags: {
      type: Array,
      default: () => [],
    },
    dataReady: {
      type: Boolean,
      default: false,
    },
    articleSlug: {
      type: String,
      default: '',
    },
    toLocation: {
      type: String,
      default: '',
    },
    author: String,
    publishDate: String,
  },
  computed: {
    bodyText() {
      return md.parse(this.body);
    },
  },
};
</script>
