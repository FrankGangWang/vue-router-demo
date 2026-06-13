<template>
  <div class="max-w-md text-center bg-white p-8 rounded-2xl shadow-md border border-gray-100">
    <h1 class="text-3xl font-extrabold text-gray-900 mb-2">About Us</h1>
    <p class="text-gray-500 mb-6">You successfully navigated to the second page using Vue Router!</p>
    
    <router-link to="/contact">
      <button class="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 shadow-lg shadow-gray-200">
        Go to Contact Page →
      </button>
    </router-link>
  </div>
</template>
