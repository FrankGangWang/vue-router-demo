<script setup lang="ts">
import { ref } from 'vue'

// 1. Define your array of text blocks
const items = ref([
  { id: 1, title: 'Introduction', description: 'Click here to read the basic overview of our application rules.' },
  { id: 2, title: 'Getting Started', description: 'This block contains step-by-step setup instructions for new developers.' },
  { id: 3, title: 'Advanced Tips', description: 'Explore hidden configuration tricks and routing shortcuts in Vue 3.' }
])

// 2. Track which block was clicked (null means none yet)
const selectedId = ref<number | null>(null)

// 3. Handle what happens when a block is clicked
const handleBlockClick = (id: number) => {
  selectedId.value = id
  console.log(`User clicked block ID: ${id}`)
}
</script>

<template>
  <div class="list-container">
    <h2 class="title">Select a Topic</h2>

    <!-- 4. Use v-for to loop through the items array -->
    <!-- The :class line adds a 'selected' border if the ID matches -->
    <div 
      v-for="item in items" 
      :key="item.id"
      class="text-block"
      :class="{ 'selected': selectedId === item.id }"
      @click="handleBlockClick(item.id)"
    >
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>

    <!-- 5. Show a status message below based on the selection -->
    <p v-if="selectedId" class="status-text">
      You selected block number: <strong>{{ selectedId }}</strong>
    </p>
  </div>
</template>
