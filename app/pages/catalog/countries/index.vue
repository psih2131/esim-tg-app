<template>
    <div class="catalog-page">
        <CatalogSearch />
        <CatalogNav />
        <div class="catalog-countries">
            <CountryCard
                v-for="country in countries"
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
import CatalogNav from '~/component/catalog-nav.vue'
import CountryCard from '~/component/country-card.vue'
import { countries } from '~/data/countries'
</script>
