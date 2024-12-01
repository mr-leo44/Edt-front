<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input v-model="modelValue" :class="cn('trueflex trueh-10 truew-full truerounded-md trueborder trueborder-input truebg-background truepx-3 truepy-2 truetext-sm truering-offset-background file:trueborder-0 file:truebg-transparent file:truetext-sm file:truefont-medium placeholder:truetext-muted-foreground focus-visible:trueoutline-none focus-visible:truering-2 focus-visible:truering-ring focus-visible:truering-offset-2 disabled:truecursor-not-allowed disabled:trueopacity-50', props.class)">
</template>
