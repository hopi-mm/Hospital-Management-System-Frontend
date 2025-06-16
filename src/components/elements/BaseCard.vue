<script setup lang="ts">
import type { CardProps } from '@/types/ui'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
defineOptions({
    name: "BaseCard"
})

const props = defineProps<CardProps>()
</script>

<template>
  <Card class="border-none">
    <CardHeader v-if="props.title || props.description">
      <CardTitle>{{ props.title }}</CardTitle>
      <CardDescription>{{ props.description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <slot/>
    </CardContent>
    <CardFooter>
      <slot name="footer"/>
    </CardFooter>
  </Card>
</template>