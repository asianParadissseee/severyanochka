<script setup lang="ts">

interface IconProps {
}

const lines = Array.from({length: 3})
</script>

<template>
  <div class="flex flex-col gap-1 w-6">
    <div v-for="(line,id) in lines" :key="id" class="h-0.5 w-full bg-white"></div>
  </div>
</template>

<style scoped>

</style>