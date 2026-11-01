<template>
    <div class="order-page pay-page">
        <BackButton :url="backUrl" />

        <h1 class="order-page__title">Способ оплаты</h1>

        <section v-if="!tariff" class="pay-empty">
            <span class="pay-empty__title">Тариф не выбран</span>
            <span class="pay-empty__text">Выберите страну и тариф в каталоге.</span>
            <NuxtLink class="pay-empty__go" to="/catalog">Выбрать тариф</NuxtLink>
        </section>

        <section class="pay-methods">
            <span class="pay-methods__label">Доступные способы</span>
            <button
                v-for="method in methods"
                :key="method.id"
                type="button"
                class="pay-method"
                :class="{ 'is-selected': methodId === method.id }"
                @click="methodId = method.id"
            >
                <span class="pay-method__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                        <path :d="method.icon" />
                    </svg>
                </span>
                <span class="pay-method__text">
                    <span class="pay-method__name">{{ method.name }}</span>
                    <span class="pay-method__meta">{{ method.meta }}</span>
                </span>
                <span class="pay-method__mark" aria-hidden="true"></span>
            </button>
        </section>

        <div v-if="tariff" class="pay-bar">
            <span class="pay-bar__sum">
                <span class="pay-bar__label">К оплате</span>
                <span class="pay-bar__price">{{ tariff.price }}</span>
            </span>
            <NuxtLink v-if="tariff" class="pay-bar__go" :to="orderUrl">
                Оплатить {{ tariff.price }}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import BackButton from '~/component/back-button.vue'
import { countries } from '~/data/countries'

const route = useRoute()
const methodId = ref('sbp')

const methods = [
    {
        id: 'sbp',
        name: 'СБП',
        meta: 'По QR или в приложении банка',
        icon: 'M3 7h18v10H3zM3 10h18M7 15h4',
    },
    {
        id: 'ru-card',
        name: 'Российская карта',
        meta: 'МИР · карты РФ-банков',
        icon: 'M4 6h16v12H4zM4 10h16M8 14h3',
    },
    {
        id: 'crypto',
        name: 'Крипта',
        meta: 'USDT · BTC · TON',
        icon: 'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18M12 7v10M9.2 9.2h4a1.8 1.8 0 0 1 0 3.6h-4',
    },
]

const country = computed(() => countries.find(item => item.id === route.query.country))
const tariff = computed(() => country.value?.tariffs.find(item => item.id === route.query.tariff))

const backUrl = computed(() => {
    const params = new URLSearchParams()
    if (country.value) params.set('country', country.value.id)
    if (tariff.value) params.set('tariff', tariff.value.id)
    if (typeof route.query.email === 'string' && route.query.email) params.set('email', route.query.email)
    const query = params.toString()
    return query ? `/order?${query}` : '/order'
})

const orderUrl = computed(() => {
    const params = new URLSearchParams()
    if (country.value) params.set('country', country.value.id)
    if (tariff.value) params.set('tariff', tariff.value.id)
    if (typeof route.query.email === 'string' && route.query.email) params.set('email', route.query.email)
    params.set('method', methodId.value)
    return `/my-esim/1?${params.toString()}`
})
</script>
