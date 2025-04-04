<template>
    <div class="bg-white text-black">
        <Header />
        <div class="md:text-8xl font-bold text-center px-4 pt-10 text-5xl mt-[4.5rem]">PRIVACY POLICY</div>
        <div class="md:text-3xl font-bold text-center px-4 pb-10 text-xl mt-4">{{ t('PrivacyPolicy') }}</div>

        <div class="w-full px-4 py-2 text-base font-bold leading-relaxed space-y-4">
            <p>BUZZ TLダンススタジオ（以下「当スタジオ」といいます。）は、利用者の個人情報の保護を重要な責務と認識し、以下のプライバシーポリシーに基づき、適切な取扱いと保護に努めます。</p>

            <h2 class="text-lg font-bold mt-6">1. 個人情報の取得</h2>
            <p>当スタジオは、レッスンの予約、イベント参加、問い合わせ、SNS連携等の際に、氏名、連絡先（電話番号・メールアドレス）、SNSアカウント、撮影データなどの個人情報を取得することがあります。</p>

            <h2 class="text-lg font-bold mt-6">2. 利用目的</h2>
            <p>取得した個人情報は、以下の目的のために利用します：</p>
            <ul class="list-disc list-inside">
                <li>レッスン・イベントの予約、確認、連絡</li>
                <li>スタジオからのお知らせ、スケジュール、キャンペーン等の案内</li>
                <li>お問い合わせ対応</li>
                <li>運営の改善・サービス向上のための統計分析</li>
                <li>許可を得た上でのSNS・広告等での使用（写真・映像など）</li>
            </ul>

            <h2 class="text-lg font-bold mt-6">3. 個人情報の第三者提供</h2>
            <p>当スタジオは、法令に基づく場合を除き、ご本人の同意なく第三者に個人情報を提供することはありません。</p>

            <h2 class="text-lg font-bold mt-6">4. 安全管理</h2>
            <p>当スタジオは、個人情報の漏洩、滅失、毀損を防止するために、適切な安全管理措置を講じます。</p>

            <h2 class="text-lg font-bold mt-6">5. 開示・訂正・削除について</h2>
            <p>利用者は、自己の個人情報について開示・訂正・利用停止・削除等を希望される場合、当スタジオ所定の手続きにより請求することができます。</p>

            <h2 class="text-lg font-bold mt-6">6. プライバシーポリシーの変更</h2>
            <p>当スタジオは、必要に応じて本ポリシーを変更することがあります。変更後の内容は、当ウェブサイトにて公表します。</p>

            <h2 class="text-lg font-bold mt-6">7. お問い合わせ先</h2>
            <p>本ポリシーに関するお問い合わせは、以下の連絡先までお願いいたします：</p>
            <p>公式LINE または 公式WeChat（ID: TL_TOKYO）</p>

            <p class="mt-6">最終更新日：2019年6月20日</p>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Header from '../Header.vue'
import Footer from '../Footer.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>