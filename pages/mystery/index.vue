<template>
  <client-only>
    <ValidationObserver ref="loginForm" v-slot="{ handleSubmit }">
      <div class="container mx-auto p-2">
        <div
          class="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl"
        >
          <div class="text-center mb-8">
            <h1 class="font-bold text-2xl font-bold">Login</h1>
          </div>
          <form @submit.prevent="handleSubmit(login)">
            <div class="mt-5">
              <FormText
                rules="required"
                name="email"
                label="Email"
                placeholder="Email"
                class="my-4"
                icon="user"
                v-model="email"
              ></FormText>
            </div>
            <div class="mt-5">
              <FormText
                rules="required"
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                class="my-4"
                icon="key"
                v-model="password"
              ></FormText>
            </div>
            <div class="mt-10">
              <button
                type="submit"
                class="w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-indigo active:bg-purple-700 transition duration-150 ease-in-out"
                :class="{ submitting: submitting }"
              >
                <span>
                  <font-awesome-icon
                    :icon="['fas', 'sign-in-alt']"
                    class="fa-fw fa-lg mr-1"
                  />
                  Login
                </span>
                <div class="loading"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </ValidationObserver>
  </client-only>
</template>
<script>
import FormText from '~/components/Input/FormText';
export default {
  name: 'Mystery',
  head: {
    title: 'Mystery',
  },
  data() {
    return {
      email: null,
      password: null,
      submitting: false,
      errors: [],
    };
  },
  methods: {
    login() {
      if (this.submitting) {
        return;
      }

      this.submitting = true;

      this.$refs.loginForm.validate().then((result) => {
        let formData = new FormData();
        formData.append('email', this.email);
        formData.append('password', this.password);
        this.$auth
          .loginWith('local', {
            data: formData,
          })
          .then((res) => {
            console.log(res.data.token);
          })
          .catch((error) => {
            this.$refs.loginForm.setErrors(error.response.data.errors || {});
          })
          .finally(() => {
            this.submitting = false;
          });
      });
    },
  },
};
</script>
