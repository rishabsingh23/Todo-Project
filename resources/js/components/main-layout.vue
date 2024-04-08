<script setup>
import NavBar from "./nav-bar.vue";
import TodoWrapper from "../features/todos/todo-wrapper.vue";
</script>

<template>
  <div class="">
    <NavBar />
    <div class="max-w-screen-xl mx-auto py-8 w-1/2">
      <TodoWrapper />
    </div>
  </div>
</template>
