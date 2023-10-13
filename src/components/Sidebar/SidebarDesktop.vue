<template>
    <!-- Sidebar start -->
    <div class="sidebar-desktop">
        <div class="step">
            <router-link :to="{ name: 'step 1' }">
                <p class="number">1</p>
                <h2 class="title">step 1</h2>
                <p class="subtitle">your info</p>
            </router-link>
        </div>
        <div>
            <router-link :to="{ name: 'step 2' }">
                <p class="number">2</p>
                <h2 class="title">step 2</h2>
                <p class="subtitle">Select plan</p>
            </router-link>
        </div>

        <div>
            <router-link :to="{ name: 'step 3' }">
                <p class="number">3</p>
                <h2 class="title">step 3</h2>
                <p class="subtitle">Add-ons</p>
            </router-link>
        </div>
        <div>
            <router-link :to="{ name: 'step 4' }">
                <p class="number">4</p>
                <h2 class="title">step 4</h2>
                <p class="subtitle">Summary</p>
            </router-link>
        </div>

    </div>
    <!-- Sidebar end -->
</template>

<script setup></script>

<style scoped>
.sidebar-desktop {
    @apply hidden lg:block bg-[url(../../assets/images/bg-sidebar-desktop.svg)] h-[568px] w-[274px] pt-10 ps-10;
}

a {
    @apply grid grid-cols-[auto_1fr] grid-rows-2 gap-x-4 mb-4;
}

a .number {
    @apply col-start-1 col-span-1 row-start-1 row-span-2 self-center bg-[transparent] text-light-gray w-8 h-8 text-center rounded-full border flex justify-center items-center font-medium outline-none focus-visible:shadow-[0_0_0.4em] focus-visible:shadow-white; 
}

a.router-link-active .number {
  @apply bg-pastel-blue text-marine-blue border-0;
}

a .title {
    @apply uppercase;
}

a .subtitle {
    @apply uppercase text-white font-medium;
}
</style>