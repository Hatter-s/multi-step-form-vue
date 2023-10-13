<template>
  <label :for="id">
    <img class="img" :src="getImageUrl()" :alt="id" />
    <h2 class="title">{{ title }}</h2>
    <p class="price">{{ price }}</p>
    <input
      type="radio"
      :name="inputName"
      :value="value"
      :id="id"
      :checked="isChecked"
      class="input"
      v-model="mainStore.formVal.plan"
    />
  </label>
</template>

<script setup>
import { useMainStore } from "../../store/MainStore/MainStore";

const mainStore = useMainStore();
const props = defineProps([
  "id",
  "inputName",
  "value",
  "imgSrc",
  "title",
  "price",
  "isChecked",
]);

function getImageUrl() {
  // This path must be correct for your file
  return new URL(`../../assets/images/${props.imgSrc}`, import.meta.url);
}
</script>

<style scoped>
label {
  @apply border-light-gray border grid grid-cols-[40px_1fr] grid-rows-2 gap-x-4 px-4 py-4 rounded-lg mb-4 cursor-pointer;
  @apply lg:grid-rows-[80px] lg:grid-cols-[110px];
  @apply hover:border-purplish-blue;

  .input {
    @apply hidden;
  }

  .img {
    @apply col-span-1 col-start-1 row-start-1 row-span-2;
    @apply lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1;
  }

  .title {
    @apply col-start-2 col-span-1 row-auto text-marine-blue font-medium;

    @apply lg:col-start-1 lg:col-span-1 lg:row-start-2 lg:row-span-1;
  }
}

label:has(input:checked) {
  @apply border-purplish-blue bg-light-gray/[0.2];
}
</style>
