<template>
  <div
    class="flex justify-center items-end md:items-center h-screen bg-no-repeat bg-center md:bg-left-top bg-cover bg-[url('~/assets/images/forgot-bg-xs-sm.png')] md:bg-[url('~/assets/images/forgot-bg.png')] md:relative">
    <div
      class="md:absolute flex xl:right-16 bottom-0 md:bottom-auto md:right-8 items-center max-w-xl sm:max-w-3xl md:max-w-sm xl:max-w-lg w-full bg-white rounded-3xl mb-2 md:mb-0 px-8 py-6 text-gray-600">
      <div class="w-full py-8">
        <h3 class="text-2xl text-center font-bold mb-3">
          Mot de passe oublié
        </h3>

        <p class="text-xs text-center font-medium my-4 italic">
          Veuillez entrer l'adresse email associée à votre compte. un code de vérification vous sera envoyé pour
          confirmer votre identité.
        </p>
        <form @submit.prevent="submit" class="flex flex-col">
          <div class="space-y-3 w-full">
            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel class="text-xs md:text-sm text-neutral-700 font-semibold">Email</FormLabel>
                <FormControl>
                  <Input type="email"
                    class="w-full p-2 sm:px-4 text-sm sm:text-md rounded text-neutral-800 border border-neutral-600 focus:border-neutral-700 outline-none"
                    v-model="formData.email" autocomplete="off" v-bind="componentField" />
                </FormControl>
              </FormItem>
            </FormField>

            <Button variant="outline"
              class="p-2.5 bg-emerald-500 rounded text-white hover:bg-emerald-700 hover:text-white font-semibold text-sm 2xl:text-md uppercase border-none">
              Envoyer
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
import { Button } from "@/components/ui/button"
import { FormField, FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

useHead({
  title: "Wakati App | Mot de passe oublié"
})

const router = useRouter();
const formData = reactive({
  email: '',
})

const submit = () => {
  console.log(JSON.parse(JSON.stringify(formData)))
   setTimeout(() => {
    router.push({
      path: `/forgot-password/verify`,
      query: { email: formData.email }
    })
   }, 1000)
}
</script>

<style></style>