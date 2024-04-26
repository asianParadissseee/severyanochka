<script setup lang="ts">

interface ButtonProps {
  bgColor?: "bg-orange-700" | "bg-green-500" | "bg-gray-200" | "bg-red-500"
  decoration?: "border-orange-500" | "border-green-500" | "border-gray-200" | "border-red-500" | 'border-transparent'
  disabled?: boolean;
  size?: "w-48 h-14" | "w-40 h-10" | "w-40 h-8"
}

const props = defineProps<ButtonProps>()

const {
  size = "w-48 h-14",
  bgColor = "bg-gray-200",
  disabled = false,
  decoration = "border-transparent",
} = props

</script>

<template>
  <button :class="[bgColor,decoration, size, 'px-2 py-0.5 rounded border-2']">
    <slot name="leftIcon"></slot>
  </button>
</template>

<style scoped>

</style>