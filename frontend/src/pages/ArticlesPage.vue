<template>
  <div class="container mx-auto px-6 py-20 bg-white">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-blue-900 mb-4">All Articles</h2>
      <p class="text-xl text-blue-700 max-w-2xl mx-auto font-normal tracking-wide">
        Browse our complete collection of research and insights
      </p>
    </div>

    <!-- Search and Filter Section -->
    <div class="mb-12 bg-blue-50 p-6 rounded-lg shadow-sm">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Search Input -->
        <div class="md:col-span-2">
          <label for="search" class="block text-sm font-medium text-blue-800 mb-2">Search Articles</label>
          <div class="relative">
            <input id="search" v-model="searchQuery" type="text" placeholder="Search by title or description..."
              class="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <svg class="absolute right-3 top-3.5 h-5 w-5 text-blue-400" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        <!-- Category Filter -->
        <div>
          <label for="category" class="block text-sm font-medium text-blue-800 mb-2">Filter by Category</label>
          <select id="category" v-model="selectedCategory"
            class="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
      </div>

      <!-- Date Range Filter -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div>
          <label for="startDate" class="block text-sm font-medium text-blue-800 mb-2">From Date</label>
          <input id="startDate" v-model="startDate" type="date"
            class="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        </div>
        <div>
          <label for="endDate" class="block text-sm font-medium text-blue-800 mb-2">To Date</label>
          <input id="endDate" v-model="endDate" type="date"
            class="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        </div>
        <div class="flex items-end">
          <button @click="resetFilters"
            class="bg-transparent border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
            Reset Filters
          </button>
        </div>
      </div>
    </div>

    <!-- Articles Grid -->
    <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <PostPreviewCard v-for="post in paginatedPosts" :key="post.id" :title="post.title" :description="post.description"
        :author="post.author" :date="post.date" @click="$router.push(`/article/${post.id}`)"
        class="cursor-pointer hover:shadow-lg transition-shadow" />
    </div>

    <!-- No Results Message -->
    <div v-else class="text-center py-12">
      <svg class="mx-auto h-12 w-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <h3 class="mt-2 text-lg font-medium text-blue-900">No articles found</h3>
      <p class="mt-1 text-blue-700">Try adjusting your search or filter criteria</p>
      <button @click="resetFilters"
        class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
        Reset Filters
      </button>
    </div>

    <!-- Pagination -->
    <div v-if="filteredPosts.length > 0" class="flex justify-center mt-16 gap-2">
      <button v-for="page in totalPages" :key="page" @click="currentPage = page" class="px-4 py-2 rounded-lg" :class="{
        'bg-blue-800 text-white': currentPage === page,
        'bg-transparent border border-blue-800 text-blue-800': currentPage !== page
      }">
        {{ page }}
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
  category: string;
}

export default defineComponent({
  name: 'ArticlesPage',
  components: { PostPreviewCard },
  data() {
    return {
      currentPage: 1,
      postsPerPage: 6,
      allPosts: [] as Post[],
      searchQuery: '',
      selectedCategory: '',
      startDate: '',
      endDate: '',
      categories: [
        'Technology',
        'Business',
        'Marketing',
        'Leadership',
        'Sustainability'
      ]
    };
  },
  computed: {
    filteredPosts(): Post[] {
      return this.allPosts.filter(post => {
        // Search filter
        const matchesSearch = this.searchQuery === '' ||
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          post.description.toLowerCase().includes(this.searchQuery.toLowerCase());

        // Category filter
        const matchesCategory = this.selectedCategory === '' ||
          post.category === this.selectedCategory;

        // Date range filter
        const postDate = new Date(post.date);
        const matchesStartDate = this.startDate === '' ||
          postDate >= new Date(this.startDate);
        const matchesEndDate = this.endDate === '' ||
          postDate <= new Date(this.endDate + 'T23:59:59');

        return matchesSearch && matchesCategory && matchesStartDate && matchesEndDate;
      });
    },
    totalPages(): number {
      return Math.ceil(this.filteredPosts.length / this.postsPerPage);
    },
    paginatedPosts(): Post[] {
      const start = (this.currentPage - 1) * this.postsPerPage;
      const end = start + this.postsPerPage;
      return this.filteredPosts.slice(start, end);
    }
  },
  async created() {
    await this.fetchAllPosts();
  },
  methods: {
    async fetchAllPosts() {
      // Simulate API call with categories added
      this.allPosts = [
        {
          id: 1,
          title: 'How Company X Scaled 10x Using AI',
          description: 'Discover the AI strategies that helped Company X achieve exponential growth.',
          author: 'Sarah Johnson',
          date: '2023-10-01',
          category: 'Technology'
        },
        {
          id: 2,
          title: 'The Future of Remote Work in 2024',
          description: 'Analyzing emerging trends in distributed team management.',
          author: 'Michael Chen',
          date: '2023-11-15',
          category: 'Business'
        },
        {
          id: 3,
          title: 'Sustainable Business Practices That Pay Off',
          description: 'How eco-friendly operations can drive profitability.',
          author: 'Emma Rodriguez',
          date: '2023-12-05',
          category: 'Sustainability'
        },
        {
          id: 4,
          title: 'The Psychology of Consumer Decisions',
          description: 'Understanding what drives customer purchasing behavior.',
          author: 'David Wilson',
          date: '2023-09-15',
          category: 'Marketing'
        },
        {
          id: 5,
          title: 'Data-Driven Marketing Strategies',
          description: 'Leveraging analytics for better campaign performance.',
          author: 'Lisa Zhang',
          date: '2023-08-22',
          category: 'Marketing'
        },
        {
          id: 6,
          title: 'Innovation in Traditional Industries',
          description: 'How legacy companies are adapting to digital transformation.',
          author: 'Robert Kim',
          date: '2023-07-10',
          category: 'Business'
        },
        {
          id: 7,
          title: 'Leadership in the Digital Age',
          description: 'New approaches to leadership for modern organizations.',
          author: 'James Wilson',
          date: '2023-06-05',
          category: 'Leadership'
        },
        {
          id: 8,
          title: 'The Future of E-Commerce',
          description: 'Emerging trends in online retail and customer experience.',
          author: 'Maria Garcia',
          date: '2023-05-18',
          category: 'Business'
        }
      ];
    },
    resetFilters() {
      this.searchQuery = '';
      this.selectedCategory = '';
      this.startDate = '';
      this.endDate = '';
      this.currentPage = 1;
    }
  },
  watch: {
    searchQuery() {
      this.currentPage = 1;
    },
    selectedCategory() {
      this.currentPage = 1;
    },
    startDate() {
      this.currentPage = 1;
    },
    endDate() {
      this.currentPage = 1;
    }
  }
});
</script>