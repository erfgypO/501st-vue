import { defineStore } from 'pinia'
import axios from "axios";
export const useMessagesStore = defineStore('messages', {
  state: () => ({}),
  actions: {
    async addMessage(name, mail, message) {
      const response = await axios.post('https://api.501st.tech/message', {
        author: name,
        email: mail,
        message
      });

      return response.status === 200;
    }
  },
})
