<template>
    <div class="catalog-page">
        <!-- <CatalogSearch /> -->
        <CatalogNav />
        <div class="regions">
            <div class="regions__col">
                <RegionCard
                    v-for="region in columns[0]"
                    :key="region.id"
                    :image="region.image"
                    :name="region.name"
                    :count="region.count"
                    :to="region.to"
                    :tall="region.tall"
                />
            </div>
            <div class="regions__col">
                <RegionCard
                    v-for="region in columns[1]"
                    :key="region.id"
                    :image="region.image"
                    :name="region.name"
                    :count="region.count"
                    :to="region.to"
                    :tall="region.tall"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import CatalogNav from '~/component/catalog-nav.vue'
import RegionCard from '~/component/region-card.vue'
import { regions } from '~/data/regions'

const byId = Object.fromEntries(regions.map(region => [region.id, region]))

const columns = [
    [byId.europe, byId.africa, byId.australia],
    [byId.asia, byId['south-america']],
]
</script>
