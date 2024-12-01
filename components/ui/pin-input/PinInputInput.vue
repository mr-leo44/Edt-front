<script setup lang="ts">
import { cn } from '@/lib/utils'
import { PinInputInput, type PinInputInputProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<PinInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PinInputInput v-bind="forwardedProps" :class="cn('truerelative truetext-center focus:trueoutline-none focus:truering-2 focus:truering-ring focus:truerelative focus:truez-10 trueflex trueh-10 truew-10 trueitems-center truejustify-center trueborder-y trueborder-r trueborder-input truetext-sm truetransition-all first:truerounded-l-md first:trueborder-l last:truerounded-r-md', props.class)" />
</template>
