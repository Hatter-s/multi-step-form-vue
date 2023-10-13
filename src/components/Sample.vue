<template>
  <div>
    This is a sample component
    <button class="border px-2 py-4 rounded-sm text-amber-500 block"> Add value </button>
    <p class="text-4xl pt-6">{{ value }}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const value = ref(0);
  const handleChange = () => {
    value++;
  }
</script>

<style scoped>

</style>