<template>
    <component
        :is="url ? NuxtLink : 'button'"
        class="pay-button"
        :class="{ 'is-visible': visible }"
        v-bind="url ? { to: url } : { type: 'button' }"
    >
        Перейти к оплате
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    </component>
</template>

<script setup>
import { NuxtLink } from '#components'

defineProps({
    visible: { type: Boolean, default: false },
    url: { type: String, default: '' },
})
</script>
