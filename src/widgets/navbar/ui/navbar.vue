<script setup lang="ts">

import {Container} from "@/shared/ui/container";
import {Logo} from "@/shared/ui/logo";
import {ButtonUi} from "@/shared/ui/button";
import {IconUi} from "@/shared/ui/icon";
import {FieldUi} from "@/shared/ui/field";
import {Typography} from "@/shared/ui/typography";
import SearchIcon from "@/shared/assets/icons/search/search-icon.svg"

</script>

<template>
  <header class="shadow-xl sticky top-0 left-0 w-full">
    <container class="flex items-center justify-between h-20">
      <logo/>
      <button-ui size="w-40 h-10" bg-color="green-500">
        <template #leftIcon>
          <icon-ui/>
        </template>
        Каталог
      </button-ui>
      <field-ui size="10" placeholder="Найти товар">
        <template #label>
          <typography tag="span" :is-text-color="false" size="base">Label</typography>
        </template>
        <template #rightIcon>
          <img :src="SearchIcon" alt="иконка поиска залупы" :width="24" :height="24">
        </template>
      </field-ui>
    </container>
  </header>
</template>

<style scoped>

</style>