<template>
  <div class="container flex bg-transparent dark:text-white justify-between items-center py-4 px-6 md:px-12 fixed z-30">
    <router-link :to="`/students/${$route.params.username}`">
      <h3 class="text-sm md:text-lg font-bold">
        Wakati <span class="text-emerald-700">App</span>
      </h3>
    </router-link>
    <div class="flex justify-end gap-2 items-center text-xs md:text-md">
      <router-link :to="`/students/${$route.params.username}`"
        class="dark:hover:text-neutral-700 dark:hover:bg-neutral-200 rounded p-2 dark:text-white duration-150 transition-colors">
        <span class="font-semibold">Aujourd'hui</span>
      </router-link>
      <router-link to="/" class="dark:hover:text-neutral-700 dark:hover:bg-neutral-200 rounded p-2 dark:text-white duration-150 transition-colors">
        <span class="font-semibold">Edts</span>
      </router-link>
      <router-link :to="`/students/${$route.params.username}`"
        class="dark:hover:text-neutral-700 dark:hover:bg-neutral-200 rounded p-2 dark:text-white duration-150 transition-colors">
        <span class="font-semibold">Favoris</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

</script>

<style></style>