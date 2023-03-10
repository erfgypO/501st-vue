import { defineStore } from 'pinia'
import axios from "axios";
import {useAppStore} from "@/store/app";

export const useMessagesStore = defineStore('messages', {
  state: () => ({
    messages: [],
  }),
  actions: {
    async addMessage(name, mail, message) {
      const response = await axios.post('https://api.501st.tech/message', {
        author: name,
        email: mail,
        message
      });

      return response.status === 200;
    },
    async loadMessages() {
      const appStore = useAppStore();

      if(!appStore.isLoggedIn) return;

      const response = await axios.get('https://api.501st.tech/message', {
        headers: {
          authorization: `Bearer ${appStore.token}`
        }
      });

      if(response.status !== 200) return;

      this.messages = response.data;
    }
  },
})
