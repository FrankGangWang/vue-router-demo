import { useUserStore } from './stores/user'

import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from './components/LoginPage.vue'
//import HomePage from './components/HomePage.vue'
//import HomePage from './components/CurrentStage.vue'
import HomePage from '/src/HomeView.vue'

import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/TheWelcome.vue'

const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: true } },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
    // 2. ADD THIS MISSING LINE TO REGISTER THE PATH:
  { path: '/login', component: LoginPage } 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


// ... (Continued from above)

router.beforeEach((to, from, next) => {
  // Access your global Pinia user session warehouse
  const userStore = useUserStore()

  // Check if the page the user wants to visit requires authentication
  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    
    // If they are NOT logged in, hijack the route and force them to /login
    next('/login')
    
  } else {
    // If the page is public, or they are logged in, let them pass safely
    next()
  }
})

export default router
