<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { SelectLabel, type SelectLabelProps } from 'radix-vue'

const props = defineProps<SelectLabelProps & { class?: HTMLAttributes['class'] }>()
</script>

<template>
  <SelectLabel :class="cn('truepy-1.5 truepl-8 truepr-2 truetext-sm truefont-semibold', props.class)">
    <slot />
  </SelectLabel>
</template>
