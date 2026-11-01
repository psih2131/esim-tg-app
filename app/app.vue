<template>
  <ExpandedViewport />
  <FullscreenViewport v-if="isMobile" />
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ExpandedViewport, FullscreenViewport } from 'vue-tg'

const media = window.matchMedia('(max-width: 767px)')
const isMobile = ref(media.matches)

function onWidthChange(event: MediaQueryListEvent) {
  isMobile.value = event.matches
}

onMounted(() => {
  media.addEventListener('change', onWidthChange)
})

onBeforeUnmount(() => {
  media.removeEventListener('change', onWidthChange)
})
</script>
