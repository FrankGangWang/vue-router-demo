import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // Global States (Default to empty/logged out)
  const username = ref<string>('')
  const uuid = ref<string>('')
  const isLoggedIn = ref<boolean>(false)

  // Global Actions (Functions to modify the data)
  function loginUser(inputName: string) {
    username.value = inputName
    // Generate a temporary mock unique UUID for the user session
    uuid.value = 'usr_' + Math.random().toString(36).substring(2, 11)
    isLoggedIn.value = true
  }

  function logoutUser() {
    username.value = ''
    uuid.value = ''
    isLoggedIn.value = false
  }

  return { username, uuid, isLoggedIn, loginUser, logoutUser }
})
