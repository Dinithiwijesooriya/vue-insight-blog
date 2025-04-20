<template>
<div class="post-preview-card border border-gray-300 p-4 rounded-lg bg-gray-50 shadow-sm hover:shadow-lg transition-shadow duration-200">
    <h2 class="post-title text-lg sm:text-xl font-semibold mb-2">{{ title }}</h2>
      <p class="post-description text-gray-700 mb-4">{{ description }}</p>
      <div class="post-meta text-sm text-gray-500 flex justify-between">
        <span class="post-author font-medium">{{ author }}</span>
        <span class="post-date">{{ formattedDate }}</span>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'PostPreviewCard',
    props: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      author: { type: String, required: true },
      date: { type: String, required: true },
    },
    computed: {
      formattedDate(): string {
        return new Date(this.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      },
    },
  });
  </script>
  
  <style scoped>
  /* Tailwind CSS handles all the styling, so no additional styles are needed here. */
  </style>