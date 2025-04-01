<template>
  <Header />
  <div class="w-screen h-screen">
    <video id="backgroundVideo" autoplay muted loop playsinline
      class="absolute top-0 left-0 w-full h-full object-cover">
      <source src="" type="application/vnd.apple.mpegurl">
    </video>
  </div>

  <div class="flex flex-col w-full font-bold items-center justify-center">
    <div class="md:text-4xl text-3xl text-center flex flex-col items-center justify-center font-bold absolute">WE CREATE
      <b class="md:text-7xl text-5xl">COMMUNITY</b>
      <button class="text-xl border-b-1 flex hover:bg-white hover:text-black px-2 py-2 mt-8">View More
        <img class="ml-20" src="../../assets/arrow-right.svg" />
      </button>
    </div>
    <div class="h-[500px] w-full overflow-hidden -z-10 items-center justify-center flex">
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
import { ref, onMounted } from 'vue';
const sceneUrl = ref("https://prod.spline.design/ZqObrI6U3umgOcD1/scene.splinecode");

import Hls from "hls.js";

onMounted(async () => {
  const video = document.getElementById("backgroundVideo");
  const videoSrc = "https://tldancestudio.com/background.m3u8";

  try {
    // 先尝试 fetch 预加载 .m3u8，确保不会被缓存影响
    const response = await fetch(videoSrc, { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to load .m3u8");

    const text = await response.text();
    const blob = new Blob([text], { type: "application/vnd.apple.mpegurl" });
    const url = URL.createObjectURL(blob);

    // iPhone 直接支持 HLS
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
    }

    video.play().catch(err => console.error("自动播放失败", err));
  } catch (err) {
    console.error("HLS 预加载失败", err);
  }
});
</script>
