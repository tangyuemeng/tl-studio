<template>
  <header class="bg-transparent text-white p-5 flex justify-between w-screen sticky top-0 z-10" ref="header">
    <router-link to="/">
      <img class="h-[30px] md:h-[42px] w-auto ml-2 md:ml-10" src="/logo-white.svg" alt="Logo" />
    </router-link>
    <nav class="mr-30 mt-2 hidden md:flex">
      <ul class="flex text-xl font-sans font-bold">
        <li class="ml-10"><router-link to="/home">About</router-link></li>
        <li class="ml-10"><router-link to="/schedule">Schedule</router-link></li>
        <li class="ml-10"><router-link to="/class">Class</router-link></li>
        <li class="ml-10"><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>
