<template>
  <!-- Step 2 start -->
  <Card>
    <template v-slot:title>Select your plan</template>
    <template v-slot:description
      >You have the option of monthy or yearly billing</template
    >
    <template v-slot:content>
      <div class="form-control">
        <InputStep2
          id="arcade"
          input-name="plan"
          value="arcade"
          img-src="../../src/assets/images/icon-arcade.svg"
          title="Arcade"
          :price="mainStore['price-name'][mainStore.formVal.billed]['arcade']"
          :is-checked="true"
        />

        <InputStep2
          id="advanced"
          input-name="plan"
          value="advanced"
          img-src="../../src/assets/images/icon-advanced.svg"
          title="Advanced"
          :price="mainStore['price-name'][mainStore.formVal.billed]['advanced']"
          :is-checked="false"
        />

        <InputStep2
          id="pro"
          input-name="plan"
          value="pro"
          img-src="../../src/assets/images/icon-pro.svg"
          title="Pro"
          :price="mainStore['price-name'][mainStore.formVal.billed]['pro']"
          :is-checked="false"
        />
      </div>

      <label class="billed" for="billed">
        <button
          class="text"
          :class="{ 'text-blue': mainStore.formVal.billed === 'monthly' }"
          type="button"
          @click="mainStore.formVal.billed = 'monthly'"
        >
          monthly
        </button>
        <button type="button" class="toggle" @click="mainStore.toggleBilled">
          <div
            class="ball"
            :class="{ roll: mainStore.formVal.billed === 'yearly' }"
          ></div>
        </button>
        <button
          class="text"
          :class="{ 'text-blue': mainStore.formVal.billed === 'yearly' }"
          type="button"
          @click="mainStore.formVal.billed = 'yearly'"
        >
          yearly
        </button>
      </label>
      <input type="hidden" name="billed" id="billed" />
    </template>
    <template v-slot:desktop-btn-container>
      <button type="button" class="go-back desktop-btn" @click="backToStep1">
        go back
      </button>
      <button type="button" class="next-step desktop-btn" @click="goToStep3">
        next step
      </button>
    </template>
    <template v-slot:functional-buttons>
      <button type="button" class="next-step" @click="goToStep3">
        next step
      </button>
      <button type="button" class="go-back" @click="backToStep1">go back</button>
    </template>
  </Card>
  <!-- Step 2 end -->
</template>

<script setup>
import Card from "./Card/Card.vue";
import { useRouter } from "vue-router";
import InputStep2 from "./InputStep2/InputStep2.vue";
import { useMainStore } from "../store/MainStore/MainStore";

const mainStore = useMainStore();
const router = useRouter();

const backToStep1 = () => {
  router.push("/1");
};

const goToStep3 = () => {
  router.push("/3");
};
</script>

<style scoped>
.form-control {
  @apply flex flex-col lg:flex-row lg:mb-6 gap-x-4;
}

.billed {
  --time-trans: 0.2s;
  @apply flex justify-center gap-6 items-center bg-light-gray/[0.3] rounded-sm py-3;
  .toggle {
    @apply h-6 w-12 bg-marine-blue rounded-xl flex items-center px-1 outline-none focus:shadow-lg;
    .ball {
      transition: var(--time-trans) ease-in;
      @apply h-4 w-4 rounded-full bg-white;
    }

    .roll {
      transition: var(--time-trans) ease-in;
      transform: translateX(24px);
    }
  }

  .text {
    transition: var(--time-trans) ease-in;
    @apply font-medium text-cool-gray outline-none capitalize;
  }

  .text-blue {
    transition: var(--time-trans) ease-in;
    @apply text-marine-blue;
  }
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
