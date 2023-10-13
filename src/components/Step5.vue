<template>
  <!-- Step 5 start -->
  <Card :is-final-step="true">
    <template v-slot:title>Thank you!</template>
    <template v-slot:description>
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </template>
  </Card>
  <!-- Step 5 end -->
</template>

<script setup>
import Card from "./Card/Card.vue";
</script>

<style scoped></style>
