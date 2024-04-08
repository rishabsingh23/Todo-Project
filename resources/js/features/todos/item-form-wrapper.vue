<script setup>
import AddItemForm from "./add-item-form.vue";
import EditItemForm from "./edit-item-form.vue";
import { useTodoStore } from '../../store/todo'

const store = useTodoStore()

</script>

<template>

  <div v-if="store.getItemId===undefined">
    <AddItemForm />
  </div>
  <div v-else>
    <EditItemForm :itemValues="store.getItem" />
   
  </div>
</template>
