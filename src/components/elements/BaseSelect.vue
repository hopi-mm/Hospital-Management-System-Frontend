<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import  type { SelectProps } from '@/types/ui'

//set component name - has to be the same to the file name
defineOptions({
    name: "BaseSelect"
})

const props = withDefaults(defineProps<SelectProps>(), {
    placeholder: "Select an option"
});
</script>

<template>
  <Select >
    <SelectTrigger>
      <SelectValue :placeholder="props.placeholder" />
    </SelectTrigger>
    <SelectContent class="bg-gray-800/90">
      <SelectGroup>
        <SelectLabel class="text-white">{{ props.placeholder }}</SelectLabel>
        <SelectItem v-for="option in props.options" :key="option.value" :value="option.value" class="text-white cursor-pointer">
          {{ option.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>