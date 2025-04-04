<template>
    <div class="flex w-full flex-col md:flex-row">
        <button
            class="text-lg text-center md:w-1/2 w-full border-t-2 md:border-b-2 md:border-r-1 relative flex flex-col items-center justify-center font-bold py-20">
            <router-link to="/faq">
                {{ t('faq') }}
                <p class="text-5xl mt-2">FAQ</p>
            </router-link>
        </button>


        <button
            class="text-xl text-center md:w-1/2 w-full border-t-2 border-b-2 md:border-l-1 relative flex flex-col items-center justify-center font-bold py-20">
            <router-link to="/contact">
                {{ t('contactUs') }}
                <p class="text-5xl mt-2">CONTACT US</p>
            </router-link>
        </button>
    </div>

    <div class="flex flex-col w-full bg-white items-center justify-center">
        <h2 class="text-black mt-32 text-6xl font-bold text-center my-4">More than a dance studio</h2>
        <p class="text-black text-xl text-center mb-2">{{ t('homeTitle') }}</p>
        <p class="text-black text-xl text-center  mb-[50px]">{{ t('homeSubTitle') }}</p>
        <router-link to="/contact">
            <button
                class="text-white bg-black text-base font-bold px-4 py-2 rounded-full mb-[50px] hover:bg-white hover:text-black border-black border-1">
                {{ t('contactUs') }}
            </button>
        </router-link>
    </div>

    <div class="w-full border-t border-black bg-white text-black text-sm px-[50px] py-8">
        <div class="mx-auto flex flex-col gap-6">
            <div class="flex flex-col items-start md:flex-row md:gap-[70px] text-center md:text-left text-gray-700">
                <b class="text-[14px] text-black mb-4 md:mb-0 max-md:mx-auto">BUZZ Group Inc.</b>
                <div class="md:w-[500px] w-full flex flex-col items-start gap-1 text-[#909090] mb-4">
                    <p class="max-md:mx-auto">Address : 東京都港区赤坂2-13-20 ツムギビル</p>
                    <p class="max-md:mx-auto">Phone : 03-6300-4004</p>
                    <p class="max-md:mx-auto">E-mail : info@buzz-st.com</p>
                </div>

                <b class="text-[14px] text-black mb-4 md:mb-0 max-md:mx-auto">TL Studio Inc.</b>
                <div class="md:w-[500px] w-full flex flex-col items-start gap-1 text-[#909090]">
                    <p class="max-md:mx-auto">Address : 東京都新宿区北新宿1-1-20 プリオール三信ビルB1</p>
                    <p class="max-md:mx-auto">Phone : 070-3179-0613</p>
                    <p class="max-md:mx-auto">E-mail : info@tl-entertainment.co</p>
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-between items-center gap-7 md:gap-4 md:mt-[40px]">
                <div class="flex flex-col md:flex-row items-center gap-4"><span>ⓒ 2019 BUZZ TL Inc. All Rights
                        Reserved.</span>
                    <div class="flex gap-4"><a class="hover:underline" href="/terms-of-service">Terms of Use</a><a
                            class="hover:underline" href="/privacy-policy">Privacy Policy</a></div>
                </div>
                <div
                    class="w-full font-bold text-lg md:w-1/2 flex md:flex-row md:gap-4 gap-6 items-center text-center justify-center">
                    <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=&scene=124#wechat_redirect">
                        <Wechat class="w-[36px] h-[36px] rounded-full bg-black text-white p-2" />
                    </a>
                    <a
                        href="https://www.xiaohongshu.com/user/profile/5f7adb02000000000101ec51?xsec_token=ABD4E5cN-kL9hPyff3AgWRBQiu4_DXjBrSMns8vBz36Kw">
                        <Red class="w-[36px] h-[36px] rounded-full bg-black text-white p-2" />
                    </a>
                    <a
                        href="https://www.douyin.com/user/MS4wLjABAAAA25GDBxF5NyXemqljgGHkGBfwF9dTyj-W_01MQEMFvYIdlVPuQmAoeZPpTYxhqvJ5">
                        <Tiktok class="w-[36px] h-[36px] rounded-full bg-black text-white p-2" />
                    </a>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import Red from '../assets/red.vue';
import Wechat from '../assets/wechat.vue';
import Tiktok from '../assets/tiktok.vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>