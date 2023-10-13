<template>
  <DefaultLayout>
    <SidebarMobile />
    <form class="main-container" @submit="handleForm">
      <SidebarDesktop />
      <RouterView></RouterView>
    </form>
  </DefaultLayout>
</template>

<script setup>
import { onMounted } from "vue";
import DefaultLayout from "../layouts/Default.vue";
import SidebarDesktop from "../components/Sidebar/SidebarDesktop.vue";
import SidebarMobile from "../components/Sidebar/SidebarMobile.vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const handleForm = (event) => {
  event.preventDefault();
  router.push("/5");
};

onMounted(() => {
  if (useRoute().path === '/') {
    useRouter().push('/1');
  }
});
</script>

<style scoped>
.main-container {
  @apply mt-[100px] mx-4 flex flex-col flex-1 justify-between;
  @apply lg:bg-white lg:grid lg:grid-cols-[auto_1fr] lg:grid-rows-1 lg:p-4 lg:rounded-xl lg:gap-20 lg:w-[900px] lg:pe-20 lg:mx-auto lg:h-auto lg:mb-20;
}
</style>
