<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <svg
            class="h-12 w-12"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
              fill="#4C51BF"
              stroke="#4C51BF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
              fill="white"
            />
          </svg>

          <span class="text-white text-2xl mx-2 font-semibold">Yrol.blog</span>
        </div>
      </div>

      <nav class="mt-10">
        <nuxt-link
          v-for="(menuItem, index) in menuListItems"
          :key="`${index}`"
          class="flex items-center duration-200 mt-4 py-2 px-6 border-l-4"
          @click.native="isOpen = false"
          :class="[$route.name === menuItem.name ? activeClass : inactiveClass]"
          :to="menuItem.url"
        >
          <font-awesome-icon
            :icon="['fas', menuItem.icon]"
            class="fa-fw fa-sm mr-1 fa-square fa-w-14"
          />
          <span class="mx-4">{{ menuItem.title }}</span>
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      activeClass: 'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100',
      inactiveClass:
        'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100',
      menuListItems: [
        {
          id: 0,
          icon: 'glasses',
          title: 'Overview',
          url: '/admin',
          name: 'admin',
        },
        {
          id: 1,
          icon: 'newspaper',
          title: 'All posts',
          url: '/admin/posts',
          name: 'admin-posts-page-page',
        },
        {
          id: 2,
          icon: 'plus',
          title: 'New Post',
          url: '/admin/new-post',
          name: 'admin-new-post',
        },
        {
          id: 3,
          icon: 'folder',
          title: 'Categories',
          url: '/admin/categories',
          name: 'admin-categories',
        },
        {
          id: 4,
          icon: 'cog',
          title: 'Settings',
          url: '/admin/settings',
          name: 'admin-settings',
        },
        {
          id: 5,
          icon: 'hands-helping',
          title: 'Help',
          url: '/admin/help',
          name: 'admin-help',
        },
      ],
    };
  },
  created() {
    this.$bus.$on('drawer-state', (state) => {
      this.isOpen = state;
    });
  },
};
</script>
