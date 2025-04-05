<template>
        <Header />
        <div class="w-full flex flex-col mt-[4.5rem] bg-cover bg-center" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/tl-studio-2a05d.firebasestorage.app/o/web_images%2Fbg.png?alt=media&token=a6d01042-6e0a-4b7e-b90e-ad97c0fb881c')">
            <div class="md:text-5xl text-4xl text-center flex flex-col justify-center font-bold py-2 mt-[3rem]">WE CREATE
                <b class="md:text-8xl text-5xl py-2">COMMUNITY</b>
                <div class="flex flex-col md:flex-row px-4 py-2 mt-4 justify-center items-center">
                    <img class="w-full md:w-1/2 h-auto" src="https://firebasestorage.googleapis.com/v0/b/tl-studio-2a05d.firebasestorage.app/o/web_images%2Fbg-2.png?alt=media&token=b39cb55c-ef8e-4729-b6ce-1478bd67291b">
                    <p class="text-base w-full md:w-1/3 md:ml-8 mt-4 text-start">{{ t('studioIntroduction')}}</p>
                </div>
            </div>
        </div>
        <div class="x-4 py-2 bg-white text-center font-bold text-black text-xl">
            <router-link to="/schedule">Check Today Schedule?</router-link>
        </div>

        <Footer />
</template>

<script setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue';
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

onMounted(() => { });
</script>