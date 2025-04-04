<template>
  <header
    class="text-white md:p-4 pl-4 py-2 flex flex-row justify-between items-center w-screen fixed top-0 z-10 backdrop-blur-lg bg-opacity-30"
    ref="header">

    <router-link to="/">
      <img class="h-[30px] md:h-[42px] md:ml-4" src="/logo-white.svg" alt="Logo" />
    </router-link>

    <nav class="mr-8 mt-2 hidden md:flex">
      <ul class="flex text-xl font-sans font-bold">
        <li class="ml-10"><router-link to="/aboutus">About</router-link></li>
        <li class="ml-10"><router-link to="/schedule">Schedule</router-link></li>
        <li class="ml-10"><router-link to="/class">Class</router-link></li>
        <li class="ml-10"><router-link to="/contact">Contact</router-link></li>
        <li class="ml-10" @click="changeLanguage">Language</li>
      </ul>
    </nav>

    <div class="mt-2 md:hidden flex items-center">
      <button class="mr-2 h-[42px] w-[42px]" @click="toggleQR">
        <img class="h-[42px] w-[42px]" src="/qrcode.svg" alt="Qrcode" />
      </button>

      <button class="h-[42px] w-[42px]" @click="toggleMenu">
        <img :src="menuImage" class="h-[30px] w-[30px] transform duration-300 ease-in-out scale-x-[-1]" alt="Menu Icon" />
      </button>
    </div>
    <DropDownQR v-if="isQROpen" class="transition-transform transform duration-300 ease-in-out translate-y-2 opacity-0"
      :class="{ 'translate-y-0 opacity-100': isQROpen }" />
    <DropdownMenu v-if="isMenuOpen"
      class="transition-transform transform duration-1000 ease-in-out translate-y-2 opacity-0"
      :class="{ 'translate-y-0 opacity-100': isMenuOpen }" />
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import DropdownMenu from './DropdownMenu.vue';
import DropDownQR from './DropDownQR.vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();

const changeLanguage = () => {
  const newLang = locale.value === 'zh' ? 'ja' : 'zh'; 
  locale.value = newLang;
};

const isMenuOpen = ref(false);
const isQROpen = ref(false);
const menuImage = ref('/menu.svg');

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  isQROpen.value = false;
  menuImage.value = menuImage.value === '/menu.svg' ? '/x.svg' : '/menu.svg';
};

const toggleQR = () => {
  isMenuOpen.value = false;
  isQROpen.value = !isQROpen.value;
  menuImage.value = '/menu.svg'
};
</script>

<style>
.backdrop-blur-lg {
  backdrop-filter: blur(20px);
}

.bg-opacity-30 {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
