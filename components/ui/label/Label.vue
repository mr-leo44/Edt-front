<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Label, type LabelProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Label
    v-bind="delegatedProps"
    :class="
      cn(
        'truetext-sm truefont-medium trueleading-none peer-disabled:truecursor-not-allowed peer-disabled:trueopacity-70',
        props.class,
      )
    "
  >
    <slot />
  </Label>
</template>
