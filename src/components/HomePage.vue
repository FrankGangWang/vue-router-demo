<script setup lang="ts">
// 1. Import your new text list component
import TextList from './Steps_List.vue'
</script>

<template>
  <!-- Main layout card container -->
  <div class="max-w-md text-center bg-white p-8 rounded-2xl shadow-md border border-gray-100">
    <h1 class="text-3xl font-extrabold text-gray-900 mb-2">Welcome Home</h1>
    <p class="text-gray-500 mb-6">This is the landing page of your two-page Vue application.</p>
    
    <!-- 2. Display the interactive text list component here -->
    <div style="margin-bottom: 24px;">
      <TextList />
    </div>
    
    <!-- Navigation button to Page 2 -->
    <router-link to="/about">
      <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 shadow-lg">
        Go to About Page →
      </button>
    </router-link>
  </div>
</template>
