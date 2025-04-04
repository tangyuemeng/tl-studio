<template>
    <div class="absolute top-[3.6rem] left-0 right-0 backdrop-blur-lg z-10 w-screeen bg-white">
        <div class="text-lg font-bold text-center w-full text-black mt-2">
            {{ t('wechat') }}
        </div>
        <img src="/qr.svg" class="w-1/2 h-auto mx-auto">
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>