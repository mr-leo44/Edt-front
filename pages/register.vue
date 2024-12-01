<template>
  <div
    class="flex justify-center items-end md:items-center h-screen bg-no-repeat bg-center md:bg-left-top bg-cover bg-[url('~/assets/images/register-bg-xs-sm.png')] md:bg-[url('~/assets/images/register-bg.png')] md:relative">
    <div
      class="md:absolute flex xl:right-16 bottom-0 md:bottom-auto md:right-8 items-center max-w-xl sm:max-w-3xl md:max-w-sm xl:max-w-lg w-full bg-white rounded-3xl mb-2 md:mb-0 px-8 py-6 text-gray-600">
      <div class="w-full">
        <h3 class="text-2xl xl:text-3xl text-center font-bold" :class="currentStep === 1 ? 'mb-12' : 'mb-3'">
          S'inscrire à <span class="text-emerald-700">Wakati App</span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

useHead({
  title: "Wakati App | register"
})

const router = useRouter();
const currentStep = ref(1)
</script>

<style></style>