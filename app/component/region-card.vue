<template>
    <NuxtLink class="region-card" :class="{ 'region-card--tall': tall }" :to="to">
        <img :src="image" alt="">
        <span class="region-card__caption">
            <span class="region-card__name">{{ name }}</span>
            <span class="region-card__count">{{ count }}</span>
        </span>
    </NuxtLink>
</template>

<script setup>
defineProps({
    image: { type: String, required: true },
    name: { type: String, required: true },
    count: { type: String, required: true },
    to: { type: String, required: true },
    tall: { type: Boolean, default: false },
})
</script>
