<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-2">
    <!-- Left: Image & Tagline -->
    <div class="hidden md:flex items-center justify-center bg-[#e0f7fa] p-8">
      <div class="text-center">
        <img src="https://docpulse.com/wp-content/uploads/2024/02/slider-small-1.jpg" alt="Hospital Illustration" class="w-80 mx-auto mb-6" />
        <h2 class="text-2xl font-semibold text-[#0077b6]">Your health, our priority</h2>
        <p class="text-gray-600 mt-2 max-w-sm mx-auto">Managed securely by Medix HMS</p>
      </div>
    </div>

    <!-- Right: Login Form -->
    <div class="flex items-center justify-center p-6">
      <Card class="w-full max-w-md shadow-lg rounded-2xl border">
        <CardContent class="p-6">
          <h1 class="text-2xl font-semibold text-center mb-4">Staff Login</h1>
          <form @submit.prevent="handleLogin" class="space-y-4">
            <div>
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                v-model="email"
                placeholder="you@hospital.com"
                required
              />
            </div>
            <div>
              <Label for="password">Password</Label>
              <Input
                id="password"
                type="password"
                v-model="password"
                placeholder="••••••••"
                required
              />
            </div>
            <div class="flex items-center justify-between">
              <label class="flex items-center space-x-2 text-sm">
                <Checkbox id="terms" v-model="rememberMe"/>

                <span>Remember me</span>
              </label>
              <RouterLink to="/forgot-password" class="text-sm text-blue-600 hover:underline">
                Forgot password?
              </RouterLink>
            </div>
            <Button type="submit" class="w-full bg-[#0077b6] text-white hover:bg-[#005f8e]">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card class="w-full max-w-md mx-auto mt-10 shadow-md rounded-2xl p-6">
    <CardTitle class="text-center text-2xl mb-4">Staff Login</CardTitle>
    <form @submit.prevent="handleLogin">
      <div class="space-y-4">
        <div>
          <Label for="email">Email</Label>
          <Input v-model="email" type="email" placeholder="you@hospital.com" required />
        </div>
        <div>
          <Label for="password">Password</Label>
          <Input v-model="password" type="password" placeholder="••••••••" required />
        </div>
        <Button type="submit" class="w-full bg-[#0077b6]">Login</Button>
      </div>
    </form>
    <div class="text-center mt-4">
      <RouterLink to="/forgot-password" class="text-sm text-blue-600 hover:underline">Forgot password?</RouterLink>
    </div>
  </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
import { Checkbox } from '@/components/ui/checkbox'


const email = ref('')
const password = ref('')
const rememberMe = ref(false)

function handleLogin() {
  // TODO: Add your authentication logic here
  console.log({ email: email.value, password: password.value, rememberMe: rememberMe.value })
}
</script>
