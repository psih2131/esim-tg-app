<template>
    <nav ref="menu" class="app-menu">
        <NuxtLink to="/catalog/regions" :class="{ 'is-open': opened === '/catalog' }">
            <span class="app-menu__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="4" y="4" width="6.5" height="6.5" rx="1.2" />
                    <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2" />
                    <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2" />
                    <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2" />
                </svg>
            </span>
            <span class="app-menu__label">Каталог</span>
        </NuxtLink>
        <NuxtLink to="/my-esim" :class="{ 'is-open': opened === '/my-esim' }">
            <span class="app-menu__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 3.5h6.2L19 8.2V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 7 20V5A1.5 1.5 0 0 1 8.5 3.5H8z" />
                    <rect x="9.5" y="12" width="5" height="5.5" rx="0.6" />
                </svg>
            </span>
            <span class="app-menu__label">Мои eSIM</span>
        </NuxtLink>
        <NuxtLink to="/support" :class="{ 'is-open': opened === '/support' }">
            <span class="app-menu__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 16.5 4.8 19.2A1 1 0 0 0 5.7 20.6H12a7 7 0 1 0-6-3.4v-.7z" />
                </svg>
            </span>
            <span class="app-menu__label">Поддержка</span>
        </NuxtLink>
        <NuxtLink to="/settings" :class="{ 'is-open': opened === '/settings' }">
            <span class="app-menu__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
            </span>
            <span class="app-menu__label">Настройки</span>
        </NuxtLink>
    </nav>
</template>

<script setup>
const route = useRoute()
const menu = ref(null)
const roots = ['/catalog', '/my-esim', '/support', '/settings']

function matchPath(path) {
    return roots.find(item => path === item || path.startsWith(`${item}/`)) || ''
}

const opened = ref(matchPath(route.path))
let desired = opened.value
let running = false

function waitLabel(label) {
    if (!label) return Promise.resolve()

    const duration = Math.round(parseFloat(getComputedStyle(label).transitionDuration) * 1000) || 450

    return new Promise((resolve) => {
        const timer = setTimeout(finish, duration + 50)

        function finish() {
            label.removeEventListener('transitionend', onEnd)
            resolve()
        }

        function onEnd(event) {
            if (event.target !== label || event.propertyName !== 'max-width') return
            clearTimeout(timer)
            finish()
        }

        label.addEventListener('transitionend', onEnd)
    })
}

async function pump() {
    if (running) return
    running = true

    while (desired !== opened.value) {
        const next = desired

        if (opened.value) {
            const label = menu.value?.querySelector('.is-open .app-menu__label')
            const closed = waitLabel(label)
            opened.value = ''
            await closed
        }

        if (desired !== next) continue

        opened.value = next
        await nextTick()
        await waitLabel(menu.value?.querySelector('.is-open .app-menu__label'))
    }

    running = false

    if (desired !== opened.value) pump()
}

watch(() => route.path, (path) => {
    desired = matchPath(path)
    pump()
})
</script>
