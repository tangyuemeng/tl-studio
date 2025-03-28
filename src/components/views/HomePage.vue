<template>
    <div class="w-screen h-screen">
        <Header />
        <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-screen object-cover">
      <source src="../../assets/background.mp4" type="video/mp4" />
    </video>
    </div>
</template>

<script setup>
import Header from '../Header.vue'

</script>

<style scoped></style>