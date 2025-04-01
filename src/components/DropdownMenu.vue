<template>
    <div class="absolute top-[3.6rem] left-0 right-0 backdrop-blur-lg bg-opacity-30  shadow-lg z-10 w-screeen">
        <ul class="flex flex-col text-lg font-bold">
            <li class="py-2 px-4">
                <router-link to="/about">About</router-link>
            </li>
            <li class="py-2 px-4">
                <router-link to="/schedule">Schedule</router-link>
            </li>
            <li class="py-2 px-4">
                <router-link to="/class">Class</router-link>
            </li>
            <li class="py-2 px-4">
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </div>
</template>