<template>
  <div class="container mx-auto px-4 py-12 max-w-4xl">
    <!-- Header with Gradient Text -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-3 bg-gradient-to-r from-accent to-blue-600 text-transparent bg-clip-text">
        Get in Touch
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Have questions about our case studies or want to collaborate? Reach out below.
      </p>
    </div>

    <!-- Colorful Contact Cards -->
    <div class="grid md:grid-cols-3 gap-6 mb-16">
      <!-- Email Card -->
      <div class="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
        <div class="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="font-bold text-lg text-gray-800 mb-2">Email Us</h3>
        <p class="text-blue-600 hover:underline">
          <a href="mailto:contact@businessinsights.com">contact@businessinsights.com</a>
        </p>
      </div>

      <!-- Phone Card -->
      <div class="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
        <div class="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <h3 class="font-bold text-lg text-gray-800 mb-2">Call Us</h3>
        <p class="text-blue-600">+1 (555) 123-4567</p>
      </div>

      <!-- Address Card -->
      <div class="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
        <div class="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 class="font-bold text-lg text-gray-800 mb-2">Visit Us</h3>
        <p class="text-blue-600">123 Business Ave, San Francisco, CA</p>
      </div>
    </div>

    <!-- Form with Color Accents -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="bg-gradient-to-r from-accent to-blue-600 h-2"></div>
      <div class="p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-gray-600 font-medium mb-2">Full Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name"
              class="w-full border border-gray-200 rounded-lg px-4 py-2 focus:border-accent focus:ring-2 focus:ring-accent/20"
              required
            >
          </div>

          <div>
            <label for="email" class="block text-gray-600 font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              class="w-full border border-gray-200 rounded-lg px-4 py-2 focus:border-accent focus:ring-2 focus:ring-accent/20"
              required
            >
          </div>

          <div>
            <label for="subject" class="block text-gray-600 font-medium mb-2">Subject</label>
            <select 
              id="subject" 
              v-model="form.subject"
              class="w-full border border-gray-200 rounded-lg px-4 py-2 focus:border-accent focus:ring-2 focus:ring-accent/20"
            >
              <option value="" disabled selected>Select a subject</option>
              <option value="Case Study Inquiry">Case Study Inquiry</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label for="message" class="block text-gray-600 font-medium mb-2">Message</label>
            <textarea 
              id="message" 
              v-model="form.message"
              rows="5"
              class="w-full border border-gray-200 rounded-lg px-4 py-2 focus:border-accent focus:ring-2 focus:ring-accent/20"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="bg-gradient-to-r from-accent to-blue-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition shadow-md w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'ContactPage',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const submitForm = () => {
      console.log('Form submitted:', form);
      alert('Thank you for your message! We will get back to you soon.');
      form.name = '';
      form.email = '';
      form.subject = '';
      form.message = '';
    };

    return {
      form,
      submitForm
    };
  }
});
</script>