<template>
    <NuxtLink class="country-card" :to="to">
        <img class="country-card__flag" :src="flag" alt="">
        <span class="country-card__info">
            <span class="country-card__name">{{ name }}</span>
            <span class="country-card__meta">{{ plans }}</span>
        </span>
        <span class="country-card__offer">
            <span class="country-card__price">от {{ price }}</span>
            <span class="country-card__meta">{{ traffic }}</span>
        </span>
        <span class="country-card__go" aria-hidden="true">
            <svg viewBox="0 0 24 24">
                <path d="M9 6l6 6-6 6" />
            </svg>
        </span>
    </NuxtLink>
</template>

<script setup>
defineProps({
    flag: { type: String, required: true },
    name: { type: String, required: true },
    plans: { type: String, required: true },
    price: { type: String, required: true },
    traffic: { type: String, required: true },
    to: { type: String, required: true },
})
</script>
