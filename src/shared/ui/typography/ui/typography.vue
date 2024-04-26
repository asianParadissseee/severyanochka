<script setup lang="ts">

interface TypographyProps {
  tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  isBold?: boolean;
  size?: 'text-sm' | 'sm' | 'md' | 'lg' | 'xl';
}


const props = defineProps<TypographyProps>()
</script>
<template>
  <component :class="[props.isBold ? 'font-bold' : 'font-normal', props.size]" :is="props.tag">
    <slot/>
  </component>
</template>


<style scoped>

</style>