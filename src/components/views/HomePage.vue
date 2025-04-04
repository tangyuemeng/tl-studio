<template>
  <Header />
  <div class="w-screen h-screen">
    <video autoplay muted loop playsinline class="w-full h-full object-cover">
      <source
        src="https://firebasestorage.googleapis.com/v0/b/tl-studio-2a05d.firebasestorage.app/o/background_video%2Foptimized.mp4?alt=media&token=323f7ae0-cd79-437e-b496-a91e3ef3ebce"
        type="video/mp4">
    </video>
  </div>

  <div class="flex flex-col w-full font-bold items-center justify-center">
    <div class="md:text-4xl text-3xl text-center flex flex-col items-center justify-center font-bold absolute">WE CREATE
      <b class="md:text-7xl text-5xl">COMMUNITY</b>
      <router-link to="/aboutus">
        <button class="text-xl border-b-1 flex hover:bg-white hover:text-black px-2 py-2 mt-8">{{ t('viewMore') }}
          <img class="ml-20" src="../../assets/arrow-right.svg" />
        </button>
      </router-link>
    </div>
    <div class="h-[500px] w-full overflow-hidden -z-10 items-center justify-center flex">
      <Spline v-if="sceneUrl"  :scene="sceneUrl" />
    </div>
  </div>

  <div class="flex w-full flex-col md:flex-row">
    <div
      class="w-full md:w-1/2 aspect-square border-t-2 md:border-r-1 bg-[url('/instructor_bg.png')] bg-cover flex items-center justify-center">
      <div class="text-6xl text-center flex flex-col items-center justify-center font-bold">
        <div class="text-xl mb-2 font-bold">{{ t('classType') }}</div>
        Class Type
        <router-link to="/class">
          <button class="text-xl border-b-1 flex hover:bg-white hover:text-black px-2 py-2 md:mt-20 mt-10">{{ t('viewMore') }}
            <img class="ml-20" src="../../assets/arrow-right.svg" />
          </button>
        </router-link>
      </div>
    </div>

    <div
      class="w-full md:w-1/2 aspect-square border-t-2 md:border-l-1 bg-[url('/schedule_bg.png')] bg-cover flex items-center justify-center">
      <div class="text-6xl text-center flex flex-col items-center justify-center font-bold">
        <div class="text-xl mb-2 font-bold">{{ t('schedule') }}</div>
        Schedule
        <router-link to="/schedule">
          <button class="text-xl border-b-1 flex hover:bg-white hover:text-black px-2 py-2 md:mt-20 mt-10">{{ t('viewMore') }}
            <img class="ml-20" src="../../assets/arrow-right.svg" />
          </button>
        </router-link>
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
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const sceneUrl = ref('');
onMounted(() => {
  setTimeout(() => {
    sceneUrl.value = "https://prod.spline.design/umRFvOwLSkmYCQng/scene.splinecode";
  }, 2000);
});
</script>
