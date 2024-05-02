<script setup lang="ts">

import {ref, useSlots, } from "vue";

interface FieldProps {
  modelValue?: string;
  disabled?: boolean;
  onSubmit?: () => void;
  size?: "14" | "10";
  placeholder?: string;
}

const {
  size = "14", placeholder, disabled, modelValue, onSubmit
} = defineProps<FieldProps>()

const slots = useSlots()

const emit = defineEmits(['update:modelValue']);
const value = ref(modelValue);
const handleInput = (event: any) => {
  value.value = event.target.value;
  emit('update:modelValue', value.value);
};

</script>

<template>
  <div :class="[`${size !== '14' ? 'text-base' : 'text-2xl'} w-60 h-${size}`]">
    <slot name="label"></slot>
    <div class="relative">
      <div v-if="slots.leftIcon" class="absolute  p-1 w-6 h-6 top-2 left-3">
        <slot name="leftIcon"></slot>
      </div>
      <input
          @input="handleInput"
          :value="value"
          :disabled="disabled" type="text"
          :placeholder="placeholder"
          :class="[`disabled:border-gray-500 caret-green-400 transition-all ease-in-out focus:border-2 focus:shadow-xl disabled:bg-gray-300 w-full border rounded px-2 outline-green-500 py-1 `]"/>
      <div v-if="slots.rightIcon" class="absolute w-6 h-6 p-0.5 cursor-pointer z-50 top-1 right-3" @click="onSubmit">
        <slot name="rightIcon"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>