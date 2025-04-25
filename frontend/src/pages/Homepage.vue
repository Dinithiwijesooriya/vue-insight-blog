<template>
  <!-- Hero Section with Dark Blue Text -->
  <div class="relative bg-cover bg-center h-screen" style="background-image: url('/home.jpg');">
    <div class="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-800/70"></div>
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-blue-600 text-transparent bg-clip-text">
        Decoding Success
      </h1>
      <p class="text-lg sm:text-xl max-w-2xl mb-8 text-black-100 font-medium">
        Actionable case studies, tech trends, and growth frameworks for modern entrepreneurs.
      </p>
      <button class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:opacity-90 transition shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
        Explore Case Studies
      </button>
    </div>
  </div>

  <!-- Featured Blog Posts Section -->
  <div class="container mx-auto px-4 py-16 bg-blue-50">
    <h2 class="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-700 to-blue-600 text-transparent bg-clip-text">
      Featured Insights
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <PostPreviewCard
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :description="post.description"
        :author="post.author"
        :date="post.date"
      />
    </div>
    <div class="text-center mt-12">
      <button class="border-2 border-blue-600 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium shadow-md hover:shadow-lg">
        View All Articles
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
          author: 'Author One',
          date: '2023-10-01',
        },
        {
          id: 2,
          title: 'The Future of Remote Work in 2024',
          description: 'Analyzing emerging trends in distributed team management.',
          author: 'Author Two',
          date: '2023-11-15',
        },
        {
          id: 3,
          title: 'Sustainable Business Practices That Pay Off',
          description: 'How eco-friendly operations can drive profitability.',
          author: 'Author Three',
          date: '2023-12-05',
        },
      ],
    };
  },
});
</script>