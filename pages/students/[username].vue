<template>
  <div>
    <h3 class="text-2xl font-semibold">Bonjour {{ $route.params.username }}</h3>
    <span class="text-sm">Ravi de vous revoir</span>
  </div>
</template>

<script lang="ts" setup>
// import EdtCard from '@/components/student/EdtCard.vue';
definePageMeta({
  layout: 'student',
})
</script>

<style></style>