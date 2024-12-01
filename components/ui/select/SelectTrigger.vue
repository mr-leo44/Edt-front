<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-vue-next'
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="cn(
      'trueflex trueh-10 truew-full trueitems-center truejustify-between truerounded-md trueborder trueborder-input truebg-background truepx-3 truepy-2 truetext-sm truering-offset-background data-[placeholder]:truetext-muted-foreground focus:trueoutline-none focus:truering-2 focus:truering-ring focus:truering-offset-2 disabled:truecursor-not-allowed disabled:trueopacity-50 [&>span]:truetruncate truetext-start',
      props.class,
    )"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="truew-4 trueh-4 trueopacity-50 trueshrink-0" />
    </SelectIcon>
  </SelectTrigger>
</template>
