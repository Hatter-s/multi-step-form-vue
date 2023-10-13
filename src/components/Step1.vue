<template>
  <!-- Step 1 start -->
  <Card>
    <template v-slot:title>Personal info</template>
    <template v-slot:description>Please provide your name, email address, and phone number.</template>
    <template v-slot:content>
      <div class="input-group">
        <label for="username">
          Name
          <span v-if="mainStore.valueError === 'name'">This field is required</span>
        </label>
        <input type="text" name="username" id="username" placeholder="e.g. Stephen King" v-model="mainStore.formVal.name"
          :class="{ invalid: mainStore.valueError === 'name' }" />
      </div>

      <div class="input-group">
        <label for="email">
          Email Address
          <span v-if="mainStore.valueError === 'email'">This field is required</span>
        </label>
        <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com"
          v-model="mainStore.formVal.email" :class="{ invalid: mainStore.valueError === 'email' }" />
      </div>

      <div class="input-group">
        <label for="phone">
          Phone Number
          <span v-if="mainStore.valueError === 'phone'">This field is required</span>
        </label>
        <input type="tel" name="phone" id="phone" placeholder="e.g. +1 234 567 890" v-model="mainStore.formVal.phone"
          :class="{ invalid: mainStore.valueError === 'phone' }" />
      </div>
    </template>
    <template v-slot:desktop-btn-container>
      <button class="next-step desktop-btn" type="button" @click="goToStep2">
        next step
      </button>
    </template>
    <template v-slot:functional-buttons>
      <button class="next-step" type="button" @click="goToStep2">
      next step
    </button>
    </template>

  </Card>
  <!-- Step 1 end -->
</template>

<script setup>
import { useRouter } from "vue-router";
import { useMainStore } from "../store/MainStore/MainStore";
import Card from "./Card/Card.vue";

const mainStore = useMainStore();
const router = useRouter();

const goToStep2 = () => {
  const validation = mainStore.checkStep1Validation();

  if (validation) {
    router.push("/2");
  }
};
</script>

<style scoped>
div.input-group {
  @apply flex flex-col flex-nowrap items-start mb-4;
  @apply lg:mb-6;
}

div.input-group label {
  @apply text-marine-blue flex justify-between w-full;
}

div.input-group label span {
  @apply text-strawberry-red font-medium;
}

div.input-group input {
  @apply border ps-4 py-2 rounded-md font-medium text-marine-blue w-full;
  @apply focus:text-marine-blue focus:outline-none focus:border-purplish-blue placeholder:text-cool-gray relative;
}

div.input-group input.invalid {
  @apply border-strawberry-red;
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
