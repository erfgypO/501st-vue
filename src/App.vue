<template>
  <router-view />
</template>

<script>
import { inject } from 'vue';

export default {
  data() {
    return {
    };
  },
  setup() {
    const plausible = inject('plausible');
    return {
      plausible,
    };
  },
};
</script>

<style>
html {
  overflow-y: unset !important;
}
</style>
