<template>
  <navigation-bar :activeNavigationTag="activeScreen" @active-nav-tag="handleOnClickActiveScreen"></navigation-bar>
  <div>
    <div v-if="activeScreen === 'average-city-gas-prices-in-a-state'" style="margin-top: 15px;">
      <average-city-gas-price-in-states-view :apiKey="apiKey" @add-avg-city-gas-prices="pushDataToAverageCityGasPrice"
        @toggle-loading="toggleIsLoading" :cities="cities"></average-city-gas-price-in-states-view>
    </div>
    <div v-else-if="activeScreen === 'average-state-gas-prices'" style="margin-top: 15px">
      <average-state-gas-price-view :apiKey="apiKey" @add-states-gas-prices="pushDataToAverageStatesGasPrice"
        :states="states" @toggle-loading="toggleIsLoading"></average-state-gas-price-view>
    </div>
  </div>
  <loader-icon v-if="isLoading"></loader-icon>
</template>

<script>
export default {
  data() {
    return {
      cities: [],
      states: [],
      cityToSearch: '',
      activeScreen: 'average-city-gas-prices-in-a-state', // key for pages,
      isLoading: false,
      apiKey: 'apikey 1p6HmwuMHRtgzJCLAoSbsu:06Hisx5Ttsj23Sfx3QjgD6',
    }
  },
  methods: {
    handleOnClickActiveScreen(value) {
      this.activeScreen = value;
    },
    pushDataToAverageCityGasPrice(result) {
      this.cities = [];
      this.cities.push(...result.cities)
    },
    toggleIsLoading() {
      this.isLoading = !this.isLoading;

    },
    pushDataToAverageStatesGasPrice(result) {
      this.states = []; // refresh..
      this.states.push(...result)
    }

  },
};
</script>

<style>
#app {

  /* color: #2c3e50; */
  height: 100%;
  width: 100%;
}

.cardContainerRow {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.button {
  padding: 10px;
  color: #fff;
  font-size: 20px;
  background-color: #4F709C;
  border: 1px solid white;
  border-radius: 0.3em;
}

.input {
  padding: 10px;
  width: 70%;
  margin-right: 0px;
  border-radius: 0.3em;

  height: 24px;
  border: none;

}

.input:focus {
  outline-width: 0;
}



h1 {
  padding: 15px;
  padding-bottom: 0px;
}

h2 {
  text-align: center;
  padding: 0px 0px 10px 0px;

}


html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  height: 100%;
  background-color: #F5F5F5;




}
</style>
