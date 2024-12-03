<template>
  <div
    class="flex justify-center items-end md:items-center h-screen bg-no-repeat bg-center md:bg-left-top bg-cover bg-[url('~/assets/images/login-bg-xs-sm.png')] md:bg-[url('~/assets/images/login-bg.jpg')] md:relative">
    <div
      class="md:absolute flex xl:right-16 bottom-0 md:bottom-auto md:right-8 items-center max-w-xl sm:max-w-3xl md:max-w-sm xl:max-w-lg w-full bg-white rounded-3xl mb-2 md:mb-0 px-8 py-6 text-gray-600">
      <div class="w-full">
        <h3 class="text-2xl xl:text-3xl text-center font-bold mb-8">
          Se connecter à <span class="text-emerald-700">Wakati App</span>
        </h3>
        <form @submit.prevent="submit" class="flex flex-col space-y-3">
          <FormField v-slot="{ componentField }" name="login">
            <FormItem>
              <FormLabel class="text-sm text-neutral-700 font-semibold">Username ou Email</FormLabel>
              <FormControl>
                <Input type="text"
                  class="w-full p-2 sm:px-4 text-sm sm:text-md rounded placeholder-neutral-800 border border-neutral-600 focus:border-neutral-700 outline-none"
                  v-model="formData.login" autocomplete="off" v-bind="componentField" />
              </FormControl>
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel class="text-sm text-neutral-700 font-semibold">Mot de passe</FormLabel>
              <FormControl>
                <Input type="password"
                  class="w-full p-2 sm:px-4 text-sm sm:text-md rounded placeholder-neutral-800 border border-neutral-600 focus:border-neutral-700 outline-none"
                  v-model="formData.password" autocomplete="off" v-bind="componentField" />
              </FormControl>
            </FormItem>
          </FormField>
          <div class="flex justify-between items-center mt-3 mb-8">
            <div class="flex items-center space-x-2 font-medium text-xs sm:text-sm">
              <Checkbox id="remember_me" class="border-neutral-700" v-model="formData.remember_me" />
              <Label for="remember_me">Se souvenir de moi</Label>
            </div>
            <NuxtLink to="/forgot-password" class="font-medium text-xs sm:text-sm">
              Mot de passe oublié?
            </NuxtLink>
          </div>

          <Button type="submit"
            class="p-3 w-full bg-emerald-700 rounded text-white font-semibold text-sm 2xl:text-md uppercase border-none">Se
            connecter
          </Button>
        </form>
        
        <p class="my-4 text-xs text-center">
          En cliquant sur le bouton se connecter ci-dessous, vous acceptez <span class="text-emerald-700">les
            conditions de service</span> de wakati app
        </p>
        <div class="text-center mt-8 mb-4 font-bold text-xs sm:text-sm">
          <span>Pas de compte? </span>
          <NuxtLink to="/register" class="text-emerald-700">
            S'inscrire
          </NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

useHead({
  title: "Wakati App | login"
})

const router = useRouter()
const formData = reactive({
  login: '',
  password: '',
  remember_me: false,
})

const submit = () => {
  try {
    console.log(JSON.parse(JSON.stringify(formData)))
    router.push(`/students/${formData.login}`)
  } catch (error) {
    console.error('Erreur de la connexion :', error);
  }
}
</script>

<style></style>