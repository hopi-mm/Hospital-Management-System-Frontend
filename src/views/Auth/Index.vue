<template>
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-2">
    <!-- Left: Image & Tagline -->
    <div class="hidden md:flex items-center justify-center bg-[#e0f7fa] p-8">
      <div class="text-center">
        <img src="https://docpulse.com/wp-content/uploads/2024/02/slider-small-1.jpg" alt="Hospital Illustration" class="w-80 mx-auto mb-6" />
        <h2 class="text-2xl font-semibold text-[#0077b6]">Your health, our priority</h2>
        <p class="text-gray-600 mt-2 max-w-sm mx-auto">Managed securely by HMS</p>
      </div>
    </div>

    <!-- Right -->
    <div class="flex items-center justify-center p-6">
      <!-- login form  -->
      <transition name="fade-scale">
        <BaseCard class="w-full max-w-md shadow-lg rounded-2xl border"  v-if="authState == 'login'">
        <h1 class="text-2xl font-semibold text-center mb-4">Reception Login</h1>
          <form @submit.prevent="handleLogin" class="space-y-4">

            <!-- login form -->
            
              <div class="space-y-5">
                <div class="space-y-1">
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    v-model="email"
                    placeholder="you@hospital.com"
                    required
                  />
                </div>
                <div class="space-y-1">
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
              </div>

      
            <BaseButton type="submit" class="w-full bg-[#0077b6] text-white hover:bg-[#005f8e]">
              Login
            </BaseButton>
            <BaseButton type="button" class="cursor-pointer group" @click="authStateCheck('register')">
              Register Here 
              <MoveRight class="group-hover:translate-x-1 transition duration-200"/>
            </BaseButton>
          </form>
      </BaseCard>
      </transition>

      <!-- register form  -->
      <transition name="fade-scale">
        <BaseCard class="w-full max-w-md shadow-lg rounded-2xl border" v-if="authState == 'register'">
        <h1 class="text-2xl font-semibold text-center mb-4">Reception Register</h1>
          <form @submit.prevent="handleLogin" class="space-y-4">

          

            <!-- register form -->
            
              <div class="space-y-5" >
                <div class="space-y-1">
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    v-model="email"
                    placeholder="you@hospital.com"
                    required
                  />
                </div>
                <div class="space-y-1">
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    v-model="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div class="space-y-1">
                  <Label for="password">Confirm Password</Label>
                  <Input
                    id="password"
                    type="password"
                    v-model="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
              
              </div>
            <BaseButton type="button" class="w-full bg-[#0077b6] text-white hover:bg-[#005f8e]" @click="authStateCheck('login')">
              Register
            </BaseButton>
            
          </form>
      </BaseCard>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RouterLink } from 'vue-router'
import { Checkbox } from '@/components/ui/checkbox'
import BaseButton from '@/components/elements/BaseButton.vue'
import { MoveRight  } from 'lucide-vue-next';



const email = ref('')
const password = ref('')
const rememberMe = ref(false)

function handleLogin() {
  // TODO: Add your authentication logic here
  console.log({ email: email.value, password: password.value, rememberMe: rememberMe.value })
}

const authState = ref('login')

const authStateCheck = (value: string) =>{
  authState.value = ''
  setTimeout(() => {
    authState.value = value
  },250)
}
</script>
<style lang="css" scoped>
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: all 0.3s ease;
}
.fade-scale-enter-from, .fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
