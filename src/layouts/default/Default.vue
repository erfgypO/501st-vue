<template>
  <v-app>
    <v-layout>
    <v-app-bar color="primaryAlt" class="position-fixed">
      <v-app-bar-title>501st.tech</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-home" to="/" class="mr-1" exact/>
      <v-btn icon="mdi-forum" to="/contact" exact />
      <v-btn icon="mdi-login-variant" to="/login" exact />
    </v-app-bar>
    <default-view />

    <v-footer color="primaryAlt" class="text-center d-flex flex-column position-fixed" app>
      <div>
        <v-btn v-for="social of socials"
               :key="social.name"
               class="mx-4"
               :icon="social.icon"
               variant="text"
               :href="social.url"
        >
        </v-btn>
      </div>
      <div>
        {{ new Date().getFullYear() }} - <strong>Julius Hell</strong>
      </div>
    </v-footer>
    </v-layout>
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
  const socials = [
    {
      name: 'Github',
      url: 'https://github.com/erfgypO',
      icon: 'mdi-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/julius-hell-3a942b241',
      icon: 'mdi-linkedin'
    }
  ]
</script>
