<template>
  <header class="bg-transparent text-white p-5 flex justify-between w-screen sticky top-0 z-10" ref="header">
    <img class="h-[30px] md:h-[42px] w-auto ml-2 md:ml-10" src="/logo-white.svg"></img>
    <nav class="mr-30 mt-2 hidden md:flex">
      <ul class="flex text-xl font-sans font-bold">
        <li class="ml-10"><a href="#home">About</a></li>
        <li class="ml-10"><a href="#about">Schedule</a></li>
        <li class="ml-10"><a href="#services">Class</a></li>
        <li class="ml-10"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// import { onMounted, ref } from "vue";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const header = ref(null);

// onMounted(() => {
//   if (!header.value) {
//     console.error("🚨 `h1` 元素未正确加载");
//     return;
//   }

//   gsap.to(header.value, {
//     maxWidth: "100vw",
//     backgroundColor: "rgba(255, 255, 255, 0.09)",
//     ease: "power2.out",
//     scrollTrigger: {
//       scroller: document.documentElement,
//       start: "top top",
//       end: "+=60vh",
//       scrub: 1,
//     },
//   });
// });
</script>

<style scoped></style>