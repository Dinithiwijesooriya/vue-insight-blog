<template>
    <div class="homepage container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Blog Posts</h1>
      <div class="post-list space-y-6">
        <PostPreviewCard
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :description="post.description"
          :author="post.author"
          :date="post.date"
        />
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
          title: 'First Blog Post',
          description: 'This is a short description of the first blog post.',
          author: 'Author One',
          date: '2023-10-01',
        },
        {
          id: 2,
          title: 'Second Blog Post',
          description: 'This is a short description of the second blog post.',
          author: 'Author Two',
          date: '2023-10-02',
        },
      ],
    };
  },
});
  </script>
  
  <style scoped>
  /* Tailwind CSS will handle most of the styling, so no additional styles are needed here. */
  </style>