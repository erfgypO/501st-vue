// Utilities
import { defineStore } from 'pinia'
import axios from "axios";

export const useAppStore = defineStore('app', {
  state: () => ({
    token: undefined,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token
  },
  actions: {
    async login(password) {
      const response = await axios.post('https://api.501st.tech/token', { password });

      if(response.status !== 200) return;

      this.token = response.data.token;
    }
  },
  persist: true,
})
