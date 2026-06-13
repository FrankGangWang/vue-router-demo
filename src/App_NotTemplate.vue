<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col justify-between">
    <!-- Simple Header Navigation -->
    <nav class="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <span class="font-bold text-lg text-indigo-600">MyVueApp</span>
      <div class="space-x-4">
        <router-link to="/" class="hover:text-indigo-600 font-medium">Home</router-link>
        <router-link to="/about" class="hover:text-indigo-600 font-medium">About</router-link>
        <router-link to="/contact" class="hover:text-indigo-600 font-medium">Contact</router-link>
      </div>
    </nav>

    <!-- Page Content Loads Here -->
    <main class="flex-grow flex items-center justify-center p-6">
      <router-view />
    </main>
  </div>
</template>
