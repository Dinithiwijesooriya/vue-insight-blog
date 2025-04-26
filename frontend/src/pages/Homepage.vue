<template>
  <!-- Hero Section with Dark Blue Text -->
  <div class="relative bg-cover bg-center h-screen flex items-center" style="background-image: url('/home.jpg');">
    <!-- Optimized overlay for dark blue text -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-gray-900/20"></div>

    <div class="relative z-10 max-w-2xl mx-auto px-6 text-center">
      <!-- Main heading in deep blue -->
      <h1 class="text-5xl md:text-6xl font-bold mb-6 text-blue-900 drop-shadow-md">
        Decoding Success
      </h1>

      <!-- Updated Subheading with improved typography -->
      <p class="text-xl md:text-2xl text-blue-700 font-normal mb-10 leading-normal max-w-xl mx-auto tracking-wide">
        Actionable and simple adjustments, and growth frameworks for modern entrepreneurs.
      </p>

      <!-- Button group with dark blue accents -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          class="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-all duration-300 shadow-lg font-semibold">
          Explore Case Studies
        </button>
        <button
          class="bg-transparent border-2 border-blue-800 text-blue-800 px-8 py-3 rounded-lg hover:bg-blue-800/10 transition-all duration-300 font-semibold">
          Leadership
        </button>
      </div>
    </div>
  </div>

  <!-- Featured Blog Posts Section -->
  <div class="container mx-auto px-6 py-20 bg-white">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-blue-900 mb-4">Featured Insights</h2>
      <p class="text-xl text-blue-700 max-w-2xl mx-auto font-normal tracking-wide">
        Discover our latest research and business analysis
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <PostPreviewCard v-for="post in posts" :key="post.id" :title="post.title" :description="post.description"
        :author="post.author" :date="post.date" />
    </div>

    <div class="text-center mt-16">
      <button @click="$router.push('/articles')"
        class="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-all duration-300 shadow-md font-medium">
        View All Articles →
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostPreviewCard from '../components/PostPreviewCard.vue';

interface Post {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
}

export default defineComponent({
  name: 'Homepage',
  components: { PostPreviewCard },
  data(): { posts: Post[] } {
    return {
      posts: [
        {
          id: 1,
          title: 'How Company X Scaled 10x Using AI',
          description: 'Discover the AI strategies that helped Company X achieve exponential growth.',
          author: 'Sarah Johnson',
          date: '2023-10-01',
        },
        {
          id: 2,
          title: 'The Future of Remote Work in 2024',
          description: 'Analyzing emerging trends in distributed team management.',
          author: 'Michael Chen',
          date: '2023-11-15',
        },
        {
          id: 3,
          title: 'Sustainable Business Practices That Pay Off',
          description: 'How eco-friendly operations can drive profitability.',
          author: 'Emma Rodriguez',
          date: '2023-12-05',
        },
      ],
    };
  },
});
</script>