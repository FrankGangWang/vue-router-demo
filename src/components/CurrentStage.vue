<script setup lang="ts">

    defineProps<{
    stage:string
    progress:number
    eta:string
    }>()

    defineEmits([
    'open-stage'
    ])

</script>

<template>
  <div class="card" @click="$emit('open-stage')">

    <div class="header">
      <span class="label">Current Stage</span>
      <span class="progress">
        {{ progress }}%
      </span>
    </div>

    <h2>
      {{ stage }}
    </h2>

    <div class="progress-bar">
      <div
        class="progress-fill"
        :style="{ width: progress + '%' }"
      />
    </div>

    <div class="meta">
      <span>
        ETA: {{ eta }}
      </span>

      <span>
        →
      </span>
    </div>

  </div>
</template>
