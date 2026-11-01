<template>
    <div class="my-esims">
        <p class="sim-count">{{ simCount }}</p>
        <div class="sim-switch">
            <button type="button" :class="{ 'is-on': filter === 'active' }" @click="setFilter('active')">Активные</button>
            <button type="button" :class="{ 'is-on': filter === 'inactive' }" @click="setFilter('inactive')">Неактивные</button>
            <button type="button" class="is-wide" :class="{ 'is-on': filter === 'pending' }" @click="setFilter('pending')">
                Ожидают оплаты
                <span v-if="pendingCount" class="sim-switch__badge">{{ pendingCount }}</span>
            </button>
        </div>

        <ClientOnly v-if="visibleSims.length">
            <swiper-container
                :key="filter"
                ref="containerRef"
                :init="false"
                @swiperslidechange="onSlideChange"
            >
                <swiper-slide v-for="sim in visibleSims" :key="sim.id">
                    <NuxtLink class="sim-card" :style="{ background: sim.color }" :to="sim.to">
                        <span class="sim-card__top">
                            <span class="sim-card__brand">
                                <img class="sim-card__flag" :src="flags[sim.countryId]" alt="">
                                {{ sim.operator }}
                            </span>
                            <span class="sim-card__country">{{ sim.country }}</span>
                        </span>
                        <span class="sim-card__bottom">
                            <span class="sim-card__offer">
                                <span class="sim-card__plan">{{ sim.plan }}</span>
                                <span class="sim-card__due">до {{ sim.due }}</span>
                            </span>
                            <span class="sim-card__status" :class="`is-${sim.status}`">{{ statusText[sim.status] }}</span>
                        </span>
                    </NuxtLink>
                </swiper-slide>
            </swiper-container>
        </ClientOnly>

        <p v-else class="sim-empty">Здесь пока нет eSIM</p>

        <div v-if="current" class="sim-current">
            <span class="sim-current__info">
                <span class="sim-current__label">Доступно</span>
                <span class="sim-current__value">{{ current.plan }}</span>
            </span>
            <NuxtLink v-if="current.status === 'active'" class="sim-current__topup" :to="current.to">Пополнить</NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { countries } from '~/data/countries'

const flags = Object.fromEntries(countries.map(country => [country.id, country.flag]))

const sims = [
    { id: '1', status: 'active', countryId: 'at', operator: 'A1', country: 'Австрия', due: '24.07.2026', plan: '10 ГБ', color: '#E6D4FB', to: '/my-esim/1' },
    { id: '2', status: 'active', countryId: 'jp', operator: 'NTT Docomo', country: 'Япония', due: '12.08.2026', plan: '5 ГБ', color: '#C9F1F7', to: '/my-esim/2' },
    { id: '3', status: 'active', countryId: 'br', operator: 'Vivo', country: 'Бразилия', due: '03.09.2026', plan: '3 ГБ', color: '#F8D5DE', to: '/my-esim/3' },
    { id: '4', status: 'inactive', countryId: 'et', operator: 'Ethio telecom', country: 'Эфиопия', due: '01.03.2026', plan: '0 ГБ', color: '#F8E7C4', to: '/my-esim/4' },
    { id: '5', status: 'inactive', countryId: 'au', operator: 'Telstra', country: 'Австралия', due: '15.01.2026', plan: '0 ГБ', color: '#D9F5D6', to: '/my-esim/5' },
    { id: '6', status: 'pending', countryId: 'cn', operator: 'China Mobile', country: 'Китай', due: '18.11.2026', plan: '5 ГБ', color: '#F6D9C8', to: '/my-esim/6' },
]

const statusText = {
    active: 'Активна',
    inactive: 'Не активна',
    pending: 'Ожидает оплаты',
}

const filter = ref('active')
const activeIndex = ref(0)
const containerRef = ref(null)

const visibleSims = computed(() => sims.filter(sim => sim.status === filter.value))
const pendingCount = computed(() => sims.filter(sim => sim.status === 'pending').length)
const current = computed(() => visibleSims.value[activeIndex.value] ?? null)

const simCount = computed(() => {
    const count = visibleSims.value.length
    const mod10 = count % 10
    const mod100 = count % 100
    let word = 'SIM-карт'

    if (mod10 === 1 && mod100 !== 11) word = 'SIM-карта'
    else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) word = 'SIM-карты'

    return `${count} ${word}`
})

function setFilter(value) {
    filter.value = value
    activeIndex.value = 0
}

function onSlideChange(event) {
    activeIndex.value = event.detail?.[0]?.activeIndex ?? 0
}

watch(containerRef, (element) => {
    if (!element) return
    Object.assign(element, {
        slidesPerView: 1,
        spaceBetween: 12,
        pagination: { clickable: true },
    })
    element.initialize()
})
</script>
