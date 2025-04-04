<template>
    <div class="bg-white text-black">
        <Header />
        <div class="md:text-8xl font-bold text-center px-4 pt-10 text-5xl mt-[4.5rem]">FAQ</div>
        <div class="md:text-3xl font-bold text-center px-4 pb-10 text-xl mt-4">{{ t('faq') }}</div>

        <div class="flex flex-col w-full md:flex-row w-full border-t-1">
            <ul class="grid grid-cols-1 md:grid-cols-2 w-full">
                <li class="py-2 w-full border-b-1 px-2 md:border-r-1">
                    <button class="text-base font-bold flex justify-between w-full text-start"
                        @click="toggleButton(1)">{{ t('faqList.question1') }}
                        <img src="/plus.svg" class="h-[24px] w-[24px] transition-transform duration-300"
                            :class="{ 'rotate-45': activeIndex === 1 }" alt="Menu Icon" />
                    </button>
                    <div class="text-sm mt-2" v-if="activeIndex === 1">
                        <p>
                            {{ t('faqList.answer1-1') }}
                            <br>{{ t('faqList.answer1-2') }}
                        </p>
                    </div>
                </li>

                <li class="py-2 w-full border-b-1 px-2">
                    <button class="text-base font-bold flex justify-between w-full text-start"
                        @click="toggleButton(2)">{{ t('faqList.question2') }}
                        <img src="/plus.svg" class="h-[24px] w-[24px] transition-transform duration-300"
                            :class="{ 'rotate-45': activeIndex === 2 }" alt="Menu Icon" />
                    </button>
                    <div class="text-sm mt-2" v-if="activeIndex === 2">
                        <p>
                            {{ t('faqList.answer2-1') }}
                            <br>{{ t('faqList.answer2-2') }}
                            <br>{{ t('faqList.answer2-3') }}
                        </p>
                    </div>
                </li>

                <li class="py-2 w-full border-b-1 px-2 md:border-r-1">
                    <button class="text-base font-bold flex justify-between w-full text-start"
                        @click="toggleButton(3)">{{ t('faqList.question3') }}
                        <img src="/plus.svg" class="h-[24px] w-[24px] transition-transform duration-300"
                            :class="{ 'rotate-45': activeIndex === 3 }" alt="Menu Icon" />
                    </button>
                    <div class="text-sm mt-2" v-if="activeIndex === 3">
                        <p>
                            {{ t('faqList.answer3-1') }}
                            <br>
                            <br><router-link to="/class" class="rounded-full border bg-black text-white px-4 py-2">{{
                                t('viewMore') }}</router-link>
                            <br>
                            <br>{{ t('faqList.answer3-2') }}
                        </p>
                    </div>
                </li>

                <li class="py-2 w-full border-b-1 px-2">
                    <button class="text-base font-bold flex justify-between w-full text-start"
                        @click="toggleButton(4)">{{ t('faqList.question4') }}
                        <img src="/plus.svg" class="h-[24px] w-[24px] transition-transform duration-300"
                            :class="{ 'rotate-45': activeIndex === 4 }" alt="Menu Icon" />
                    </button>
                    <div class="text-sm mt-2" v-if="activeIndex === 4">
                        <p>
                            {{ t('faqList.answer4-1') }}
                            <br>{{ t('faqList.answer4-2') }}
                            <br>{{ t('faqList.answer4-3') }}
                        </p>
                    </div>
                </li>

                <li class="py-2 w-full border-b-1 px-2 md:border-r-1 md:border-b-0">
                    <button class="text-base font-bold flex justify-between w-full text-start"
                        @click="toggleButton(5)">{{ t('faqList.question5') }}
                        <img src="/plus.svg" class="h-[24px] w-[24px] transition-transform duration-300"
                            :class="{ 'rotate-45': activeIndex === 5 }" alt="Menu Icon" />
                    </button>
                    <div class="text-sm mt-2" v-if="activeIndex === 5">
                        <p>
                            {{ t('faqList.answer5-1') }}
                            <br>{{ t('faqList.answer5-2') }}
                            <br>{{ t('faqList.answer5-3') }}
                            <br>{{ t('faqList.answer5-4') }}
                            <br>
                            <br>{{ t('faqList.answer5-5') }}
                            <br>{{ t('faqList.answer5-6') }}
                        </p>
                    </div>
                </li>

                <li class="py-2 w-full px-2">
                    <button class="text-base font-bold flex justify-between w-full text-start"
                        @click="toggleButton(6)">{{ t('faqList.question6') }}
                        <img src="/plus.svg" class="h-[24px] w-[24px] transition-transform duration-300"
                            :class="{ 'rotate-45': activeIndex === 6 }" alt="Menu Icon" />
                    </button>
                    <div class="text-sm mt-2" v-if="activeIndex === 6">
                        <p>
                            {{ t('faqList.answer6-1') }}
                            <br>{{ t('faqList.answer6-2') }}
                        </p>
                    </div>
                </li>

            </ul>
        </div>

        <Footer />
    </div>
</template>

<script setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue';
import { useI18n } from 'vue-i18n'
import { ref } from 'vue';

const { t } = useI18n()
const activeIndex = ref(null);
const toggleButton = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};
</script>