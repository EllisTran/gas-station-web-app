<template>
  <div>
    <!-- <button @click="getWeatherData">Get me the data</button> -->
    <form @submit.prevent="getWeatherData">
    <label>Please search for a State using their Postal Code</label>
    <input type="text" v-model="cityToSearch">
    <button>Search</button>
    </form>
    <ul>
      <li v-for="city in cities" :key="city.lowerName">{{ city.name }}</li>
    </ul>
    <ul>
      <li v-for="state in states" :key="state.name">{{ state.name }}</li>
    </ul>

    <button @click.prevent="getGasDataForUSACities">Search for All USA Prices</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [],
      states: [],
      cityToSearch: '',
    }
  },
  methods: {
    async getWeatherData() {
      await fetch(`https://api.collectapi.com/gasPrice/stateUsaPrice?state=${this.cityToSearch}`, {
        headers: {
          "Content-type": "application/json",
          "authorization": "apikey 4T56yIcfcwAQ1oTigoZ5a6:4hcmA0s2a8smtj57yWToh4"
        }
      }).then(response => response.json()).then(result => { this.cities.push(...result.result.cities); console.log(result) });
    },
    async getGasDataForUSACities() {
      await fetch(`https://api.collectapi.com/gasPrice/allUsaPrice`, {
        headers: {
          "Content-type": "application/json",
          "authorization": "apikey 4T56yIcfcwAQ1oTigoZ5a6:4hcmA0s2a8smtj57yWToh4"
        }
      }).then(response => response.json()).then(result => { this.states.push(...result.result); console.log(result) });
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
