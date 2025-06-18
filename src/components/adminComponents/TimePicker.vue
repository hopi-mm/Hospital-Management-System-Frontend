<template>
        <!-- Hour -->
        <Popover v-model:open="open.hour">
            <PopoverTrigger as-child>
                <Button variant="outline" class="w-full justify-between">
                    {{ hour || "HH" }}
                <ChevronDown class="h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent class="p-0 w-32">
                <Command>
                <CommandInput placeholder="Search hour..." />
                <CommandList>
                    <CommandEmpty>No match found.</CommandEmpty>
                    <CommandGroup>
                    <CommandItem v-for="h in hours" :key="h" @select="hour = h">
                        {{ h }}
                    </CommandItem>
                    </CommandGroup>
                </CommandList>
                </Command>
            </PopoverContent>
        </Popover>

        <!-- Minute -->
        <Popover v-model:open="open.minute">
            <PopoverTrigger as-child>
                <Button variant="outline" class="w-full justify-between">
                        {{ minute || "MM" }}
                    <ChevronDown class="h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
        <PopoverContent class="p-0 w-32">
            <Command>
            <CommandInput placeholder="Search minute..." />
            <CommandList>
                <CommandEmpty>No match found.</CommandEmpty>
                <CommandGroup>
                <CommandItem v-for="m in minutes" :key="m" @select="minute = m">
                    {{ m }}
                </CommandItem>
                </CommandGroup>
            </CommandList>
            </Command>
        </PopoverContent>
        </Popover>

        <!-- AM/PM -->
        <Popover v-model:open="open.period">
            <PopoverTrigger as-child>
                <Button variant="outline" class="w-full justify-between">
                    {{ period || "AM/PM" }}
                <ChevronDown class="h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
        <PopoverContent class="p-0 w-24">
            <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
                <CommandEmpty>No match.</CommandEmpty>
                <CommandGroup>
                <CommandItem v-for="p in ['AM', 'PM']" :key="p" @select="period = p">
                    {{ p }}
                </CommandItem>
                </CommandGroup>
            </CommandList>
            </Command>
        </PopoverContent>
        </Popover>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command'
import { Button } from '@/components/ui/button'

const hour = ref('')
const minute = ref('')
const period = ref('')

const open = ref({ hour: false, minute: false, period: false })

const hours = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, '0')
)
const minutes = ref([]);

for (let i = 1; i < 60; i++) {
  minutes.value.push(String(i).padStart(2, '0'));
}
</script>