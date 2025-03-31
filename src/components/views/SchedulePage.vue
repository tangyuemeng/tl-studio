<template>
    <Header />
    <div class="md:text-8xl font-bold text-center px-4 py-10 text-5xl">SCHEDULE</div>

    <div class="flex flex-col w-full mb-4">
        <vue-cal date-picker :events="events" v-model="selectedDate" v-bind="mobileConfig"
            @cell-click="onDateClick"></vue-cal>
    </div>

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

const mobileConfig = ref({
    theme: false
})
mobileConfig.value['title-bar'] = true
mobileConfig.value['views-bar'] = false
mobileConfig.value['hide-weekdays'] = ['mon', 'sun']
mobileConfig.value['today-button'] = false

const events = ref([
    { start: new Date(2025, 3, 1, 0, 0), end: new Date(2025, 3, 1, 23, 59), title: '会议 A' },
    { start: new Date(2025, 3, 2, 0, 0), end: new Date(2025, 3, 2, 23, 59), title: '会议 B' },
    { start: new Date(2025, 3, 2, 0, 0), end: new Date(2025, 3, 2, 23, 59), title: '会议 C' },
]);

// 选中的日期
const selectedDate = ref(null);

// 处理日期点击事件
const onDateClick = (date) => {
    const startDate = new Date(date.cell.start);
    const weekday = startDate.getDay();
    const apiUrl = "https://getclasses-yb6lhgvh4q-uc.a.run.app/";

    fetch(`${apiUrl}?weekday=${weekday}`)
        .then(response => response.json())
        .then(classes => {
            console.log('获取的课程数据:', classes);
        })
        .catch(error => {
            console.error('error:', error);
        });
};
</script>

<style lang="css">
@reference "../../style.css";

.vuecal__body {
    @apply h-auto
}

.vuecal__header {
    @apply mb-4
}

.vuecal__header nav {
    background-color: transparent;
}

.vuecal__headings {
    @apply h-auto
}

.vuecal__nav {
    @apply px-4 py-2
}

.vuecal__title {
    @apply text-3xl font-bold
}

.vuecal__weekday {
    @apply px-10 py-4 flex justify-center font-bold text-xl
}

.vuecal__cell {
    @apply py-4
}

.vuecal__event {
    @apply relative
}

.vuecal__cell--selected {
    @apply after:content-[''] after:absolute after:inset-0 after:m-auto after:w-12 after:h-12 after:rounded-full after:border-[2px] after:border-white
}

.vuecal__cell--today {
    @apply text-black after:content-[''] after:absolute after:inset-0 after:m-auto after:w-12 after:h-12 after:rounded-full after:bg-white after:bg-white after:-z-10
}
</style>
