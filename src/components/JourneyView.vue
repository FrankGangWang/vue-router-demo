<template>

<div
  class="card journey-card"
  @click="$emit('open-journey')"
>

  <div class="header">

    <h3>
      Property Journey
    </h3>

    <span>
      →
    </span>

  </div>

  <div class="steps">

    <div
      v-for="step in visibleSteps"
      :key="step.id"
      class="step"
    >

      <span
        class="icon"
      >
        {{ getIcon(step.status) }}
      </span>

      <span>
        {{ step.title }}
      </span>

    </div>

  </div>

</div>

</template>

<script setup lang="ts">

import { computed } from 'vue'

interface Step {

  id:number

  title:string

  status:
    | 'completed'
    | 'current'
    | 'upcoming'
}

const props = defineProps<{
  steps:Step[]
}>()

defineEmits([
  'open-journey'
])

const visibleSteps = computed(
  ()=>props.steps.slice(0,5)
)

function getIcon(status:string){

  if(status==='completed')
    return '✓'

  if(status==='current')
    return '◉'

  return '○'
}

</script>