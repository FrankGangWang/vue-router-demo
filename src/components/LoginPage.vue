<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/user'

// Connect to your Pinia user store
const userStore = useUserStore()

// Local template inputs
const inputName = ref('')
const errorMessage = ref('')

const handleFormSubmit = () => {
  if (inputName.value.trim().length < 3) {
    errorMessage.value = 'Username must be at least 3 characters long.'
    return
  }
  
  errorMessage.value = ''
  // Send username to Pinia, which automatically creates and maps the UUID
  userStore.loginUser(inputName.value)
}
</script>

<template>
  <div class="max-w-md w-full bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-left">
    
    <!-- STATE 1: Show Login Form if NOT logged in -->
    <div v-if="!userStore.isLoggedIn">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Account Login</h2>
      <p class="text-gray-500 mb-6 text-sm">Enter your username to fetch your account profile session.</p>

      <form @submit.prevent="handleFormSubmit">
        <div style="margin-bottom: 1rem;">
          <label class="block text-sm font-semibold text-gray-700 mb-2">Username</label>
          <input 
            v-model="inputName"
            type="text" 
            placeholder="e.g., Gang Wang"
            style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.75rem; outline: none;"
          />
          <p v-if="errorMessage" style="color: #ef4444; font-size: 0.85rem; margin-top: 0.5rem;">
            {{ errorMessage }}
          </p>
        </div>

        <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 shadow-lg">
          Sign In
        </button>
      </form>
    </div>

    <!-- STATE 2: Show Profile Card if Successfully Logged In -->
    <div v-else class="text-center">
      <div style="width: 64px; height: 64px; background: #e0e7ff; color: #4f46e5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto; font-size: 1.5rem; font-weight: bold;">
        {{ userStore.username.charAt(0).toUpperCase() }}
      </div>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-1">Welcome Back!</h2>
      <p class="text-indigo-600 font-medium mb-4">{{ userStore.username }}</p>

      <!-- Display the mapped secure ID generated inside Pinia -->
      <div style="background: #f9fafb; border: 1px solid #e5e7eb; padding: 0.75rem; border-radius: 0.75rem; margin-bottom: 1.5rem; text-align: left;">
        <span style="font-size: 0.75rem; text-transform: uppercase; color: #9ca3af; font-weight: bold; display: block;">Mapped Account UUID</span>
        <code style="font-size: 0.9rem; color: #1f2937; word-break: break-all;">{{ userStore.uuid }}</code>
      </div>

      <div style="display: flex; gap: 1rem;">
        <router-link to="/" style="flex: 1;">
          <button style="background: #1f2937;" class="w-full text-white font-semibold py-2 px-4 rounded-xl transition">
            Go to Home
          </button>
        </router-link>
        
        <button @click="userStore.logoutUser" style="background: #ef4444;" class="text-white font-semibold py-2 px-4 rounded-xl transition">
          Logout
        </button>
      </div>
    </div>

  </div>
</template>
