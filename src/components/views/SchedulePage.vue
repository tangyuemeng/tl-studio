<template>
    <Header />
    <div class="md:text-8xl font-bold text-center px-4 pt-10 text-5xl mt-[4.5rem]">SCHEDULE</div>
    <div class="md:text-3xl font-bold text-center px-4 pb-10 text-xl mt-4">{{ t('schedule') }}</div>

    <div class="flex flex-col w-full md:flex-row mb-4 px-1">
        <vue-cal class="md:w-1/2" date-picker v-bind="config"
            @cell-click="onDateClick"></vue-cal>

        <div class="flex flex-col md:w-1/2">
            <div class="px-6 py-4 font-bold text-black bg-white justify-between flex text-2xl">
                <div>
                    <span>{{ currentDate.getDate() }}</span>
                    <span v-if="isToday"> - Today</span>
                </div>
                <div class="ml-auto">
                    <span>{{ weekdayName }}</span>
                </div>
            </div>

            <div v-for="(item, index) in classes" :key="index"
                class="px-4 pt-4 shadow-md border-b-1 font-bold text-white justify-between flex border-l-1 border-r-1">
                <div>
                    <p class="text-sm">{{ item.startTime }} - {{ item.endTime }}</p>
                    <h3 class="text-3xl mb-7">{{ item.name }}</h3>
                    <p class="text-sm flex items-center before:content-[''] before:w-3 before:h-3 before:rounded-full before:mr-2"
                        :class="{
                            'before:bg-sky-400': item.difficulty?.name === '超入门',
                            'before:bg-green-400': item.difficulty?.name === '初级',
                            'before:bg-orange-400': item.difficulty?.name === '中级'
                        }">
                        {{ item.difficulty?.name || '' }}
                    </p>
                </div>

                <div class="flex flex-col items-center justify-center">
                    <img v-if="item.instructor?.imgUrl" :src="item.instructor.imgUrl" alt="Instructor"
                        class="w-20 h-20 rounded-full mb-2 object-cover shadow-md">
                    <p class="text-sm mb-2">{{ item.instructor.name }}</p>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue';
import { ref, onMounted, computed } from 'vue'
import { VueCal } from 'vue-cal'
import 'vue-cal/style'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const config = ref({
    theme: false
})
config.value['title-bar'] = true
config.value['views-bar'] = false
config.value['hide-weekdays'] = ['mon', 'sun']
config.value['today-button'] = false

const classes = ref([]);
const currentDate = ref(new Date());
const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekdayName = computed(() => weekdayNames[currentDate.value.getDay()]);
const isToday = computed(() => {
  const today = new Date();
  return today.toDateString() === currentDate.value.toDateString();
});

const fetchClasses = async (weekday) => {
    const apiUrl = "https://getclasses-yb6lhgvh4q-an.a.run.app/";

    try {
        const response = await fetch(`${apiUrl}?weekday=${weekday}`);
        if (!response.ok) throw new Error("API Fetch Error");

        const data = await response.json();
        classes.value = data;
    } catch (error) {
        console.error("获取课程失败:", error);
        classes.value = [];
    }
};

onMounted(() => {
    let today = currentDate.value.getDay();
    fetchClasses(today);
});

const onDateClick = async (date) => {
    const startDate = new Date(date.cell.start);
    currentDate.value = startDate
    let weekday = currentDate.value.getDay();

    await fetchClasses(weekday);
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
    @apply  py-4 flex justify-center font-bold text-xl
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
