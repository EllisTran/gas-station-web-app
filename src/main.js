import { createApp } from 'vue';
import App from './App.vue';

import CityGas from './CityGas.vue';
import StateGas from './StateGas.vue';

const app = createApp(App);

app.component('city-gas', CityGas)
app.component('state-gas', StateGas);

app.mount('#app');