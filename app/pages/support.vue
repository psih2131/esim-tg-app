<template>
    <div class="support-page">
        <h1 class="support-page__title">Поддержка</h1>

        <section class="support-contacts">
            <span class="support-contacts__label">Контакты</span>
            <div class="support-contacts__card">
                <a
                    v-for="item in contacts"
                    :key="item.name"
                    class="support-contact"
                    :href="item.href"
                    target="_blank"
                    rel="noopener"
                >
                    <span class="support-contact__icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                            <path :d="item.icon" />
                        </svg>
                    </span>
                    <span class="support-contact__text">
                        <span class="support-contact__name">{{ item.name }}</span>
                        <span class="support-contact__meta">{{ item.meta }}</span>
                    </span>
                    <svg class="support-contact__chevron" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="m9 6 6 6-6 6" />
                    </svg>
                </a>
            </div>
        </section>
    </div>
</template>

<script setup>
const contacts = [
    {
        name: 'Telegram',
        meta: 'Оперативная поддержка',
        href: 'https://t.me/',
        icon: 'M21 5 4 12.2l5.2 1.8L11 20l2.4-4.4L19 18.2 21 5zM9.4 14.1 19.2 6.4',
    },
    {
        name: 'WhatsApp',
        meta: 'Если Telegram не под рукой',
        href: 'https://wa.me/',
        icon: 'M7.2 17.8c3.6 1.6 7.8-.1 9.3-3.6 1.2-2.7.5-5.8-1.6-7.6-2.5-2.2-6.4-2.2-8.8 0-2.1 1.9-2.7 4.8-1.6 7.2l-.9 4 3.6-1z',
    },
    {
        name: 'Email',
        meta: 'Напишите нам на почту',
        href: 'mailto:support@esim.tg',
        icon: 'M4 7.5h16v10H4zM4.5 8l7.5 5.5L19.5 8',
    },
]
</script>
