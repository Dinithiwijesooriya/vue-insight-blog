<template>
  <div class="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
    <!-- Title in black as requested -->
    <h2 class="text-xl font-bold mb-3 text-black">
      {{ title }}
    </h2>
    
    <!-- Description with blue accent -->
    <p class="text-gray-600 mb-4">{{ description }}</p>
    
    <!-- Footer with blue accents -->
    <div class="text-sm text-gray-600 flex justify-between items-center">
      <span class="font-medium text-blue-600">{{ author }}</span>
      <span class="text-blue-500">{{ formattedDate }}</span>
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