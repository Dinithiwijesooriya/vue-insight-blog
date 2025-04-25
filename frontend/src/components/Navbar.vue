<template>
  <nav class="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-white border-b border-blue-100 shadow-sm">
    <div class="logo">
      <h1 class="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 text-transparent bg-clip-text">
        Business Insights
      </h1>
    </div>
    <ul class="flex space-x-8">
      <li>
        <router-link 
          to="/" 
          class="text-gray-600 hover:text-blue-600 transition font-medium"
          active-class="text-blue-600 border-b-2 border-blue-500"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link 
          to="/about" 
          class="text-gray-600 hover:text-blue-600 transition font-medium"
          active-class="text-blue-600 border-b-2 border-blue-500"
        >
          About
        </router-link>
      </li>
      <li>
        <router-link 
          to="/contact" 
          class="text-gray-600 hover:text-blue-600 transition font-medium"
          active-class="text-blue-600 border-b-2 border-blue-500"
        >
          Contact
        </router-link>
      </li>
      <li>
        <router-link 
          to="/admin/create" 
          class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition shadow-sm"
          active-class="bg-gradient-to-r from-blue-600 to-blue-700"
        >
          Create
        </router-link>
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