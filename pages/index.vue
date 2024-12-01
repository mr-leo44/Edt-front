<template>
  <div
    class="flex justify-center items-end md:items-center h-screen bg-no-repeat bg-center md:bg-left-top bg-cover bg-[url('~/assets/images/login-bg-xs-sm.png')] md:bg-[url('~/assets/images/login-bg.jpg')] md:relative">
    <div
      class="md:absolute flex xl:right-16 bottom-0 md:bottom-auto md:right-8 items-center max-w-xl sm:max-w-3xl md:max-w-sm xl:max-w-lg w-full bg-white rounded-3xl mb-2 md:mb-0 p-5 text-gray-600">
      <div class="w-full py-8">
        <h3 class="text-2xl xl:text-3xl text-center font-bold mb-12">
          Bienvenue à <span class="text-emerald-500">Wakati App</span>
        </h3>
        <p class="text-center text-md">Cette page est en construction. Cliquez sur les button ci-dessous pour d'autres tests</p>
        <div class="flex my-8 justify-center gap-4 items-center w-full">
          <NuxtLink to="/register" class="bg-emerald-500 text-white hover:bg-emerald-600 py-3 px-4 sm:px-6 rounded text-sm">
            S'inscrire
          </NuxtLink>
          <NuxtLink to="/login" class="bg-emerald-500 text-white hover:bg-emerald-600 py-3 px-4 sm:px-6 rounded text-sm">
            Se connecter </NuxtLink>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>

useHead({
  title: "Wakati App | Accueil"
})
</script>

<style></style>