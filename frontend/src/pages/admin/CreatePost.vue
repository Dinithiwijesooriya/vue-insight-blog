<template>
    <div class="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h2 class="text-2xl font-bold mb-4">Create a New Post</h2>
      <form @submit.prevent="submitPost">
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1">Title</label>
          <input v-model="title" class="w-full border px-4 py-2 rounded" type="text" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1">Description</label>
          <textarea v-model="description" class="w-full border px-4 py-2 rounded" rows="4" required></textarea>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1">Author</label>
          <input v-model="author" class="w-full border px-4 py-2 rounded" type="text" required />
        </div>
        <button class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600" type="submit">
          Publish
        </button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'CreatePost',
    setup() {
      const router = useRouter();
      const title = ref('');
      const description = ref('');
      const author = ref('');
  
      const submitPost = () => {
        const newPost = {
          id: Date.now(),
          title: title.value,
          description: description.value,
          author: author.value,
          date: new Date().toISOString().split('T')[0]
        };
  
        const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
        storedPosts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(storedPosts));
  
        router.push('/');
      };
  
      return { title, description, author, submitPost };
    }
  });
  </script>
  