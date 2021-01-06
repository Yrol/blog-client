<template>
  <div class="w-full lg:flex shadow-lg mb-2">
    <div
      class="w-full bg-white p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-3">
        <div class="text-black font-bold text-xl mb-2">
          <span>{{ articleData.title }}</span>
        </div>
        <span class="text-grey-darker text-base">{{ articleData.body }}</span>
        <div class="mb-2 mt-2">
          <a
            class="text-sm text-gray-600 p-1 hover:text-black"
            v-for="(tag, index) in articleData.tag_list[0]"
            :href="`/t/${tag}`"
            :key="`${index}`"
          >
            <span class="text-opacity-50">{{ tag }}</span>
          </a>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="flex items-center w-3/4 h-12">
          <div class="text-sm">
            <p class="text-black leading-none">{{ articleData.user.name }}</p>
            <p class="text-grey-dark">
              {{ articleData.created_at_dates.created_at }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailsCard',
  props: {
    articleData: {},
  },
};
</script>
