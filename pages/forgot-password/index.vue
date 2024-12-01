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
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

useHead({
  title: "Wakati App | Mot de passe oublié"
})

const router = useRouter();
const formData = reactive({
  email: '',
})

const submit = ({ valid }: any) => {
  if (valid) {
    console.log(JSON.parse(JSON.stringify(formData)))
    setTimeout(() => {
      router.push({
        path: `/forgot-password/verify`,
        query: { email: formData.email }
      })
    }, 1000)
  }
}
</script>

<style></style>