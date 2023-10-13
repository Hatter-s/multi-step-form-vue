<template>
  <!-- Step 1 start -->
  <div class="card" :class="{ 'final-step': isFinalStep }">
    <img v-if="isFinalStep" src="../../assets/images/icon-thank-you.svg" alt="thankyou" class="thankyou-img">
    <h1>
      <slot name="title"></slot>
    </h1>
    <p class="description">
      <slot name="description"></slot>
    </p>
    <slot name="content"></slot>
    <div class="desktop-btn-container">
      <slot name="desktop-btn-container"></slot>
    </div>
  </div>

  <div class="functional-buttons">
    <slot name="functional-buttons"></slot>
  </div>
  <!-- Step 1 end -->
</template>

<script setup>
const props = defineProps(["isFinalStep"]);
</script>

<style scoped>
/* Final step start */
.final-step.card {
  @apply text-center justify-center pt-12 pb-12;
}

.final-step .desktop-btn-container{
  @apply hidden;
}
.thankyou-img {
  @apply w-14 h-14 mx-auto mb-6;
  @apply lg:w-20 lg:h-20 lg:mb-0;
}
/* Final step end */

.card {
  @apply bg-white rounded-lg py-6 px-6 lg:px-0 lg:py-0;
  @apply lg:bg-[transparent] lg:flex lg:flex-col;
}



h1 {
  @apply text-marine-blue font-bold text-2xl mb-4;
  @apply lg:text-4xl lg:mt-10;
}

.description {
  @apply text-cool-gray mb-4;
  @apply lg:mb-8;
}

div.input-group {
  @apply flex flex-col flex-nowrap items-start mb-4;
  @apply lg:mb-6;
}

.functional-buttons {
  @apply flex flex-row-reverse p-4 lg:hidden justify-between mt-6;
  /* full width background inside a container */
  --color: white;
  background-color: var(--color);
  box-shadow: 0 0 0 100vmax var(--color);
  clip-path: inset(0 -100vmax);
}

.next-step {
  @apply bg-marine-blue px-4 py-3 rounded-md capitalize text-white;
}

.desktop-btn-container {
  @apply flex-1 flex justify-end items-end;
}
.desktop-btn {
  @apply hidden lg:block me-0 ms-auto mb-0;
}
</style>
