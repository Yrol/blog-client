<template>
  <div>
    <div class="mb-4 w-full flex flex-wrap">
      <div class="flex w-1/2">
        <h3 class="text-gray-700 text-3xl font-medium">Categories</h3>
      </div>
      <div class="flex justify-end content-end border-8:transparent w-1/2">
        <Button
          variant="success"
          :loading="false"
          :disableButton="false"
          size="small"
          icon="plus"
          @click="addCategoryModalOpen"
        >
          Add new
        </Button>
      </div>
    </div>
    <div class="mt-4">
      <div v-if="loading">
        <AdminCategoryCard v-for="item in 3" :key="item" :dataReady="false" />
      </div>
      <div class="mt-4" v-else>
        <AdminCategoryCard
          v-for="(category, index) in categories"
          :key="index"
          :dataReady="true"
          @edit-category="editCategoryModalOpen"
          @delete-category="deleteCategoryModalOpen"
          :categoryData="category"
        />
      </div>
    </div>

    <Modal
      :visible="modalStatus.addCategory"
      @close="modalStatus.addCategory = false"
    >
      <ValidationObserver ref="postForm" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(addCategoryAction)">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Create new category
                </h3>

                <div class="mt-2">
                  <p class="text-sm leading-5 text-gray-500">
                    This action will create a new category.
                  </p>
                  <p class="text-sm leading-5 text-gray-500"></p>
                </div>

                <div class="mt-2">
                  <div class="min-w-full">
                    <FormText
                      rules="required"
                      name="title"
                      label="Category title"
                      placeholder="Category title"
                      class="my-4"
                      icon="folder"
                      v-model="categoryTitle"
                    ></FormText>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <Button
                variant="success"
                :loading="modalSubmitting"
                :disableButton="modalSubmitting ? true : false"
                size="small"
                width="full"
              >
                Create
              </Button>
            </span>

            <span
              class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
            >
              <Button
                variant="white"
                @click.native="modalStatus.addCategory = false"
                :disableButton="modalSubmitting ? true : false"
                size="small"
                width="full"
              >
                Cancel
              </Button>
            </span>
          </div>
        </form>
      </ValidationObserver>
    </Modal>
  </div>
</template>

<script>
import AdminCategoryCard from '~/components/Dashboard/AdminCategoryCard.vue';
import Button from '~/components/Input/Button';
import agent from '~/api/agent';
import Modal from '~/components/Site/Modal';
import FormText from '~/components/Input/FormText';
import { mapGetters } from 'vuex';
export default {
  name: 'Categories',
  components: {
    Button,
    AdminCategoryCard,
    Modal,
    FormText,
  },
  head: {
    title: 'Categories',
  },
  layout: 'adminLayout',
  computed: {
    ...mapGetters({
      categoryTotal: 'admin/admin-categories/totalCategories',
      categories: 'admin/admin-categories/allCategories',
    }),
  },
  data() {
    return {
      error: false,
      loading: true,
      modalStatus: {
        addCategory: false,
        editCategory: false,
        deleteCategory: false,
      },
      modalSubmitting: false,
      categoryTitle: '',
    };
  },
  methods: {
    addCategoryModalOpen() {
      this.setModalStatus('addCategory', true);
    },

    editCategoryModalOpen(id, slug) {},

    deleteCategoryModalOpen(id, slug) {},

    async addCategoryAction() {
      if (!this.modalStatus.addCategory) {
        return;
      }

      if (this.modalSubmitting) {
        return;
      }

      this.modalSubmitting = true;

      let formData = {
        title: this.categoryTitle,
      };

      try {
        const newCategory = await agent.Categories.create(formData);
      } catch (error) {
      } finally {
        this.modalSubmitting = false;
      }
    },

    setModalStatus(modal, status) {
      for (var key in this.modalStatus) {
        if (key == modal) {
          this.modalStatus[key] = status;
          continue;
        }

        this.categoryTitle = '';
        this.error = false;
        this.modalSubmitting = false;
        this.modalStatus[key] = false;
      }
    },
  },
  async fetch() {
    try {
      this.error = false;
      this.loading = true;
      let categories = await agent.Categories.categories();
      this.$store.dispatch(
        'admin/admin-categories/totalCategories',
        categories.length
      );
      this.$store.dispatch('admin/admin-categories/categories', categories);
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
