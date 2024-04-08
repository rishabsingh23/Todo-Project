<script setup>
import { useForm } from "vee-validate";
import BaseInput from "../../components/base-input.vue";
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import SelectInput from "../../components/select-input.vue";
import TestArea from "../../components/test-area.vue";
import { useMutation,useQuery,useQueryClient  } from '@tanstack/vue-query'
import {  updateItem } from "../../api/todo-api";
import { useTodoStore } from "../../store/todo";
const schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Description is required')
});

const props = defineProps({
  itemValues: {
  type: Object,
  required:true
}
})
const store = useTodoStore()
const queryClient = useQueryClient()
const mutation = useMutation({
  mutationFn: updateItem,
  onSuccess: () => {
      queryClient.invalidateQueries(`todos`);
    }
 })

const { handleSubmit, resetForm } = useForm({
  validationSchema:schema,
  initialValues:props.itemValues,
});

const onSubmit = handleSubmit(async(values) => {
  console.log("form.value", values);
  if(values.id){
    try {
     const res =  await mutation.mutateAsync(values)
      resetForm({});
      store.resetItem();
    } catch (error) {
      console.log('error',error.message)
    }
  }
});
</script>

<template>
    <div class="h-full w-full rounded-[inherit]">
      <div class="bg-white shadow rounded-md border p-5">
    <form @submit="onSubmit">
      <BaseInput
        name="title"
        type="text"
        label="Title"
        placeholder="your title"
      />
      <SelectInput
        name="status"
        label="status"
        placeholder="Select status"
      />
      <TestArea
        name="description"

        label="Description"
        placeholder="Your description"
      />
      <div class="gap-2 pt-4 text-right">
        <button
          class="inline-flex items-center border justify-center whitespace-nowrap rounded-md text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-9 px-4 py-2"
          type="cancel"
        >
          Reset
        </button>
        <button
          class="inline-flex ms-2 bg-blue-500 text-white items-center justify-center whitespace-nowrap rounded-md text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow hover:bg-blue-600 h-9 px-4 py-2"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  </div>

  </div>

</template>
