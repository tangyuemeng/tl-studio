<template>
    <div class="bg-white text-black">
        <Header />
        <div class="md:text-8xl font-bold text-center px-4 pt-10 text-5xl mt-[4.5rem]">Terms of Use</div>
        <div class="md:text-3xl font-bold text-center px-4 pb-10 text-xl mt-4">{{ t('TermsOUse') }}</div>

        <div class="w-full px-4 py-2 text-base font-bold leading-relaxed space-y-4">
            <p>この利用規約（以下、「本規約」といいます。）は、BUZZ
                TLダンススタジオ（以下、「当スタジオ」といいます。）が提供するすべてのサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。本サービスをご利用いただく全ての方（以下、「利用者」といいます。）は、本規約に同意したものとみなされます。
            </p>

            <h2 class="text-lg font-bold mt-6">1. サービス内容</h2>
            <p>当スタジオは、ダンスレッスン、イベント、関連する情報の提供、予約サービスなどを提供します。サービス内容は予告なく変更される場合があります。</p>

            <h2 class="text-lg font-bold mt-6">2. 予約とキャンセル</h2>
            <ul class="list-disc list-inside">
                <li>レッスンの予約は、当スタジオ指定の方法により行うものとします。</li>
                <li>予約のキャンセルは、原則としてレッスン開始24時間前までにご連絡ください。</li>
                <li>無断キャンセルや直前のキャンセルが繰り返される場合、今後の予約を制限させていただく場合があります。</li>
            </ul>

            <h2 class="text-lg font-bold mt-6">3. 禁止事項</h2>
            <p>利用者は、以下の行為を行ってはなりません：</p>
            <ul class="list-disc list-inside">
                <li>他の利用者、講師、または第三者に対する迷惑行為や差別的発言</li>
                <li>許可なく施設や機材の損壊行為</li>
                <li>無断での録音、録画、写真撮影およびSNS等への投稿</li>
                <li>その他、当スタジオが不適切と判断する行為</li>
            </ul>

            <h2 class="text-lg font-bold mt-6">4. 著作権について</h2>
            <p>レッスンで使用される音楽、振付、動画、資料などすべての著作物の権利は、当スタジオまたは講師に帰属します。これらを無断で複製・転用・配布することを禁止します。</p>

            <h2 class="text-lg font-bold mt-6">5. 免責事項</h2>
            <p>利用者が本サービスを利用することで発生した損害について、当スタジオは一切の責任を負いません。自己責任のもとご参加ください。</p>

            <h2 class="text-lg font-bold mt-6">6. 規約の変更</h2>
            <p>当スタジオは、本規約を随時変更できるものとします。変更後の利用規約は、当ウェブサイト上に掲載された時点で効力を有するものとします。</p>

            <h2 class="text-lg font-bold mt-6">7. 準拠法・管轄</h2>
            <p>本規約は日本法に準拠し、当スタジオと利用者間で生じた紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p>

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