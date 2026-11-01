import europe from '~/assets/image/regions/europe.jpg'
import asia from '~/assets/image/regions/asia.webp'
import africa from '~/assets/image/regions/afrika.jpg'
import southAmerica from '~/assets/image/regions/sous-amerika.jpg'
import australia from '~/assets/image/regions/australia.jpg'

export const regions = [
    {
        id: 'europe',
        image: europe,
        name: 'Европа',
        count: '24 страны',
        to: '/catalog/regions/europe',
        tall: true,
    },
    {
        id: 'africa',
        image: africa,
        name: 'Африка',
        count: '18 стран',
        to: '/catalog/regions/africa',
        tall: false,
    },
    {
        id: 'australia',
        image: australia,
        name: 'Австралия',
        count: '6 стран',
        to: '/catalog/regions/australia',
        tall: false,
    },
    {
        id: 'asia',
        image: asia,
        name: 'Азия',
        count: '48 стран',
        to: '/catalog/regions/asia',
        tall: false,
    },
    {
        id: 'south-america',
        image: southAmerica,
        name: 'Южная Америка',
        count: '12 стран',
        to: '/catalog/regions/south-america',
        tall: true,
    },
]
