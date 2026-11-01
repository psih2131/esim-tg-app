<template>
    <div v-if="country" class="country-page" :class="{ 'country-page--pay': selectedId !== null }">
        <BackButton url="/catalog/countries" />

        <div class="country-hero">
            <div class="country-hero__place">
                <img class="country-hero__flag" :src="country.flag" alt="">
                <div class="country-hero__text">
                    <h1 class="country-hero__name">{{ country.name }}</h1>
                    <p class="country-hero__operators">{{ countryNetwork }}</p>
                </div>
            </div>
            <div class="country-hero__stats">
                <div class="country-hero__stat">
                    <span class="country-hero__label">Скорость</span>
                    <span class="country-hero__value">{{ countrySpeed }}</span>
                </div>
                <div class="country-hero__stat">
                    <span class="country-hero__label">Срок</span>
                    <span class="country-hero__value">{{ countryPeriod }}</span>
                </div>
                <div class="country-hero__stat">
                    <span class="country-hero__label">Цена</span>
                    <span class="country-hero__value">от {{ country.price }}</span>
                </div>
            </div>
        </div>

        <div class="country-tariffs">
            <div class="country-tariffs__head">
                <h2 class="country-tariffs__title">Тарифы</h2>
                <span class="country-tariffs__count">{{ tariffCount }}</span>
            </div>
            <button
                v-for="tariff in country.tariffs"
                :key="tariff.id"
                type="button"
                class="country-tariff"
                :class="{ 'is-selected': selectedId === tariff.id }"
                @click="selectedId = tariff.id"
            >
                <span class="country-tariff__info">
                    <span class="country-tariff__traffic">{{ tariff.traffic }}</span>
                    <span class="country-tariff__days">всего · {{ tariff.days }}</span>
                </span>
                <span class="country-tariff__aside">
                    <span class="country-tariff__price">{{ tariff.price }}</span>
                    <span class="country-tariff__mark" aria-hidden="true"></span>
                </span>
            </button>
        </div>

        <PayButton :visible="selectedId !== null" :url="payUrl" />
    </div>
</template>

<script setup>
import BackButton from '~/component/back-button.vue'
import PayButton from '~/component/pay-button.vue'
import { countries } from '~/data/countries'

const route = useRoute()
const selectedId = ref(null)

const country = computed(() => countries.find(item => item.id === route.params.id))

const operatorParts = computed(() => country.value?.operators.split(' · ') ?? [])

const countryNetwork = computed(() => operatorParts.value.slice(0, -1).join(' · '))

const countrySpeed = computed(() => operatorParts.value.at(-1)?.includes('5G') ? '5G' : '4G')

const countryPeriod = computed(() => country.value?.plans.split('·')[1]?.trim() ?? '')

const payUrl = computed(() => {
    if (!country.value || !selectedId.value) return ''
    return `/order?country=${country.value.id}&tariff=${selectedId.value}`
})

const tariffCount = computed(() => {
    const count = country.value?.tariffs.length ?? 0
    const mod10 = count % 10
    const mod100 = count % 100
    let word = 'тарифов'

    if (mod10 === 1 && mod100 !== 11) word = 'тариф'
    else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) word = 'тарифа'

    return `${count} ${word}`
})

watch(() => route.params.id, () => {
    selectedId.value = null
})
</script>
