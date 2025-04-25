<template>
  <div class="border border-gray-200 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
    <h2 class="text-xl font-bold mb-3 text-black">{{ title }}</h2>
    <p class="text-gray-500 mb-4">{{ description }}</p>
    <div class="text-sm text-gray-500 flex justify-between items-center">
      <span class="font-medium">{{ author }}</span>
      <span>{{ formattedDate }}</span>
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