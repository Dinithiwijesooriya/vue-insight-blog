<template>
  <div class="container mx-auto px-4 py-12 max-w-4xl">
    <!-- Gradient Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-blue-600 text-transparent bg-clip-text">
        About Business Insights
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Decoding success through data-driven case studies and strategic analysis.
      </p>
    </div>

    <!-- Mission Section with Blue Accents -->
    <div class="mb-16 bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-100">
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <div class="md:w-1/2">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p class="text-gray-600 mb-4">
            We bridge the gap between theory and practice by analyzing real-world business strategies, 
            technological implementations, and their measurable outcomes.
          </p>
          <p class="text-gray-600">
            Each case study is meticulously researched to provide actionable insights for entrepreneurs, 
            executives, and decision-makers.
          </p>
        </div>
        <div class="md:w-1/2 bg-white rounded-lg p-6 shadow-sm border border-blue-100">
          <div class="space-y-4">
            <div v-for="stat in stats" :key="stat.label" class="border-l-4 border-blue-500 pl-4">
              <p class="text-2xl font-bold text-gray-800">{{ stat.value }}</p>
              <p class="text-blue-600">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Methodology Cards with Blue Highlights -->
    <div class="mb-16">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Our Methodology</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div 
          v-for="(step, index) in methodology" 
          :key="step.title" 
          class="bg-white border border-blue-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <span class="text-blue-600 font-bold">{{ index + 1 }}</span>
          </div>
          <div class="text-blue-600 font-bold text-lg mb-2">{{ step.title }}</div>
          <p class="text-gray-600">{{ step.description }}</p>
        </div>
      </div>
    </div>

    <!-- Gradient CTA Section -->
    <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center border border-blue-200">
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Want to contribute?</h3>
      <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
        We collaborate with industry experts to bring you the most relevant insights. 
        Join our network of contributors.
      </p>
      <button class="bg-gradient-to-r from-accent to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all shadow-md">
        Contact Our Team
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutPage',
  data() {
    return {
      stats: [
        { value: '200+', label: 'Case Studies Published' },
        { value: '10K+', label: 'Monthly Readers' },
        { value: '50+', label: 'Industry Experts' }
      ],
      methodology: [
        {
          title: 'Selection',
          description: 'We identify high-impact companies and strategies worth analyzing.'
        },
        {
          title: 'Research',
          description: 'Deep dive into financials, interviews, and market data.'
        },
        {
          title: 'Analysis',
          description: 'Breakdown of key decisions and their business impact.'
        }
      ]
    };
  }
});
</script>

<style scoped>
/* Smooth hover transitions */
.hover-scale {
  transition: transform 0.2s ease;
}
.hover-scale:hover {
  transform: translateY(-2px);
}
</style>