<template>
    <Header />
    <div class="md:text-8xl font-bold text-center px-4 pt-10 text-5xl mt-[4.5rem]">CLASS LINEUP</div>
    <div class="md:text-3xl font-bold text-center px-4 pb-10 text-xl mt-4">{{ t('classType') }}</div>
    <div
        class="flex flex-col w-full md:flex-row pl-4 md:mx-0 md:items-center md:justify-center md:gap-10 mb-20">
        <div class="flex flex-col relative">
            <div class="absolute bg-sky-400 w-[10px] h-[10px] rounded-full -left-[6px] top-[10px]"></div>
            <div class="absolute bg-gray-300/30 w-[2px] h-full -left-[2px] top-[15px] -z-10 md:hidden"></div>
            <b class="font-bold text-xl mb-[4px] ml-4">超入门</b>
            <div class="ml-4 text-sm">{{ t('beginnerTitle') }}</div>
            <img class="w-[272px] h-[172px] bg-white object-cover mt-[30px] ml-auto mr-[30px] mb-4"
                src="https://firebasestorage.googleapis.com/v0/b/tl-studio-2a05d.firebasestorage.app/o/web_images%2Fclasses%2F1.png?alt=media&token=5729e7cf-9893-4376-ab40-83ab3a1f0d12">
        </div>

        <div class="flex flex-col relative">
            <div class="absolute bg-green-400 w-[10px] h-[10px] rounded-full -left-[6px] top-[10px]"></div>
            <div class="absolute bg-gray-300/30 w-[2px] h-full -left-[2px] top-[15px] -z-10 md:hidden"></div>
            <b class="font-bold text-xl mb-[4px] ml-4">初级</b>
            <div class="ml-4 text-sm">{{ t('basicTitle') }}</div>
            <img class="w-[272px] h-[172px] bg-white object-cover mt-[30px] ml-auto mr-[30px] mb-4"
            src="https://firebasestorage.googleapis.com/v0/b/tl-studio-2a05d.firebasestorage.app/o/web_images%2Fclasses%2F3.png?alt=media&token=69fa73d5-1495-49ab-bbf4-4aea5e0427ae">
        </div>

        <div class="flex flex-col relative">
            <div class="absolute bg-orange-400 w-[10px] h-[10px] rounded-full -left-[6px] top-[10px]"></div>
            <div class="absolute bg-gray-300/30 w-[2px] h-full -left-[2px] top-[15px] -z-10 md:hidden"></div>
            <b class="font-bold text-xl mb-[4px] ml-4">中级</b>
            <div class="ml-4 text-sm">{{ t('intermediateTitle') }}</div>
            <img class="w-[272px] h-[172px] bg-white object-cover mt-[30px] ml-auto mr-[30px] mb-4"
            src="https://firebasestorage.googleapis.com/v0/b/tl-studio-2a05d.firebasestorage.app/o/web_images%2Fclasses%2F2.png?alt=media&token=dbb7d5c3-d35c-4288-ac05-7e9f274276fc">
        </div>

        <div class="flex flex-col relative">
            <div class="absolute bg-indigo-400 w-[10px] h-[10px] rounded-full -left-[6px] top-[10px]"></div>
            <div class="absolute bg-gray-300/30 w-[2px] h-full -left-[2px] top-[15px] -z-10 md:hidden"></div>
            <b class="font-bold text-xl mb-[4px] ml-4">Pop Up</b>
            <div class="ml-4 text-sm">{{ t('popupTitle') }}</div>
            <img class="w-[272px] h-[172px] bg-white object-cover mt-[30px] ml-auto mr-[30px] mb-4" 
            src="https://firebasestorage.googleapis.com/v0/b/tl-studio-2a05d.firebasestorage.app/o/web_images%2Fclasses%2F4.png?alt=media&token=29c173ca-6438-419c-943a-10f6bff2bd22">
        </div>

    </div>

    <Footer />
</template>

<script setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>