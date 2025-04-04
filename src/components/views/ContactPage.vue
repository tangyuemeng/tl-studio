<template>
    <div class="bg-white text-black">
        <Header />
        <div class="md:text-8xl font-bold text-center px-4 pt-10 text-5xl mt-[4.5rem]">CONTACT US</div>
        <div class="md:text-3xl font-bold text-center px-4 pb-10 text-xl mt-4">{{ t('contactUs') }}</div>
        <iframe class="w-full h-[50vh] border-1"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.140306347407!2d139.69463817662543!3d35.698164772581755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188de5ddd73a5d%3A0x31415fb865225e55!2zQlVaWiBUTCDljY7kurroiJ7ouYjlt6XkvZzlrqQ!5e0!3m2!1szh-CN!2sjp!4v1743578384088!5m2!1szh-CN!2sjp"
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div class="w-full py-6 px-2 items-center flex flex-col md:flex-row border-l-1 border-r-1 border-b-1">
            <div
                class="w-full font-bold text-lg md:w-1/2 flex md:flex-col gap-6 items-center text-center justify-center">
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

            <div class="w-full font-bold text-3xl items-center justify-center md:w-1/2">
                <img src="/qr.svg" class="w-full md:w-1/4 h-auto mx-auto">
            </div>
        </div>

        <div class="w-full py-4 px-2 items-center flex flex-col md:flex-row border-l-1 border-r-1">
            <div class="w-full font-bold text-3xl items-center text-center justify-center md:w-1/2 mt-4">{{
                t('questions') }}</div>
            <div class="w-full md:w-1/2">
                <form class="py-4 px-2 items-center justify-center flex flex-col my-8"
                    action="https://formspree.io/f/xblgzley" method="POST">
                    <!-- Name -->
                    <div class="mb-4 w-full">
                        <input type="text" name="name" required placeholder="Name"
                            class="w-full p-2 border focus:outline-black" />
                    </div>

                    <!-- Email -->
                    <div class="mb-4 w-full">
                        <input type="email" name="email" required placeholder="Email"
                            class="w-full p-2 border focus:outline-black" />
                    </div>

                    <!-- Message -->
                    <div class="mb-4 w-full">
                        <textarea name="message" required rows="4" placeholder="Content"
                            class="w-full p-2 border focus:outline-black"></textarea>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" class="px-20 py-2 rounded-full bg-black text-white font-bold">
                        Send
                    </button>
                </form>

            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue';
import Red from '../icons/Red.vue'
import Wechat from '../icons/wechat.vue';
import Tiktok from '../icons/tiktok.vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>