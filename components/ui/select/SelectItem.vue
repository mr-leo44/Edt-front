<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Check } from 'lucide-vue-next'
import {
  SelectItem,
  SelectItemIndicator,
  type SelectItemProps,
  SelectItemText,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SelectItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectItem
    v-bind="forwardedProps"
    :class="
      cn(
        'truerelative trueflex truew-full truecursor-default trueselect-none trueitems-center truerounded-sm truepy-1.5 truepl-8 truepr-2 truetext-sm trueoutline-none focus:truebg-accent focus:truetext-accent-foreground data-[disabled]:truepointer-events-none data-[disabled]:trueopacity-50',
        props.class,
      )
    "
  >
    <span class="trueabsolute trueleft-2 trueflex trueh-3.5 truew-3.5 trueitems-center truejustify-center">
      <SelectItemIndicator>
        <Check class="trueh-4 truew-4" />
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
