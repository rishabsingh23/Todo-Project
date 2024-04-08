<script setup>
import ItemFormWrapper from "./item-form-wrapper.vue";
import ItemsList from "./Items-list.vue";
</script>

<template>
  <div class="space-y-3">
    <div class="">
      <h3 class="my-3 font-semibold text-xl">Add Item </h3>
      <ItemFormWrapper />
    </div>
    <div class="">
      <h3 class="my-3 font-semibold text-xl">Todo List</h3>
      <ItemsList />
    </div>
  </div>
</template>
