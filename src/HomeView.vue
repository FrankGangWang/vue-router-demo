<script setup lang="ts">

import { useRouter } from 'vue-router'
import { ref } from 'vue'

import { useUserStore } from './stores/user'
const userStore = useUserStore()

import CurrentStageCard from '@/components/CurrentStage.vue'
import NextActionCard from '@/components/NextAction.vue'
import JourneyPreviewCard from '@/components/JourneyView.vue'

const router = useRouter()

const ulr_current_step = ref('/transaction/1/step/4')
//ulr_current_step.value = '/contact'

// GANG WANG: hacked the routing to go to the contact page for now, as the transaction/1/step/4 route is not working yet
function goCurrentStep(){
  router.push(
    ulr_current_step.value
  )
}

function goUpload(){
  router.push(
    '/transaction/1/document/income-proof'
  )
}

function goJourney(){
  router.push(
    '/transaction/1/journey'
  )
}

const steps = [
  {
    id:1,
    title:'Search',
    status:'completed'
  },

  {
    id:2,
    title:'Offer',
    status:'completed'
  },

  {
    id:3,
    title:'Deposit',
    status:'completed'
  },

  {
    id:4,
    title:'Mortgage',
    status:'current'
  },

  {
    id:5,
    title:'Completion',
    status:'upcoming'
  }

]

</script>

<template>

<div class="home">

  <p v-if="userStore.isLoggedIn">Current Active Session: {{ userStore.username }}</p>

  <CurrentStageCard
    stage="Mortgage Approval"
    :progress="62"
    eta="15 Aug 2026"
    @open-stage="goCurrentStep"
  />

  <NextActionCard
    title="Upload Income Proof"
    description="Required before mortgage approval."
    dueDate="Tomorrow"
    buttonText="Upload Now"
    @action="goUpload"
  />

  <JourneyPreviewCard
    :steps="steps"
    @open-journey="goJourney"
  />

</div>

</template>
