<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h3
    :class="
      cn('truetext-2xl truefont-semibold trueleading-none truetracking-tight', props.class)
    "
  >
    <slot />
  </h3>
</template>
