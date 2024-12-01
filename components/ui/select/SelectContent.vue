<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  SelectContent,
  type SelectContentEmits,
  type SelectContentProps,
  SelectPortal,
  SelectViewport,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import { SelectScrollDownButton, SelectScrollUpButton } from '.'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<SelectContentProps & { class?: HTMLAttributes['class'] }>(),
  {
    position: 'popper',
  },
)
const emits = defineEmits<SelectContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SelectPortal>
    <SelectContent
      v-bind="{ ...forwarded, ...$attrs }" :class="cn(
        'truerelative truez-50 truemax-h-96 truemin-w-32 trueoverflow-hidden truerounded-md trueborder truebg-popover truetext-popover-foreground trueshadow-md data-[state=open]:trueanimate-in data-[state=closed]:trueanimate-out data-[state=closed]:truefade-out-0 data-[state=open]:truefade-in-0 data-[state=closed]:truezoom-out-95 data-[state=open]:truezoom-in-95 data-[side=bottom]:trueslide-in-from-top-2 data-[side=left]:trueslide-in-from-right-2 data-[side=right]:trueslide-in-from-left-2 data-[side=top]:trueslide-in-from-bottom-2',
        position === 'popper'
          && 'data-[side=bottom]:truetranslate-y-1 data-[side=left]:true-translate-x-1 data-[side=right]:truetranslate-x-1 data-[side=top]:true-translate-y-1',
        props.class,
      )
      "
    >
      <SelectScrollUpButton />
      <SelectViewport :class="cn('truep-1', position === 'popper' && 'trueh-[--radix-select-trigger-height] truew-full truemin-w-[--radix-select-trigger-width]')">
        <slot />
      </SelectViewport>
      <SelectScrollDownButton />
    </SelectContent>
  </SelectPortal>
</template>
