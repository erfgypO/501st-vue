<template>
  <v-card class="mt-5">
    <v-card-title>Login</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <v-text-field label="Password" v-model="password" type="password" />
        </v-col>
        <v-col cols="12" md="4" offset-md="4">
          <v-btn color="primary" block @click="login">Login</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import {useAppStore} from "@/store/app";

export default {
  name: "LoginView",
  setup() {
    const appStore = useAppStore();

    return { appStore };
  },
  data: () => ({
    password: '',
  }),
  methods: {
    async login() {
      if(this.password.length === 0) return;

      await this.appStore.login(this.password);
      this.password = '';

      if(this.appStore.isLoggedIn) {
        await this.$router.push('/dashboard');
      }
    }
  }
}
</script>

<style scoped>

</style>
