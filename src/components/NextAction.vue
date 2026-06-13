<script setup lang="ts">
    defineProps<{
    title:string
    description:string
    dueDate:string
    buttonText:string
    }>()

    defineEmits([
    'action'
    ])
</script>

<template>

<div class="card action-card">

  <div class="badge">

    Next Action

  </div>

  <h3>
    {{ title }}
  </h3>

  <p>
    {{ description }}
  </p>

  <div class="footer">

    <span class="deadline">

      Due:
      {{ dueDate }}

    </span>

    <button
      @click="$emit('action')"
    >
      {{ buttonText }}
    </button>

  </div>

</div>

</template>
