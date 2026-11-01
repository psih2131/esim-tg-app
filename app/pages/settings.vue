<template>
    <div class="settings-page">
        <div class="settings-id">
            <span class="settings-id__label">ID</span>
            <span class="settings-id__value">102458</span>
        </div>

        <div class="settings-row">
            <span class="settings-row__flag" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                    <defs>
                        <clipPath id="settings-ru">
                            <circle cx="12" cy="12" r="12" />
                        </clipPath>
                    </defs>
                    <g clip-path="url(#settings-ru)">
                        <rect width="24" height="8" fill="#fff" />
                        <rect y="8" width="24" height="8" fill="#0039a6" />
                        <rect y="16" width="24" height="8" fill="#d52b1e" />
                    </g>
                </svg>
            </span>
            <span class="settings-row__name">Язык</span>
            <button type="button" class="settings-row__change">Изменить</button>
        </div>

        <div class="settings-row">
            <span class="settings-row__mark" aria-hidden="true">₽</span>
            <span class="settings-row__name">Валюта</span>
            <button type="button" class="settings-row__change">Изменить</button>
        </div>

        <div class="settings-row">
            <span class="settings-row__mark" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                    <rect x="4" y="6.5" width="16" height="11" rx="2" />
                    <path d="m5 8 7 5 7-5" />
                </svg>
            </span>
            <span class="settings-row__text">
                <span class="settings-row__name">Email</span>
                <span class="settings-row__meta">you@example.com</span>
            </span>
            <button type="button" class="settings-row__change">Изменить</button>
        </div>
    </div>
</template>
