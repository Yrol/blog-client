<template>
  <div class="flex flex-col">
    <client-only>
      <div v-if="loading">
        <AdminLoader title="Loading..." />
      </div>
      <div v-else>
        <div v-if="keyValues.length > 0">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Key
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Value
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Decription
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(keyValue, index) in keyValues" :key="index">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <div class="ml-3">
                      <p class="text-gray-900 font-medium whitespace-no-wrap">
                        {{ keyValue.key }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-600 whitespace-no-wrap">
                    {{ keyValue.value }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-600 whitespace-no-wrap"></p>
                </td>
                <td
                  class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                >
                  <div class="relative">
                    <button
                      @click="dropdownOpen = !dropdownOpen"
                      type="button"
                      class="inline-block text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        class="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                        />
                      </svg>
                    </button>
                    <div
                      v-show="dropdownOpen"
                      @click="dropdownOpen = false"
                      class="fixed inset-0 h-full w-full z-10"
                    ></div>

                    <div
                      v-show="dropdownOpen"
                      class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
                    >
                      <button
                        type="button"
                        class="block flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                      >
                        <span class="flex-start">Edit</span>
                      </button>
                      <button
                        type="button"
                        class="block flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                      >
                        <span class="flex-start">Delete</span>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else></div>
      </div>
    </client-only>
  </div>
</template>
<script>
import AdminLoader from '~/components/Dashboard/AdminLoader';
import Modal from '~/components/Site/Modal';
import agent from '~/api/agent';

export default {
  name: 'KeyValue',
  head: {
    title: 'Key Value',
  },
  layout: 'adminLayout',
  components: {
    AdminLoader,
    Modal,
  },
  data() {
    return {
      loading: false,
      dropdownOpen: false,
      keyValues: [],
    };
  },
  methods: {
    async submitKeyValue() {},
    async getSettings() {},
  },
  async fetch() {
    try {
      this.error = false;
      this.loading = true;
      const keyValues = await agent.SettingsKeyValue.keyValues();
      this.keyValues = keyValues;
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
