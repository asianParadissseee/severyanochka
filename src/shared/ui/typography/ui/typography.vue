<script setup lang="ts">

interface TypographyProps {
  tag: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  isBold?: boolean;
  size?: 'xs' | 'base' | 'lg' | '2xl' | '4xl' | '5xl' | '6xl' | '7xl' | "8xl";
  textColor?: "gray-300" | "white" | "black"
}


const {tag = "p", isBold = false, textColor = "black", size = "base"} = defineProps<TypographyProps>()
</script>
<template>
  <component :class="[isBold ? 'font-bold' : 'font-normal', `text-${size} text-${textColor}`]"
             :is="tag">
    <slot/>
  </component>
</template>


<style scoped>

</style>