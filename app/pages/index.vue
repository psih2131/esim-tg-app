<template>
    <div class="home-page">
        <h1>Home Page</h1>
        <pre>{{ JSON.stringify(userData, null, 2) }}</pre>
        <TgBtnTest />
    </div>
</template>

<script setup>

import TgBtnTest from '~/component/tg-btn-test.vue'


import { useMiniApp } from 'vue-tg'

const userData = ref({})

const webApp = useMiniApp()
userData.value = webApp.initDataUnsafe
console.log(userData.value)

</script>
