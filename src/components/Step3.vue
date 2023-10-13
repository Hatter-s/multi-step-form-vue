<template>
  <!-- Step 3 start -->
  <Card>
    <template v-slot:title> Pick add-ons </template>
    <template v-slot:description
      >Add-ons help enhance your gaming experience.</template
    >
    <template v-slot:content>
      <div class="form-control">
        <InputStep3
          id="online-service"
          title="Online service"
          description="Access to multiplayer games"
          :price="
            mainStore['price-name'][mainStore.formVal.billed]['online-service']
          "
        />
        <InputStep3
          id="larger-storage"
          title="Larger storage"
          description="Extra 1TB of cloud save"
          :price="
            mainStore['price-name'][mainStore.formVal.billed]['larger-storage']
          "
        />
        <InputStep3
          id="customizable-profile"
          title="Customizable Profile"
          description="Custom theme on your profile"
          :price="
            mainStore['price-name'][mainStore.formVal.billed][
              'customizable-profile'
            ]
          "
        />
      </div>
    </template>
    <template v-slot:desktop-btn-container>
      <button type="button" class="desktop-btn go-back" @click="backToStep2">
        go back
      </button>
      <button type="button" class="desktop-btn next-step" @click="goToStep4">
        next step
      </button>
    </template>
    <template v-slot:functional-buttons>
      <button type="button" class="next-step" @click="goToStep4">
        next step
      </button>
      <button type="button" class="go-back" @click="backToStep2">
        go back
      </button>
    </template>
  </Card>
  <!-- Step 3 end -->
</template>

<script setup>
import Card from "./Card/Card.vue";
import InputStep3 from "./InputStep3/InputStep3.vue";
import { useMainStore } from "../store/MainStore/MainStore";
import { useRouter } from "vue-router";

const mainStore = useMainStore();
const router = useRouter();

const backToStep2 = () => {
  router.push("/2");
};

const goToStep4 = () => {
  router.push("/4");
};
</script>

<style scoped>
.form-control {
  @apply flex flex-col gap-y-4;
}

.next-step {
  @apply bg-marine-blue px-4 py-3 rounded-md capitalize text-white;
}
.go-back {
  @apply capitalize hover:text-marine-blue;
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
