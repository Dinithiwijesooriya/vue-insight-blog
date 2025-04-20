<template>
    <nav class="flex justify-between items-center p-4 bg-gray-100">
      <div class="logo">
        <h1 class="text-xl font-bold">My Blog</h1>
      </div>
      <ul class="nav-links flex space-x-4">
        <li>
          <router-link to="/" class="text-gray-700 hover:text-blue-500">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="text-gray-700 hover:text-blue-500">About</router-link>
        </li>
        <li>
          <router-link to="/contact" class="text-gray-700 hover:text-blue-500">Contact</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Navbar',
  });
  </script>
  
  <style scoped>
  /* Tailwind CSS handles all the styling, so no additional styles are needed here. */
  </style>