<template>
  <Header />
  <div class="w-screen h-screen">
    <video autoplay loop muted playsinline class="absolute top-0 left-0 w-screen h-screen object-cover">
      <source src="../../assets/background.mp4" type="video/mp4" />
    </video>
  </div>

  <div class="flex flex-col w-screen text-3xl font-sans font-bold p-4 items-center justify-center">
    <p class="w-full text-center">WE DON'T NEED</p>
    <p class="w-full text-center">WE DON'T NEED</p>
    <p class="w-full text-center">WE DON'T NEED</p>
  </div>

  <div class="flex w-screen h-auto">
    <div class="w-1/2 aspect-square border-t-2 border-r-1 relative">
      <img class="w-full h-auto object-cover -z-10 absolute opacity-50" src="../../assets/instructor_bg.png" />
      <div class="text-6xl text-center h-full w-full flex flex-col items-center justify-center font-bold">
        Instructor
        <button class="mt-30 text-xl p-2 border-b-1 flex hover:bg-white hover:text-black">View More
          <img class="h-full w-auto ml-20" src="../../assets/arrow-right.svg" />
        </button>
      </div>
    </div>

    <div class="w-1/2 aspect-square border-t-2 border-l-1 relative">
      <img class="w-full h-auto object-cover -z-10 absolute opacity-50" src="../../assets/schedule_bg.png" />
      <div class="text-6xl text-center h-full w-full flex flex-col items-center justify-center font-bold">
        Schedule
        <button class="mt-30 text-xl p-2 border-b-1 flex hover:bg-white hover:text-black">View More
          <img class="h-full w-auto ml-20" src="../../assets/arrow-right.svg" />
        </button>
      </div>
    </div>
  </div>

  <Footer />

</template>

<script setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue';
</script>
