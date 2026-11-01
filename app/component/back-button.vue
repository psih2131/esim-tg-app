<template>
    <NuxtLink class="back-button" :to="url">
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
        </svg>
        Назад
    </NuxtLink>
</template>

<script setup>
defineProps({
    url: { type: String, required: true },
})
</script>
