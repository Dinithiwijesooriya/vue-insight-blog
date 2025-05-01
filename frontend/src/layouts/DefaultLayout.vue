<template>
  <div class="flex flex-col min-h-screen">
    <header class="sticky top-0 z-50">
      <Navbar />
    </header>
    
    <main class="flex-grow">
      <router-view />
    </main>
    
    <footer class="mt-auto">
      <Footer />  
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>