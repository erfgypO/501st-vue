<template>
  <v-card max-width="1200" class="mx-auto mt-5">
    <v-card-title>Contact me</v-card-title>
    <v-card-text>
      <v-form v-model="valid" @submit.prevent="addMessage" ref="form">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field label="Your name" :rules="nameRules" v-model="name" required />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Your mail" :rules="mailRules" v-model="mail" required />
          </v-col>
          <v-col cols="12">
            <v-textarea label="Your message" auto-grow v-model="message" :rules="messageRules" required />
          </v-col>
          <v-col cols="12" md="4" offset-md="4">
            <v-btn type="submit" block color="success" :disabled="!valid" :loading="loading">Send message</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-snackbar timeout="5000" color="success" v-model="snackbar">Successfully sent message :)</v-snackbar>
  </v-card>
</template>

<script>
import {useMessagesStore} from "@/store/messages";

export default {
  name: "ContactView",
  setup() {
    const messagesStore = useMessagesStore();

    return { messagesStore };
  },
  data: () =>  ({
    snackbar: false,
    loading: false,
    valid: false,
    name: '',
    nameRules: [
      v => v ? true : 'Please enter your name',
    ],
    mail: '',
    mailRules: [
      v => v ? true : 'Please enter your email address',
      v => /^\S+@\S+\.\S+$/.test(v) ? true : 'Please enter a valid email address',
    ],
    message: '',
    messageRules: [
      v => v ? true : 'Please enter your message',
    ]
  }),
  methods: {
    async addMessage() {
      try {
        this.loading = true;
        await this.messagesStore.addMessage(this.name, this.mail, this.message);
        this.$refs.form.reset();
        this.snackbar = true;
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>

</style>
