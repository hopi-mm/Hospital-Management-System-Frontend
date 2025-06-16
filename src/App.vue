<script setup lang="ts">
//sidebar content 
import AppSidebar from "@/components/AppSidebar.vue"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { RouterView } from "vue-router"
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      <div class="ml-10">
        <RouterView />
      </div>
    </main>
  </SidebarProvider>
</template>

<style scoped>

</style>
