<template>
  <div id="main" class="min-h-screen overflow-auto">
    <Nav
      class="hidden md:block"
      :menu-list-item="menuListItems"
      :user="user"
    ></Nav>
    <header
      class="bg-white flex justify-between px-2 lg:px-20 border-b border-gray-3 border-solid"
    >
      <Nav
        class="md:hidden"
        mode="mobile"
        :menu-list-item="menuListItems"
        :user="user"
      ></Nav>
      <nuxt-link class="flex items-center" to="/">
        <img
          alt="Velocity"
          src="~/assets/images/logo.png"
          height="24"
          width="22"
        />
        <span class="ml-3">Yrol.blog</span>
      </nuxt-link>
      <div class="flex items-center">
        <AdminButton
          @click.native="openSideBar"
          class="mx-2 relative text-gray-1 hover:text-primary-normal"
          round
          url="#"
        >
          <span
            class="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary-normal"
          ></span>
          <font-awesome-icon
            :icon="['fas', 'bell']"
            class="fa-fw fa-lg mr-1 fa-square fa-w-14"
          />
        </AdminButton>
        <AdminButton
          @click.native="openSideBar"
          class="mx-2 relative text-gray-1 hover:text-primary-normal"
          round
          url="#"
        >
          <span
            class="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary-normal"
          ></span>
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            class="fa-fw fa-lg mr-1 fa-square fa-w-14"
          />
        </AdminButton>
        <AdminButton @click.native="openSideBar" class="mx-2" round>
          <avatar
            type="simple"
            :img="user.img"
            img-class="h-8 w-8 rounded-full"
            url="#"
          >
          </avatar>
        </AdminButton>
      </div>
    </header>
    <router-view class="min-h-full" />
    <SideBar :is-visible="isOpenSideBar"></SideBar>
  </div>
</template>
<script>
import Nav from '~/components/Dashboard/Nav';
import AdminButton from '~/components/Dashboard/AdminButton';
import Avatar from '~/components/Dashboard/Avatar';
import SideBar from '~/components/Dashboard/SideBar';
export default {
  name: 'Admin',
  head: {
    title: 'Admin',
  },
  //middleware: 'unauthinticated',
  components: {
    Nav,
    AdminButton,
    Avatar,
    SideBar,
  },
  data() {
    return {
      mainOptions: [
        { slug: 'all-posts', name: 'All Posts' },
        { slug: 'new-post', name: 'New Post' },
        { slug: 'new-category', name: 'New Category' },
        { slug: 'settings', name: 'Settings' },
        { slug: 'help', name: 'Help' },
      ],
      menuListItems: [
        {
          id: 0,
          icon: 'glasses',
          title: 'Overview',
          url: '/admin',
        },
        {
          id: 1,
          icon: 'newspaper',
          title: 'All posts',
          url: '/admin/all-posts',
        },
        {
          id: 2,
          icon: 'plus',
          title: 'New Post',
          url: '/admin/new-post',
        },
        {
          id: 3,
          icon: 'folder',
          title: 'New Category',
          url: '/admin/new-category',
        },
        {
          id: 4,
          icon: 'cog',
          title: 'Settings',
          url: '/admin/settings',
        },
        {
          id: 5,
          icon: 'hands-helping',
          title: 'Help',
          url: '/admin/help',
        },
      ],
      user: {
        img: {
          src:
            'https://avatars2.githubusercontent.com/u/8627014?s=460&u=d5f69b2710640c2ec400b9018aabd8b1d92eea51&v=4',
          alt: 'avatar',
        },
        firstName: 'Yrol',
        lastName: 'Fernando',
        professionnalFunction: 'Admin',
      },
      isOpenSideBar: false,
    };
  },
  methods: {
    openSideBar() {
      this.isOpenSideBar = !this.isOpenSideBar;
    },
  },
};
</script>
<style>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  background-color: #f4f6fc;
  grid-template-columns: 100%;
  grid-template-rows: 1fr;
  grid-template-areas:
    'head'
    'main';
}
#main > header {
  grid-area: head;
}
main {
  grid-area: main;
}

@media (min-width: 768px) {
  #main {
    grid-template-columns: auto 1fr;
    grid-template-rows: 80px 1fr;
    grid-template-areas:
      'nav head'
      'nav main';
  }

  #main > header {
    grid-area: head;
  }
}
</style>
