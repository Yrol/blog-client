<template>
  <div class="mt-4">
    <div class="flex flex-wrap -mx-6">
      <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
        <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
          <div>
            <font-awesome-icon
              :icon="['fas', 'newspaper']"
              class="fa-fw fa-3x mr-1 fa-square fa-w-14"
            />
          </div>
          <div class="mx-5">
            <h4 class="text-2xl font-semibold text-gray-700">
              {{ totalPosts }}
            </h4>
            <div class="text-gray-500">Total Posts</div>
          </div>
        </div>
      </div>

      <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
        <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
          <div>
            <font-awesome-icon
              :icon="['fas', 'folder']"
              class="fa-fw fa-3x mr-1 fa-square fa-w-14"
            />
          </div>

          <div class="mx-5">
            <h4 class="text-2xl font-semibold text-gray-700">
              {{ totalCategories }}
            </h4>
            <div class="text-gray-500">Total Categories</div>
          </div>
        </div>
      </div>

      <!-- <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
        <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
          <div>
            <font-awesome-icon
              :icon="['fas', 'folder']"
              class="fa-fw fa-3x mr-1 fa-square fa-w-14"
            />
          </div>

          <div class="mx-5">
            <h4 class="text-2xl font-semibold text-gray-700">
              {{ totalCategories }}
            </h4>
            <div class="text-gray-500">Total Categories</div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      totalPosts: 0,
      totalCategories: 0,
    };
  },
};
</script>
