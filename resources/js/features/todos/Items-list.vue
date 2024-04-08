<script setup>
import { getAllItems } from "../../api/todo-api";
import ListItem from "./list-item.vue";
import { useQuery } from "@tanstack/vue-query";

const { isLoading, isFetching, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllItems,
});

</script>

<template>
  <div class="h-full w-full rounded-[inherit]">
    <template v-if="isLoading || isFetching">
      <p>Loading</p>
    </template>
    <template v-else-if="data.length">
      <div class="space-y-3">
        <div v-for="(item, index) in data" :key="item.id">
          <ListItem :item="item" />
        </div>
      </div>
    </template>
    <template v-else>
      <p>No Todo</p>
    </template>
  </div>
</template>