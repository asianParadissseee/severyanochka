<script setup lang="ts">

import {Typography} from "@/shared/ui/typography";
import {useSlots} from "vue";

interface FieldProps {
  disabled?: boolean;
  size: "14" | "10";
  placeholder: string;
}

const {size = "14", placeholder, disabled} = defineProps<FieldProps>()

const slots = useSlots()


</script>

<template>
  <div :class="[`${size !== '14' ? 'text-base' : 'text-2xl'} w-60 h-${size}`]">
    <slot name="label"></slot>
    <div class="relative">
      <div v-if="slots.leftIcon" class="absolute p-1 w-6 h-6 top-2 left-3">
        <slot name="leftIcon"></slot>
      </div>
      <input :disabled="disabled" type="text" :placeholder="placeholder"
             :class="[`disabled:border-gray-500 disabled:bg-gray-300 w-full border rounded px-2 outline-green-500 py-1 `]"/>
      <div v-if="slots.rightIcon" class="absolute w-6 h-6 p-0.5 top-1 right-3">
        <slot name="rightIcon"></slot>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>