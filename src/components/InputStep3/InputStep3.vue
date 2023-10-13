<template>
  <label :for="id">
    <h2 class="title">{{ title }}</h2>
    <p class="description">{{ description }}</p>
    <p class="price">{{ price }}</p>
    <input type="checkbox" :name="id" :id="id" v-model="mainStore.formVal['add-ons']" :value="id"/>
    <div class="checkbox"></div>
  </label>
</template>

<script setup>
import { useMainStore } from '../../store/MainStore/MainStore';

const props = defineProps(['title', 'description', 'price', 'id']);

const mainStore = useMainStore();
</script>

<style scoped>
label {
    @apply border border-cool-gray grid grid-cols-[min-content_1fr_min-content] grid-rows-2 items-center rounded-lg px-4 py-3 cursor-pointer;
}

label:has(input:checked) {
    @apply border-purplish-blue bg-cool-gray/[0.1];
}

.checkbox {
    @apply h-5 w-5 border border-cool-gray rounded-[4px] col-start-1 col-span-1 row-start-1 row-span-2 justify-self-center me-4;
}

input:checked ~ .checkbox {
    @apply bg-purplish-blue relative;
}

input:checked ~ .checkbox::before {
    @apply border-white content-[''] w-[0.4em] h-[0.7em] border-b-2 border-r-2 top-[1.5px] right-[6.5px] rotate-45 absolute;
}

.title {
    @apply col-start-2 col-span-1 row-start-1 row-span-1 text-marine-blue font-bold text-sm;
}

.description {
    @apply col-start-2 col-span-1 row-start-2 row-span-1 text-xs;
}

.price {
    @apply text-purplish-blue justify-self-center col-span-1 col-start-3 row-start-1 row-span-2 text-xs;
}

input {
    @apply hidden;
}
</style>
