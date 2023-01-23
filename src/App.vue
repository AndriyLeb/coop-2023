<script setup>
import { useRouter } from 'vue-router'
import { useSessionStore } from './stores/session'
import NavBar from '@/components/NavBar.vue'

provide('router', useRouter());
provide('session', useSessionStore());




</script>

<template>
  <NavBar />

  <RouterView />
</template>

<style scoped>

</style>
