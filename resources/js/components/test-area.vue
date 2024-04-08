<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
type: {
  type: String,
  default: 'text',
},
value: {
  type: String,
  default: undefined,
},
name: {
  type: String,
  required: true,
},
label: {
  type: String,
  default: '',
  // required: true,
},
placeholder: {
  type: String,
  default: '',
},
});


const { errorMessage, value, handleChange, handleBlur } = useField(() => props.name, undefined, {
  validateOnValueUpdate: false,
});
// const { handleChange, value, handleBlur, errorMessage, meta } = useField(() => props.name, undefined);

const validationListeners = {
  blur: evt => handleBlur(evt, true),
  change: handleChange,
  input: evt => handleChange(evt, !!errorMessage.value),
};
</script>
<template>
    <div class="space-y-2">
        <label v-if="label!==''"
          class="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          for=":r1m:-form-item"
          >{{ label }}</label
        ><textarea
          class="flex h-20 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors   placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          :value="value" v-on="validationListeners" type="text"
          :placeholder="placeholder" 
          rows="3"
        ></textarea>
        <!-- v-model="form.title" -->
        <p  class="text-[0.8rem] text-red-600">
            {{ errorMessage }}
        </p>
      </div>
  </template>
  