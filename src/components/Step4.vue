<template>
  <!-- Step 4 start -->
  <Card>
    <template v-slot:title>Finishing up</template>
    <template v-slot:description
      >Double-check everything looks OK before confirming.</template
    >
    <template v-slot:content>
      <!-- Dynamically add subscription and add-on selections here -->
      <div class="cal-list">
        <p class="plan">
          {{ toCapitalize(mainStore.formVal.plan) }}
          ({{ toCapitalize(mainStore.formVal.billed) }})
        </p>
        <router-link class="change-plan" :to="{ name: 'step 2' }">
          Change
        </router-link>
        <p class="price-plan">
          {{
            mainStore["price-name"][mainStore.formVal.billed][
              mainStore.formVal.plan
            ]
          }}
        </p>
        <hr />
        <div class="add-on" v-for="addOn in mainStore.formVal['add-ons']">
          <p>
            {{ toCapitalize(addOn.split("-")[0]) + " " + addOn.split("-")[1] }}
          </p>
          <p class="price">
            {{ mainStore["price-name"][mainStore.formVal.billed][addOn] }}
          </p>
        </div>
      </div>
      <div class="total">
        <p>Total (per {{ mainStore.formVal.billed.slice(0, -2) }})</p>
        <p class="total-price">
          ${{ totalPrice }}/{{
            mainStore.formVal.billed === "monthly" ? "mo" : "yr"
          }}
        </p>
      </div>
    </template>
    <template v-slot:desktop-btn-container>
      <button type="button" class="desktop-btn go-back" @click="backToStep3">
        go back
      </button>
      <button type="submit" class="desktop-btn next-step">next step</button>
    </template>
    <template v-slot:functional-buttons>
      <button type="submit" class="next-step">next step</button>
      <button type="button" class="go-back" @click="backToStep3">
        go back
      </button>
    </template>
  </Card>
  <!-- Step 4 end -->
</template>

<script setup>
import Card from "./Card/Card.vue";
import { useMainStore } from "../store/MainStore/MainStore";
import { useRouter } from "vue-router";
import { toCapitalize } from "../utils/to-capitalize";
import { computed } from "vue";

const mainStore = useMainStore();
const router = useRouter();

const backToStep3 = () => {
  router.push("/3");
};

const calTotal = (price, addOns, planPrice) => {
  let totalPrice = planPrice;
  for (let addOn of addOns) {
    totalPrice += price[addOn];
  }
  return totalPrice;
};

const totalPrice = computed(() => {
  return calTotal(
    mainStore.price[mainStore.formVal.billed],
    mainStore.formVal["add-ons"],
    mainStore.price[mainStore.formVal.billed][mainStore.formVal.plan]
  );
});
</script>

<style scoped>
.cal-list {
  @apply grid grid-cols-[1fr_min-content] grid-rows-[min-content_min-content_min-content_min-content_min-content] bg-light-gray/[0.2] p-4 rounded-md mb-8;
}

.plan {
  @apply font-bold col-start-1 col-span-1 row-start-1 row-span-1 text-marine-blue;
}

.change-plan {
  @apply col-start-1 col-span-1 row-start-2 row-span-1 underline decoration-2;
}

.price-plan {
  @apply font-bold col-start-2 col-span-1 row-start-1 row-span-2 text-marine-blue justify-self-center self-center;
}

hr {
  @apply row-start-3 row-span-1 col-start-1 col-span-2 self-center border-light-gray my-4;
}

.add-on {
  @apply col-span-2 col-start-1 flex justify-between mb-4;
}

.price {
  @apply text-marine-blue;
}

.total {
  @apply flex justify-between items-center px-4;
}

.total-price {
  @apply text-purplish-blue font-bold text-xl;
}

.next-step {
  @apply bg-marine-blue px-4 py-3 rounded-md capitalize text-white;
}
.go-back {
  @apply capitalize;
}
.go-back:focus {
  text-shadow: 1px 1px 0.1em currentColor;
}

.desktop-btn-container {
  @apply flex-1 flex justify-center items-end;
}

.desktop-btn {
  @apply hidden lg:block me-0 ms-auto mb-0;
}

.desktop-btn.go-back {
  @apply pb-3 ms-0;
}
</style>
