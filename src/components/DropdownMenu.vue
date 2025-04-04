<template>
    <div class="absolute top-[3.6rem] left-0 right-0 backdrop-blur-lg bg-opacity-30 z-20 w-screeen">
        <div class="w-full flex flex-col px-4">
            <button class="ml-auto py-2 font-bold" @click="changeLanguage"> {{ currentLanguage }}</button>
        </div>

        <ul class="flex flex-col text-lg font-bold border-t-1 border-white">
            <li class="py-1 px-4">
                <router-link to="/aboutus">About</router-link>
            </li>
            <li class="py-1 px-4">
                <router-link to="/schedule">Schedule</router-link>
            </li>
            <li class="py-1 px-4">
                <router-link to="/class">Class</router-link>
            </li>
            <li class="py-1 px-4">
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>

        <ul class="flex flex-col text-base font-bold mt-20">
            <li class="py-1 px-4">
                <router-link to="/faq"> {{ t('faq') }}</router-link>
            </li>
            <li class="py-1 px-4">
                <router-link to="/contact"> {{ t('contactUs') }}</router-link>
            </li>
        </ul>

        <div
            class="w-full flex gap-5 px-4 mt-4 py-4 border-b-1 border-white">
            <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=&scene=124#wechat_redirect">
                <Wechat class="w-[36px] h-[36px] rounded-full bg-white text-black p-2"  />
            </a>
            <a
                href="https://www.xiaohongshu.com/user/profile/5f7adb02000000000101ec51?xsec_token=ABD4E5cN-kL9hPyff3AgWRBQiu4_DXjBrSMns8vBz36Kw">
                <Red class="w-[36px] h-[36px] rounded-full bg-white text-black p-2"  />
            </a>
            <a
                href="https://www.douyin.com/user/MS4wLjABAAAA25GDBxF5NyXemqljgGHkGBfwF9dTyj-W_01MQEMFvYIdlVPuQmAoeZPpTYxhqvJ5">
                <Tiktok class="w-[36px] h-[36px] rounded-full bg-white text-black p-2"  />
            </a>
        </div>
    </div>
</template>

<script setup>
import Red from './icons/Red.vue';
import Wechat from './icons/wechat.vue';
import Tiktok from './icons/tiktok.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { locale, t } = useI18n();

const changeLanguage = () => {
  const newLang = locale.value === 'zh' ? 'ja' : 'zh'; 
  locale.value = newLang;
};

const currentLanguage = computed(() => {
  return locale.value === 'zh' ? '中文' : '日本語'; 
});
</script>