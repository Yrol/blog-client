<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">All Posts</h3>
    <div v-if="loading">
      <AdminCard v-for="item in 3" :key="item" :dataReady="false" />
    </div>
    <div v-else>
      <AdminCard
        v-for="(post, index) in posts"
        :key="index"
        @delete-post="deletePost"
        :dataReady="true"
        :postData="post"
      />
    </div>
    <div class="flex flex-wrap">
      <Modal :visible="showModal" @close="showModal = false">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div
              class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
            >
              <svg
                class="h-6 w-6 text-red-600"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                Are you sure?
              </h3>

              <div class="mt-2">
                <p class="text-sm leading-5 text-gray-500">
                  This action will permanently delete the post.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button
              @click="modalOk"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              :class="{ submitting: modalSubmitting }"
            >
              Yes, Proceed

              <div class="loading"></div>
            </button>
          </span>

          <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button
              @click="showModal = false"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-purple-300 focus:shadow-outline-purple transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              No
            </button>
          </span>
        </div>
      </Modal>
    </div>
  </div>
</template>
<script>
import AdminCard from '~/components/Dashboard/AdminCard';
import Modal from '~/components/Site/Modal';
import agent from '~/api/agent';
export default {
  name: 'AllPosts',
  head: {
    title: 'All Posts',
  },
  layout: 'adminLayout',
  components: {
    AdminCard,
  },
  data() {
    return {
      posts: { id: 1, title: 'Test title', body: 'Test body' },
      error: false,
      loading: true,
      showModal: false,
      modalSubmitting: false,
      deletePostId: Number,
    };
  },
  methods: {
    deletePost(deleteId) {
      this.deletePostId = deleteId;
      this.showModal = true;
    },
    modalOk() {
      this.showModal = false;
    },
  },
  async fetch() {
    try {
      this.error = false;
      this.loading = true;
      let posts = await agent.Posts.all();
      this.posts = posts.data;
    } catch (error) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
  fetchOnServer: false,
  fetchDelay: 0,
};
</script>
