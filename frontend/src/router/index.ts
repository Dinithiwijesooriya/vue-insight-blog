import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/pages/Homepage.vue';
import About from '@/pages/About.vue';
import Contact from '@/pages/Contact.vue';
import CreatePost from '@/pages/admin/CreatePost.vue';
import ArticlesPage from '@/pages/ArticlesPage.vue';
import ArticleView from '../components/ArticleView.vue';

const routes = [
  { path: '/', name: 'Home', component: Homepage },
  { path: '/admin/create', component: CreatePost },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/articles', name: 'Articles', component: ArticlesPage },
  {
    path: '/article/:id',
    name: 'Article',
    component: ArticleView, 
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;