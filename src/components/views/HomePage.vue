<template>
  <Header />
  <div class="w-screen h-screen">
    <video ref="backgroundVideo" autoplay loop muted playsinline class="absolute top-0 left-0 w-screen h-screen object-cover">
      <!-- <source src="../../assets/background.mp4" type="video/mp4" /> -->
      <!-- <source type="video/mp4" /> -->
    </video>
  </div>

  <div class="flex flex-col w-full font-bold items-center justify-center -mt-20">
    <div class="text-4xl text-center flex flex-col items-center justify-center font-bold absolute">WE CREATE
      <b class="text-7xl">COMMUNITY</b>
      <button class="text-xl border-b-1 flex hover:bg-white hover:text-black px-2 py-2 mt-8">View More
        <img class="ml-20" src="../../assets/arrow-right.svg" />
      </button>
    </div>
    <div class="h-[500px] overflow-hidden -z-10 items-center justify-center flex">
      <Spline class="" :scene="sceneUrl" />
    </div>
  </div>

  <div class="flex w-full flex-col md:flex-row">
    <div
      class="w-full md:w-1/2 aspect-square border-t-2 md:border-r-1 bg-[url('/instructor_bg.png')] bg-cover flex items-center justify-center">
      <div class="text-6xl text-center flex flex-col items-center justify-center font-bold gap-y-8">
        Instructor
        <button class="text-xl border-b-1 flex hover:bg-white hover:text-black px-2 py-2">View More
          <img class="ml-20" src="../../assets/arrow-right.svg" />
        </button>
      </div>
    </div>

    <div
      class="w-full md:w-1/2 aspect-square border-t-2 md:border-l-1 bg-[url('/schedule_bg.png')] bg-cover flex items-center justify-center">
      <div class="text-6xl text-center flex flex-col items-center justify-center font-bold gap-y-8">
        Schedule
        <button class="text-xl border-b-1 flex hover:bg-white hover:text-black px-2 py-2">View More
          <img class="ml-20" src="../../assets/arrow-right.svg" />
        </button>
      </div>
    </div>
  </div>

  <Footer />

</template>

<script setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue';
import Spline from 'spline-vue/v3';
import { onMounted, ref } from 'vue';
const backgroundVideo = ref(null);
const sceneUrl = ref("https://prod.spline.design/ZqObrI6U3umgOcD1/scene.splinecode");

onMounted(async () => {
    const response = await fetch('/background.mp4'); 
    const blob = await response.blob();
    backgroundVideo.value.src =  URL.createObjectURL(blob);
});
</script>
