import flagAu from '~/assets/image/country/au.png'
import flagAt from '~/assets/image/country/at.png'
import flagAx from '~/assets/image/country/ax.png'
import flagBe from '~/assets/image/country/be.png'
import flagBr from '~/assets/image/country/br.png'
import flagBt from '~/assets/image/country/bt.png'
import flagBy from '~/assets/image/country/by.png'
import flagCn from '~/assets/image/country/cn.png'
import flagEt from '~/assets/image/country/et.png'
import flagId from '~/assets/image/country/id.png'
import flagJm from '~/assets/image/country/jm.png'
import flagJp from '~/assets/image/country/jp.png'
import flagKr from '~/assets/image/country/kr.png'
import flagPh from '~/assets/image/country/ph.png'
import flagVn from '~/assets/image/country/vn.png'

const countryList = [
    {
        id: 'au',
        region: 'australia',
        flag: flagAu,
        name: 'Австралия',
        plans: '8 тарифов · 7–30 дней',
        price: '249 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/au',
    },
    {
        id: 'at',
        region: 'europe',
        flag: flagAt,
        name: 'Австрия',
        plans: '6 тарифов · 7–30 дней',
        price: '189 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/at',
    },
    {
        id: 'ax',
        region: 'europe',
        flag: flagAx,
        name: 'Аландские острова',
        plans: '4 тарифа · 7–15 дней',
        price: '159 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/ax',
    },
    {
        id: 'be',
        region: 'europe',
        flag: flagBe,
        name: 'Бельгия',
        plans: '9 тарифов · 7–30 дней',
        price: '199 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/be',
    },
    {
        id: 'br',
        region: 'south-america',
        flag: flagBr,
        name: 'Бразилия',
        plans: '7 тарифов · 7–30 дней',
        price: '179 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/br',
    },
    {
        id: 'bt',
        region: 'asia',
        flag: flagBt,
        name: 'Бутан',
        plans: '5 тарифов · 7–15 дней',
        price: '149 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/bt',
    },
    {
        id: 'by',
        region: 'europe',
        flag: flagBy,
        name: 'Беларусь',
        plans: '9 тарифов · 7–30 дней',
        price: '109 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/by',
    },
    {
        id: 'cn',
        region: 'asia',
        flag: flagCn,
        name: 'Китай',
        plans: '10 тарифов · 7–30 дней',
        price: '129 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/cn',
    },
    {
        id: 'et',
        region: 'africa',
        flag: flagEt,
        name: 'Эфиопия',
        plans: '4 тарифа · 7–15 дней',
        price: '139 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/et',
    },
    {
        id: 'id',
        region: 'asia',
        flag: flagId,
        name: 'Индонезия',
        plans: '8 тарифов · 7–30 дней',
        price: '119 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/id',
    },
    {
        id: 'jm',
        region: 'south-america',
        flag: flagJm,
        name: 'Ямайка',
        plans: '5 тарифов · 7–15 дней',
        price: '169 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/jm',
    },
    {
        id: 'jp',
        region: 'asia',
        flag: flagJp,
        name: 'Япония',
        plans: '9 тарифов · 7–30 дней',
        price: '219 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/jp',
    },
    {
        id: 'kr',
        region: 'asia',
        flag: flagKr,
        name: 'Южная Корея',
        plans: '8 тарифов · 7–30 дней',
        price: '199 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/kr',
    },
    {
        id: 'ph',
        region: 'asia',
        flag: flagPh,
        name: 'Филиппины',
        plans: '6 тарифов · 7–30 дней',
        price: '129 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/ph',
    },
    {
        id: 'vn',
        region: 'asia',
        flag: flagVn,
        name: 'Вьетнам',
        plans: '7 тарифов · 7–30 дней',
        price: '109 ₽',
        traffic: '1 ГБ / 7 дн',
        to: '/catalog/vn',
    },
]

const operators = {
    au: 'Telstra · Optus · 5G/LTE',
    at: 'A1 · Magenta · 5G/LTE',
    ax: 'Elisa · Telia · 4G/LTE',
    be: 'Proximus · Orange · 5G/LTE',
    br: 'Vivo · Claro · 5G/LTE',
    bt: 'B-Mobile · Tashi Cell · 4G/LTE',
    by: 'A1 · МТС · 4G/LTE',
    cn: 'China Mobile · China Unicom · 5G/LTE',
    et: 'Ethio telecom · 4G/LTE',
    id: 'Telkomsel · XL · 5G/LTE',
    jm: 'Flow · Digicel · 4G/LTE',
    jp: 'NTT Docomo · SoftBank · 5G/LTE',
    kr: 'SK Telecom · KT · 5G/LTE',
    ph: 'Globe · Smart · 5G/LTE',
    vn: 'Viettel · Vinaphone · 5G/LTE',
}

const tariffSteps = [
    { traffic: '1 ГБ', days: '7 дней', extra: 0 },
    { traffic: '3 ГБ', days: '15 дней', extra: 110 },
    { traffic: '1 ГБ', days: '30 дней', extra: 130 },
    { traffic: '3 ГБ', days: '30 дней', extra: 120 },
    { traffic: '5 ГБ', days: '30 дней', extra: 250 },
]

export const countries = countryList.map(country => {
    const from = Number(String(country.price).replace(/\D/g, ''))

    return {
        ...country,
        operators: operators[country.id],
        tariffs: tariffSteps.map((step, index) => ({
            id: `${country.id}-${index + 1}`,
            traffic: step.traffic,
            days: step.days,
            price: `${from + step.extra} ₽`,
        })),
    }
})
