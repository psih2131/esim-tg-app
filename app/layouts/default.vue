<template>
    <div class="app-wrapper">

        <ClientOnly>
            <slot />
            <Menu />
        </ClientOnly>

    </div>
</template>

<script setup>
import Menu from '~/component/menu.vue'
</script>