<template>
  <div class="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-sm mt-8">
    <h2 class="text-2xl font-bold mb-6 text-black">Create a New Post</h2>
    <form @submit.prevent="submitPost">
      <div class="mb-6">
        <label class="block text-gray-500 font-medium mb-2">Title</label>
        <input v-model="title" class="w-full border border-gray-200 px-4 py-2 rounded" type="text" required />
      </div>
      <div class="mb-6">
        <label class="block text-gray-500 font-medium mb-2">Description</label>
        <textarea v-model="description" class="w-full border border-gray-200 px-4 py-2 rounded" rows="4" required></textarea>
      </div>
      <div class="mb-6">
        <label class="block text-gray-500 font-medium mb-2">Author</label>
        <input v-model="author" class="w-full border border-gray-200 px-4 py-2 rounded" type="text" required />
      </div>
      <button class="bg-accent text-white px-6 py-2 rounded hover:bg-opacity-90 transition" type="submit">
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