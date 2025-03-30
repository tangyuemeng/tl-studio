<template>
    <Header />
    <div class="text-8xl font-bold text-center px-4 py-10">SCHEDULE</div>

    <div class="px-4 py-8 flex justify-between items-center hidden sm:block">
        <vue-cal class="w-full h-[500px]" sm :events="events" v-bind="config">
            <template v-slot:event="{ event }">
                <div class="flex flex-col px-2 py-4">
                    <span class="event-title text-5xl text-white">{{ event.title }}</span>
                    <span class="event-time">{{ event.start }}</span>
                </div>
            </template>
        </vue-cal>
    </div>

    <!-- <div class="block md:hidden flex flex-col w-full">
        <vue-cal date-picker class="w-full h-[500px]" :events="events"  v-bind="config"></vue-cal>

    </div> -->

    <Footer />
</template>

<script setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue';
import { ref } from 'vue'
import { VueCal } from 'vue-cal'
import 'vue-cal/style'

const config = ref({
    time: false,
    views: ['day', 'week'],
    theme: false
})
config.value['title-bar'] = false
config.value['views-bar'] = false
config.value['hide-weekdays'] = ['mon', 'sun']

const events = ref([
{
        start: '2025-03-29 11:00:00',
        end: '2025-03-29 12:00:00',
        title: 'Dance Class 2',
        class:"lunch"
    },
])

console.log(events.value);
</script>

<style lang="css">
@reference "../../style.css";
.vuecal__body {
    @apply h-auto
}
.vuecal__weekday {
    @apply px-10 py-4 justify-between flex justify-between border-1 font-bold text-xl
}

.vuecal__cell {
    @apply border-l-1 mt-8 border-r-1 border-b-1
}

.vuecal__event {
    @apply relative 
}
</style>
