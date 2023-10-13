<template>
  <div class="sidebar-mobile">
    <router-link class="sidebar-link" :to="{ name: 'step 1' }">1</router-link>
    <router-link class="sidebar-link" :to="{ name: 'step 2' }">2</router-link>
    <router-link class="sidebar-link" :to="{ name: 'step 3' }">3</router-link>
    <router-link class="sidebar-link" :to="{ name: 'step 4' }">4</router-link>
  </div>
</template>

<script setup>

</script>

<style scoped>
.sidebar-mobile {
  @apply flex flex-row flex-nowrap justify-center items-start gap-4 bg-[url('../../assets/images/bg-sidebar-mobile.svg')] h-[172px] absolute top-0 left-0 right-0 -z-10 bg-cover lg:hidden;
}

.sidebar-mobile .sidebar-link {
  @apply bg-[transparent] text-light-gray w-8 h-8 text-center rounded-full border flex justify-center items-center font-medium mt-10 outline-none focus-visible:shadow-[0_0_0.4em] focus-visible:shadow-white;
}

.sidebar-mobile .sidebar-link.router-link-active {
  @apply bg-pastel-blue text-marine-blue border-0;
}
</style>
