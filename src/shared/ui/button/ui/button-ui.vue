<script setup lang="ts">

import {Typography} from "@/shared/ui/typography";

interface ButtonProps {
  bgColor?: "bg-orange-700" | "bg-green-400" | "bg-gray-200" | "bg-red-500"
  decoration?: "orange-500" | "green-500" | "gray-200" | "red-500" | 'transparent'
  disabled?: boolean;
  size?: "w-48 h-14" | "w-40 h-10" | "w-40 h-8"
}

const props = defineProps<ButtonProps>()

const {
  size = "w-48 h-14",
  bgColor = "bg-gray-200",
  disabled = false,
  decoration = "transparent",
} = props
console.log(bgColor)
</script>

<template>
  <button :disabled="disabled"
          :class="[`${bgColor} border-${decoration} border-transparent text-white px-2 py-0.5 flex items-center justify-center gap-3 rounded border-2`,size]">
    <slot name="leftIcon"></slot>
    <typography text-color="white" tag="p" size="base">
      <slot/>
    </typography>
  </button>
</template>

<style scoped>

</style>