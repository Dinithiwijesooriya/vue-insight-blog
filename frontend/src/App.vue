<template>
  <div id="app">
    <Navbar />
    <Homepage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import Homepage from './pages/Homepage.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Homepage
  }
});
</script>

<style>
/* Add any global styles here */
</style>
