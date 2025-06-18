<template>
  <div>
    <!-- Check if current route is NOT auth -->
    <MainLayout v-if="!isAuthPage">
      <RouterView />
    </MainLayout>

    <!-- Render auth page directly without layout -->
    <RouterView v-else />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue' // your main layout component

const route = useRoute()

const isAuthPage = computed(() => route.meta.layout === 'auth')
</script>

<style scoped></style>