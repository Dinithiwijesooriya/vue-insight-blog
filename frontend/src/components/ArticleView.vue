<template>
    <div class="bg-white">
      <!-- Article Header Section -->
      <div class="relative bg-blue-50 py-20">
        <div class="container mx-auto px-6 max-w-5xl">
          <div class="text-center mb-8">
            <span class="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              {{ article.category }}
            </span>
            <h1 class="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              {{ article.title }}
            </h1>
            <div class="flex items-center justify-center space-x-4">
              <span class="text-blue-700 font-medium">{{ article.author }}</span>
              <span class="text-blue-500">•</span>
              <span class="text-blue-600">{{ formattedDate }}</span>
              <span class="text-blue-500">•</span>
              <span class="text-blue-600">{{ readingTime }} min read</span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Article Content Section -->
      <div class="container mx-auto px-6 py-12 max-w-3xl">
        <!-- Featured Image -->
        <div class="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img 
            :src="article.image || '/placeholder-article.jpg'" 
            :alt="article.title"
            class="w-full h-auto object-cover"
          >
        </div>
  
        <!-- Article Body -->
        <div class="prose prose-lg max-w-none text-gray-800">
          <p class="text-xl text-gray-700 mb-8 leading-relaxed">
            {{ article.summary }}
          </p>
  
          <div v-html="article.content"></div>
        </div>
  
        <!-- Tags -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in article.tags" 
              :key="tag"
              class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {{ tag }}
            </span>
          </div>
        </div>
  
        <!-- Author Bio -->
        <div class="mt-12 p-6 bg-blue-50 rounded-xl">
          <div class="flex items-center">
            <img 
              :src="article.authorImage || '/placeholder-author.jpg'" 
              :alt="article.author"
              class="w-16 h-16 rounded-full mr-4"
            >
            <div>
              <h3 class="font-bold text-blue-900">{{ article.author }}</h3>
              <p class="text-blue-700 text-sm">{{ article.authorBio }}</p>
            </div>
          </div>
        </div>
  
        <!-- Navigation -->
        <div class="mt-12 flex justify-between">
          <button 
            v-if="previousArticle"
            @click="navigateToArticle(previousArticle.id)"
            class="flex items-center text-blue-700 hover:text-blue-900"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Previous
          </button>
          <button 
            v-if="nextArticle"
            @click="navigateToArticle(nextArticle.id)"
            class="flex items-center text-blue-700 hover:text-blue-900 ml-auto"
          >
            Next
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
  
      <!-- Related Articles -->
      <div class="bg-gray-50 py-16">
        <div class="container mx-auto px-6 max-w-5xl">
          <h2 class="text-3xl font-bold text-blue-900 mb-8">Related Articles</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PostPreviewCard
              v-for="post in relatedArticles"
              :key="post.id"
              :title="post.title"
              :description="post.description"
              :author="post.author"
              :date="post.date"
              @click="navigateToArticle(post.id)"
              class="cursor-pointer hover:shadow-lg transition-shadow"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent } from 'vue';
import PostPreviewCard from './PostPreviewCard.vue';

interface Article {
  id: number;
  title: string;
  summary: string;
  content: string;
  author: string;
  authorBio: string;
  authorImage?: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
}

export default defineComponent({
  name: 'ArticleView',
  components: { PostPreviewCard },
  props: {
    articleId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      article: {} as Article,
      relatedArticles: [] as Article[],
      allArticles: [] as Article[]
    };
  },
  computed: {
    formattedDate(): string {
      return new Date(this.article.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    readingTime(): number {
      const words = this.article.content?.split(/\s+/).length || 0;
      return Math.ceil(words / 200);
    },
    previousArticle(): Article | null {
      const currentIndex = this.allArticles.findIndex(a => a.id === this.article.id);
      return currentIndex > 0 ? this.allArticles[currentIndex - 1] : null;
    },
    nextArticle(): Article | null {
      const currentIndex = this.allArticles.findIndex(a => a.id === this.article.id);
      return currentIndex < this.allArticles.length - 1 ? this.allArticles[currentIndex + 1] : null;
    }
  },
  async created() {
    await this.fetchArticleData();
    await this.fetchRelatedArticles();
  },
  methods: {
    async fetchArticleData() {
      this.allArticles = [
        {
          id: 1,
          title: 'How Company X Scaled 10x Using AI',
          summary: 'Discover the AI strategies that helped Company X achieve exponential growth in just 18 months.',
          content: `<h2>Introduction</h2>
            <p>In today's competitive landscape, artificial intelligence has become a game-changer for businesses looking to scale rapidly.</p>`,
          author: 'Sarah Johnson',
          authorBio: 'AI Strategy Consultant with 10+ years experience',
          date: '2023-10-01',
          category: 'Technology',
          tags: ['AI', 'Scaling', 'SaaS'],
          image: '/ai-scaling.jpg'
        },
        // ... other articles
      ];

      this.article = this.allArticles.find(a => a.id === this.articleId) || this.allArticles[0];
    },
    async fetchRelatedArticles() {
      this.relatedArticles = this.allArticles
        .filter(a => a.id !== this.article.id)
        .slice(0, 3);
    },
    navigateToArticle(id: number) {
      this.$router.push(`/article/${id}`);
    }
  }
});
</script>

  <style scoped>
  .prose h2 {
    @apply text-2xl font-bold text-blue-900 mt-10 mb-4;
  }
  
  .prose h3 {
    @apply text-xl font-semibold text-blue-800 mt-8 mb-3;
  }
  
  .prose p {
    @apply mb-4 leading-relaxed;
  }
  
  .prose ul, .prose ol {
    @apply mb-6 pl-5;
  }
  
  .prose li {
    @apply mb-2;
  }
  
  .prose ul {
    @apply list-disc;
  }
  
  .prose ol {
    @apply list-decimal;
  }
  </style>