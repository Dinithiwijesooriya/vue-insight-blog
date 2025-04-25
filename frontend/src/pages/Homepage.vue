<template>
  <!-- Hero Section -->
  <div class="relative bg-cover bg-center h-screen" style="background-image: url('/blog-home.jpg');">
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
      <h1 class="text-4xl sm:text-6xl font-bold mb-4">Decoding Success</h1>
      <p class="text-lg sm:text-xl max-w-2xl mb-6 text-gray-200">
        Actionable case studies, tech trends, and growth frameworks for modern entrepreneurs.
      </p>
      <button class="bg-accent text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition">
        Explore Case Studies
      </button>
    </div>
  </div>

  <!-- Featured Blog Posts Section -->
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-3xl font-bold mb-12 text-center text-black">Featured Insights</h2>
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
      <button class="border border-accent text-accent px-6 py-2 rounded-lg hover:bg-accent hover:text-white transition-colors">
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
          id: 1,
          title: 'How Company X Scaled 10x Using AI',
          description: 'Discover the AI strategies that helped Company X achieve exponential growth.',
          author: 'Author One',
          date: '2023-10-01',
        },
        {
          id: 1,
          title: 'How Company X Scaled 10x Using AI',
          description: 'Discover the AI strategies that helped Company X achieve exponential growth.',
          author: 'Author One',
          date: '2023-10-01',
        },
      
      ],
    };
  },
});
</script>