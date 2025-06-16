<template>
    <section class="max-w-4xl mx-auto p-6 space-y-6">
      <!-- Heading -->
      <h1 class="text-2xl font-semibold tracking-tight">Book an Appointment</h1>
  
      <!-- Information Picker -->
      <div class="grid gap-4 md:grid-cols-2">
          <div class="grid grid-cols-2 gap-2">
            <BaseSelect
              v-model="selectedDoctor"
              :placeholder="doctorsProps.placeholder"
              :options="doctorsProps.options"
            />
            <BaseSelect
              v-model="selectedService"
              :placeholder="servicesProps.placeholder"
              :options="servicesProps.options"
            />

            <div class="col-span-2">
            <BaseCalendar class="w-full" />
          </div>
          </div>
          <div>
              <div class="grid grid-cols-3 gap-2">
                  <TimePicker />
              </div>  
          </div>
      </div>
  
      <!--  Submit Button -->
      <div class="flex justify-end">
        <BaseButton
          class="bg-black/50 text-white hover:bg-black/70 transition-colors duration-300"
        >
          Submit
        </BaseButton>
      </div>
  
      <!--  Information List -->
      <div class="border rounded-xl p-4 shadow-sm bg-muted/30">
        <h2 class="text-lg font-medium mb-2">Lists</h2>
        <ul class="list-disc list-inside text-muted-foreground space-y-1">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </section>
  </template>
  
<script lang="ts" setup>
import type { SelectProps } from '@/types/ui'

import 'vue3-timepicker/dist/VueTimepicker.css'
import TimePicker from '@/components/adminComponents/TimePicker.vue'
import { ref, watch } from 'vue';




const doctorsProps: SelectProps = {
    placeholder: "Select a doctor",
    options: [
    {
        value: "doctor 1",
        label: "Doctor 1",
    },
    {
        value: "doctor 2",
        label: "Doctor 2",
    },
    {
        value: "doctor 3",
        label: "Doctor 3",
    },]
};

const servicesProps: SelectProps = {
    placeholder: "Select a service",
    options: [
    {
        value: "service 1",
        label: "Service 1",
    },
    {
        value: "service 2",
        label: "Service 2",
    },
    {
        value: "service 3",
        label: "Service 3",
    },]
};


const selectedDoctor = ref('');
const selectedService = ref('');

watch(selectedDoctor, (newVal) => {
    console.log(newVal);
})
watch(selectedService, (newVal) => {
    console.log(newVal);
})

    

</script>
<style scoped>

</style>
