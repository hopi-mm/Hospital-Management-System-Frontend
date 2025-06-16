<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'

const name = ref('')
const doctor = ref('')
const date = ref('')
const time = ref('')
const type = ref('consultation')
</script>

<template>
  <Card class="max-w-xl mx-auto p-6 rounded-2xl shadow-xl">
    <CardHeader>
      <CardTitle class="text-xl font-semibold">📅 Book an Appointment</CardTitle>
    </CardHeader>

    <CardContent class="space-y-4">
      <Input v-model="name" placeholder="Patient name" />

      <Select v-model="doctor">
        <SelectTrigger>
          <SelectValue placeholder="Select doctor" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dr-smith">Dr. Smith</SelectItem>
          <SelectItem value="dr-jones">Dr. Jones</SelectItem>
          <SelectItem value="dr-lee">Dr. Lee</SelectItem>
        </SelectContent>
      </Select>

      <Input v-model="date" type="date" />
      <Input v-model="time" type="time" />

      <div>
        <label class="font-medium text-sm">Appointment Type</label>
        <RadioGroup v-model="type" class="mt-2 flex gap-4">
          <RadioGroupItem value="consultation" id="consultation" />
          <label for="consultation">Consultation</label>

          <RadioGroupItem value="follow-up" id="follow-up" />
          <label for="follow-up">Follow-Up</label>
        </RadioGroup>
      </div>

      <BaseButton class="w-full mt-4 bg-green-500">Book Now</BaseButton>
    </CardContent>
  </Card>
</template>
