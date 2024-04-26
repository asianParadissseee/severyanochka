<script setup lang="ts">

import {Container} from "@/shared/ui/container";
import {Logo} from "@/shared/ui/logo";
import {ButtonUi} from "@/shared/ui/button";
import {IconUi} from "@/shared/ui/icon";


</script>

<template>
  <header class="shadow-xl sticky top-0 left-0 w-full">
    <container class="flex items-center justify-between h-20">
      <logo/>
      <button-ui size="w-40 h-10" bg-color="green-500">
        <template v-slot:leftIcon>
          <icon-ui/>
        </template>
        Каталог
      </button-ui>
    </container>
  </header>
</template>

<style scoped>

</style>