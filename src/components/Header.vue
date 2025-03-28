<template>
    <header class="header" ref="header">
      <div class="header-backgroud"></div>
      <div class="header-container">
        <img class="logo" src="../assets/img/logo.svg"></img>
        <nav class="navigation ">
          <slot name="navigation">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </slot>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  gsap.registerPlugin(ScrollTrigger);
  
  const header = ref(null);
  
  onMounted(() => {
    if (!header.value) {
      console.error("🚨 `h1` 元素未正确加载");
      return;
    }
  
    gsap.to(header.value, {
      maxWidth: "100vw",
      backgroundColor: "rgba(255, 255, 255, 0.09)",
      ease: "power2.out",
      scrollTrigger: {
        scroller: document.documentElement,
        start: "top top",
        end: "+=60vh",
        scrub: 1,
      },
    });
  });
  </script>
  
  <style scoped>
  .header {
    position: sticky;
    z-index: 1000;
    top: 0;
    max-width: 980px;
    margin: 0 auto;
    border-bottom: 1px solid var(--divider-color);
    transition: width 0.3s ease-out;
  }
  
  .header-backgroud {
    backdrop-filter: saturate(180%) blur(20px);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  
  .header-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 0 0.5rem;
    z-index: 2;
    margin: 0 auto;
    max-width: 980px;
  }
  
  .logo {
    width: auto;
    height: 2rem;
    opacity: 0.92;
    padding-top: 10px;
  }
  
  .navigation {
    padding-top: 20px;
  }
  
  .navigation ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .navigation li {
    margin-left: 1.5rem;
    font-size: 0.8rem;
  }
  
  .navigation a {
    text-decoration: none;
    color: var(--text-normal-color);
    line-height: 1;
    font-weight: 400;
  }
  
  .navigation a:hover {
    color: var(--text-active-color);
  }
  </style>