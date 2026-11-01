<template>
    <div class="order-page">
        <BackButton :url="backUrl" />

        <h1 class="order-page__title">Куда отправить eSIM</h1>

        <section v-if="country && tariff" class="order-plan">
            <span class="order-plan__label">Выбранный тариф</span>
            <div class="order-plan__row">
                <div class="order-plan__place">
                    <img class="order-plan__flag" :src="country.flag" alt="">
                    <span class="order-plan__text">
                        <span class="order-plan__name">{{ country.name }}</span>
                        <span class="order-plan__meta">{{ tariff.traffic }} · {{ tariff.days }}</span>
                    </span>
                </div>
                <span class="order-plan__price">{{ tariff.price }}</span>
            </div>
        </section>

        <label class="order-email">
            <span class="order-email__label">Email для доставки</span>
            <input v-model="email" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com">
            <span class="order-email__note">Отправим eSIM и инструкцию на эту почту. Почта также поможет открыть заказ позже.</span>
        </label>

        <p class="order-hint">
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
            </svg>
            <span>Войдите через Telegram или email — увидите заказ в «Мои eSIM».</span>
        </p>

        <PayButton visible :url="payUrl" />
    </div>
</template>

<script setup>
import BackButton from '~/component/back-button.vue'
import PayButton from '~/component/pay-button.vue'
import { countries } from '~/data/countries'

const route = useRoute()
const email = ref(typeof route.query.email === 'string' ? route.query.email : '')

const country = computed(() => countries.find(item => item.id === route.query.country))
const tariff = computed(() => country.value?.tariffs.find(item => item.id === route.query.tariff))
const backUrl = computed(() => country.value ? `/catalog/${country.value.id}` : '/catalog/countries')

const payUrl = computed(() => {
    const params = new URLSearchParams()
    if (country.value) params.set('country', country.value.id)
    if (tariff.value) params.set('tariff', tariff.value.id)
    if (email.value.trim()) params.set('email', email.value.trim())
    const query = params.toString()
    return query ? `/order/pay?${query}` : '/order/pay'
})
</script>
