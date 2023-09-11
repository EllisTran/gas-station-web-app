import { createApp } from 'vue';
import App from './App.vue';

import CityGas from './CityGas.vue';
import StateGas from './StateGas.vue';
import InfoCard from './InfoCard.vue';
import LoaderIcon from './LoaderIcon.vue';
import NavigationBar from './NavigationBar.vue';

import AverageCityGasPriceView from './AverageCityGasPriceInStateView.vue';
import AverageStateGasPriceView from './AverageStateGasPriceView.vue'
const app = createApp(App);

app.component('city-gas', CityGas)
app.component('state-gas', StateGas);
app.component('info-card', InfoCard);
app.component('loader-icon', LoaderIcon);
app.component('navigation-bar', NavigationBar);
app.component('average-city-gas-price-in-states-view', AverageCityGasPriceView);
app.component('average-state-gas-price-view', AverageStateGasPriceView);

app.mount('#app');