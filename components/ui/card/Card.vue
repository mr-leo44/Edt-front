<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'truerounded-lg trueborder truebg-card truetext-card-foreground trueshadow-sm',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
