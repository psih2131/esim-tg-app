<template>
    <div class="order-page esim-order">
        <BackButton :url="backUrl" />

        <template v-if="paid">
            <h1 class="order-page__title">Оплачено</h1>
            <p class="esim-order__lead">Оплата прошла. eSIM готова к установке.</p>
        </template>
        <template v-else>
            <span class="esim-order__clock" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v4l3 2" />
                </svg>
            </span>
            <h1 class="order-page__title">Ожидаем оплату</h1>
            <p class="esim-order__lead">Ссылка на оплату ещё активна. Если уже оплатили — проверка займёт немного времени.</p>
        </template>

        <div class="esim-order__id">
            <span>Заказ</span>
            <span>{{ route.params.id }}</span>
        </div>

        <section class="esim-progress">
            <span class="esim-progress__label">Прогресс</span>
            <div class="esim-progress__list">
                <div
                    v-for="step in steps"
                    :key="step.name"
                    class="esim-step"
                    :class="step.state"
                >
                    <span class="esim-step__rail" aria-hidden="true">
                        <span class="esim-step__dot"></span>
                    </span>
                    <span class="esim-step__text">
                        <span class="esim-step__name">{{ step.name }}</span>
                        <span class="esim-step__meta">{{ step.meta }}</span>
                    </span>
                </div>
            </div>
        </section>

        <button v-if="!paid" type="button" class="esim-order__pay">Оплатить заказ</button>
    </div>
</template>

<script setup>
import BackButton from '~/component/back-button.vue'

const route = useRoute()
const paid = false

const steps = paid
    ? [
        { name: 'Заказ создан', meta: 'создан', state: 'is-done' },
        { name: 'Ожидаем оплату', meta: 'оплачено', state: 'is-done' },
        { name: 'Готовим eSIM', meta: 'готово', state: 'is-done' },
        { name: 'eSIM готова к установке', meta: 'можно установить', state: 'is-done' },
    ]
    : [
        { name: 'Заказ создан', meta: 'создан', state: 'is-done' },
        { name: 'Ожидаем оплату', meta: 'ссылка активна', state: 'is-current' },
        { name: 'Готовим eSIM', meta: '—', state: '' },
        { name: 'eSIM готова к установке', meta: '—', state: '' },
    ]

const backUrl = computed(() => {
    const params = new URLSearchParams()
    for (const key of ['country', 'tariff', 'email', 'method']) {
        const value = route.query[key]
        if (typeof value === 'string' && value) params.set(key, value)
    }
    const query = params.toString()
    return query ? `/order/pay?${query}` : '/my-esim'
})
</script>
