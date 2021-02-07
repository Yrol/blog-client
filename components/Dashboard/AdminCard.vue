<template>
  <div class="mb-8 p-2 w-full flex flex-wrap bg-grey-light">
    <div class="h-16 border-8 w-full md:w-1/2 lg:w-1/4 bg-grey">
      <div class="text-sm">
        <!-- <p class="text-black leading-none">{{ author }}</p> -->
        <p class="text-gray-600">
          Category:
          <span
            class="text-xs mb-2 font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1"
          >
            Test category
          </span>
        </p>
        <p class="text-gray-600">Published: test publish</p>
      </div>
    </div>
    <div
      class="md:flex md:justify-end h-16 border-8 w-full md:w-1/2 lg:w-3/4 bg-grey"
    >
      <a
        class="bg-pink-500 lg:w-1/4 flex flex-wrap content-center text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style="transition: all 0.15s ease"
      >
        <font-awesome-icon
          :icon="['fas', 'book-reader']"
          class="fa-fw fa-lg mr-1 fa-square fa-w-14"
        /><span>Read more </span>
      </a>
    </div>
  </div>
</template>
