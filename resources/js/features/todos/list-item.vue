<script setup>
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { deleteItem } from "../../api/todo-api";
import { useTodoStore } from "../../store/todo";

const props = defineProps({
    item: {
        type: Object,
    },
});
const store = useTodoStore();
const queryClient = useQueryClient();
const mutation = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
        queryClient.invalidateQueries("todos");
    },
});

const removeTodo = async (itemId) => {
    try {
        const todo = await mutation.mutateAsync(itemId);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("done");
    }
};
</script>

<template>
    <div>
        <div
            class="bg-white shadow-md flex flex-col items-start gap-2 rounded-md border p-5 text-left text-sm transition-all"
        >
            <div class="flex w-full flex-col gap-1">
                <div class="flex items-center">
                    <div class="flex items-center gap-2">
                        <h5 class="font-semibold text-lg">{{ item.title }}</h5>
                    </div>
                    <div class="ml-auto text-xs text-muted-foreground">
                        <div
                            class="inline-flex items-center rounded px-2.5 py-0.5 text-sm capitalize bg-green-400 text-white"
                            :class="{
                                'bg-green-400': item.status === 'In Progress',
                                'bg-yellow-400': item.status === 'Todo',
                                'bg-blue-400': item.status === 'Closed',
                                'text-white': [
                                    'Todo',
                                    'In Progress',
                                    'Closed',
                                ].includes(item.status),
                            }"
                        >
                            {{ item.status }}
                        </div>
                    </div>
                </div>
            </div>
            <p
                class="line-clamp-2 text-sm text-slate-400 text-muted-foreground"
            >
                {{ item.description }}
            </p>
        </div>
        <div class="gap-2 pt-4 text-right">
            <button
                class="inline-flex items-center bg-blue-500 text-white border justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-9 px-4 py-2"
                type="button"
                @click="store.setItem(item)"
            >
                Edit
            </button>
            <button
                @click="removeTodo(item.id)"
                class="inline-flex ms-2 bg-red-500 text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow hover:bg-red-600 h-9 px-4 py-2"
                type="button"
            >
                Delete
            </button>
        </div>
    </div>
</template>
