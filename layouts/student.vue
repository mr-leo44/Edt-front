<template>
  <NavBar />
  <div class="container py-20 px-6 md:px-12">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import NavBar from '~/components/student/NavBar.vue'

</script>

<style></style>