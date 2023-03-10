<template>
<div class="mt-5">
  <span class="text-h3">Dashboard</span>
  <v-card class="mt-2">
    <v-card-title>Messages</v-card-title>
    <v-card-text>
      <v-divider></v-divider>
      <div v-for="(message, index) of messages" :id="message.id" class="mt-2">
        <span class="text-h6">{{ message.author}} - {{ message.email }}</span>
        <p class="multi-line mb-2">{{ message.message }}</p>
        <v-divider v-if="index != messages.length - 1"></v-divider>
      </div>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
import { useMessagesStore } from "@/store/messages";

export default {
  name: "DashboardView",
  setup() {
    const messageStore = useMessagesStore();

    return { messageStore };
  },
  async mounted() {
    await this.messageStore.loadMessages();
  },
  computed: {
    messages() {
      return this.messageStore.messages;
    },
  },
}
</script>

<style scoped>

</style>
