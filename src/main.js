import { createApp } from 'vue';
import App from './App.vue';

import CityGas from './CityGas.vue';
import StateGas from './StateGas.vue';

import InfoCard from './InfoCard.vue';
const app = createApp(App);

app.component('city-gas', CityGas)
app.component('state-gas', StateGas);
app.component('info-card', InfoCard);

app.mount('#app');