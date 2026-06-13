<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-between">
    
    <!-- Top Navigation Bar -->
    <nav class="bg-white shadow py-4 px-6 flex justify-between items-center">
      <!--span class="font-bold text-lg text-indigo-600">Routing pages with vue-router@4</span-->
      <div class="space-x-4">
        <router-link to="/" class="text-gray-700 hover:text-indigo-600">Home</router-link>
        <router-link to="/about" class="text-gray-700 hover:text-indigo-600">About</router-link>
        <router-link to="/contact" class="text-gray-700 hover:text-indigo-600">Contact</router-link>
      </div>
    </nav>

    <!-- Pages load inside this view area -->
    <main class="flex-grow flex items-center justify-center p-6">
      <router-view />
    </main>
    
  </div>
</template>
