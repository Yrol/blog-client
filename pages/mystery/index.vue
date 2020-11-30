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
                name="username"
                label="Username"
                placeholder="Username"
                class="my-4"
                icon="user"
                v-model="username"
              ></FormText>
            </div>
            <div class="mt-5">
              <FormText
                rules="required"
                name="password"
                label="Password"
                placeholder="Password"
                class="my-4"
                icon="key"
                v-model="password"
              ></FormText>
            </div>
            <div class="mt-10">
              <input
                type="submit"
                value="Login"
                class="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </ValidationObserver>
  </client-only>
</template>
<script>
import FormText from "~/components/Input/FormText";
export default {
  name: "Mystery",
  head: {
    title: "Mystery",
  },
  data() {
    return {
      username: null,
      password: null,
      submitting: false,
    };
  },
  methods: {
    login() {
      if (this.submitting) {
        return;
      }

      this.submitting = true;
    },
  },
};
</script>
