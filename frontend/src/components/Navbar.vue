<template>
  <nav class="flex justify-between items-center p-4 bg-white border-b border-gray-200">
    <div class="logo">
      <h1 class="text-xl font-bold text-black">Business Insights</h1>
    </div>
    <ul class="flex space-x-8">
      <li>
        <router-link to="/" class="text-gray-500 hover:text-black transition">Home</router-link>
      </li>
      <li>
        <router-link to="/about" class="text-gray-500 hover:text-black transition">About</router-link>
      </li>
      <li>
        <router-link to="/contact" class="text-gray-500 hover:text-black transition">Contact</router-link>
      </li>
      <li>
        <router-link to="/admin/create" class="text-accent hover:text-black transition">Create</router-link>
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