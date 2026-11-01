<template>
    <div class="catalog-page">

        <BackButton url="/catalog/regions" />

        <div v-if="region" class="region-card">
            <img :src="region.image" alt="">
            <span class="region-card__caption">
                <span class="region-card__name">{{ region.name }}</span>
                <span class="region-card__count">{{ region.count }}</span>
            </span>
        </div>

        <CatalogSearch />

        <div class="catalog-countries">
            <CountryCard
                v-for="country in regionCountries"
                :key="country.id"
                :flag="country.flag"
                :name="country.name"
                :plans="country.plans"
                :price="country.price"
                :traffic="country.traffic"
                :to="country.to"
            />
        </div>
    </div>
</template>

<script setup>
import CatalogSearch from '~/component/catalog-search.vue'
import BackButton from '~/component/back-button.vue'
import CountryCard from '~/component/country-card.vue'
import { countries } from '~/data/countries'
import { regions } from '~/data/regions'

const route = useRoute()

const region = computed(() => regions.find(item => item.id === route.params.id))
const regionCountries = computed(() => countries.filter(country => country.region === route.params.id))
</script>
