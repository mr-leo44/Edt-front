<template>
  <div
    class="flex justify-center items-end md:items-center h-screen bg-no-repeat bg-center md:bg-left-top bg-cover bg-[url('~/assets/images/forgot-bg-xs-sm.png')] md:bg-[url('~/assets/images/forgot-bg.png')] md:relative">
    <div
      class="md:absolute flex xl:right-16 bottom-0 md:bottom-auto md:right-8 items-center max-w-xl sm:max-w-3xl md:max-w-sm xl:max-w-lg w-full bg-white rounded-3xl mb-2 md:mb-0 px-8 py-6 text-gray-600">
      <div class="w-full py-8">
        <h3 class="text-2xl text-center font-bold mb-3">
          Réinitialisation du mot de passe
        </h3>

        <p class="text-xs text-center font-medium my-4 italic">
          Choisissez un nouveau mot de passe sécurisé pour protéger votre compte. Assurez-vous de respecter
          les critères de sécurité.
        </p>
        <form @submit.prevent="submit" class="flex flex-col space-y-3">
          <div class="space-y-3 w-full">
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

            <FormField v-slot="{ componentField }" name="password_confirmation">
              <FormItem>
                <FormLabel class="text-sm text-neutral-700 font-semibold">Confirmer mot de passe</FormLabel>
                <FormControl>
                  <Input type="password"
                    class="w-full p-2 sm:px-4 text-sm sm:text-md rounded placeholder-neutral-800 border border-neutral-600 focus:border-neutral-700 outline-none"
                    v-model="formData.password_confirmation" autocomplete="off" v-bind="componentField" />
                </FormControl>
              </FormItem>
            </FormField>
            <Button
              class="p-3 bg-emerald-500 rounded text-white hover:bg-emerald-700 hover:text-white font-semibold text-sm 2xl:text-md uppercase border-none"
              :disabled="!formData.password || !formData.password_confirmation">
              Réinitialiser
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

useHead({
  title: "Wakati App | Réinitialiser mot de passe"
})

const router = useRouter();

const formData = reactive({
  password: '',
  password_confirmation: '',
})

const submit = () => {
  console.log(JSON.parse(JSON.stringify(formData)))
  router.push(`/login`)
}
</script>

<style></style>