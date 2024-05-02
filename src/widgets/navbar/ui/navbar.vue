<script setup lang="ts">

import {Container} from "@/shared/ui/container";
import {Logo} from "@/shared/ui/logo";
import {ButtonUi} from "@/shared/ui/button";
import {IconUi} from "@/shared/ui/icon";
import {FieldUi} from "@/shared/ui/field";
import SearchIcon from "@/shared/assets/icons/search/search-icon.svg"
import {handleError, ref} from "vue";


const searchValue = ref<string>('')

const handleSubmit = ()=>{
  console.log("submit to server")
}

</script>

<template>
  <header class="shadow-xl sticky top-0 left-0 w-full">
    <container class="flex items-center justify-between h-20">
      <logo/>
      <button-ui size="w-40 h-10" bg-color="bg-green-400">
        <template #leftIcon>
          <icon-ui/>
        </template>
        Каталог
      </button-ui>
  <div class="w-96">
    <field-ui size="10" placeholder="Найти товар" v-model="searchValue" :on-submit="handleSubmit">
      <template #rightIcon>
        <img :src="SearchIcon" alt="иконка поиска залупы" :width="24" :height="24">
      </template>
    </field-ui>
  </div>
    </container>
  </header>
</template>

<style scoped>

</style>