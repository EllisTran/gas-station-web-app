<template>
  <div class="header">
    <h1 style="margin: 0; text-align: center;">Get Gas Prices</h1>
    <h2>You can use this app to look up average gas prices cities in a state or the average of every US state</h2>
    <div class="navBar">
      <div class="navBarItem" @click="handleOnClickActiveScreen('prices-among-states')"
        :class="activeScreen === 'prices-among-states' ? 'active' : ''">Average USA Prices among States</div>
      <div class="navBarItem" @click="handleOnClickActiveScreen('city-prices-among-states')"
        :class="activeScreen === 'city-prices-among-states' ? 'active' : ''">Average City Prices among a State</div>
    </div>
  </div>
  <div>
    <div v-if="activeScreen === 'prices-among-states'" style="margin-top: 15px;">
      <form @submit.prevent="getGasDataForCitiesInState">
        <input class="input" type="text" placeholder="Enter a State's Postal Code" v-model="cityToSearch">
        <button class="button">Search</button>
      </form>

      <div class="cardContainerRow">
        <div v-for="city in cities" :key="city.lowerName">
          <city-gas :name="city.name" :premium="city.premium" :currency="city.currency" :diesel="city.diesel"
            :gasoline="city.gasoline" :midGrade="city.midGrade">
          </city-gas>
        </div>

      </div>

    </div>
    <div v-else-if="activeScreen === 'city-prices-among-states'" style="margin-top: 15px">
    <button class="button" @click.prevent="getGasDataForUSAStates">Search for All USA Prices</button>
      <div class="cardContainerRow">
      <div v-for="state in states" :key="state.lowerName">
        <state-gas :name="state.name" :premium="state.premium" :currency="state.currency" :diesel="state.diesel"
          :gasoline="state.gasoline" :midGrade="state.midGrade">
        </state-gas>
      </div>

      </div>

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
      activeScreen: 'prices-among-states', // key for pages,
      isLoading: false,
    }
  },
  methods: {
    handleOnClickActiveScreen(value) {
      this.activeScreen = value;

    },
    async getGasDataForCitiesInState() {
      this.isLoading = true;
      await fetch(`https://api.collectapi.com/gasPrice/stateUsaPrice?state=${this.cityToSearch}`, {
        headers: {
          "Content-type": "application/json",
          "authorization": "apikey 4T56yIcfcwAQ1oTigoZ5a6:4hcmA0s2a8smtj57yWToh4"
        }
      }).then(response => response.json()).then(result => this.cities.push(...result.result.cities)).finally(() => this.isLoading = false);
    },
    async getGasDataForUSAStates() {
      // this.isLoading = true;
      // await fetch(`https://api.collectapi.com/gasPrice/allUsaPrice`, {
      //   headers: {
      //     "Content-type": "application/json",
      //     "authorization": "apikey 4T56yIcfcwAQ1oTigoZ5a6:4hcmA0s2a8smtj57yWToh4"
      //   }
      // }).then(response => response.json()).then(result => { this.states.push(...result.result); console.log(result.result) }).catch((error) => {
      //   console.error(error);
      // }).finally(() => this.isLoading = false);
      const mockData = [{
        name: "Alaska",
        currency: "usd",
        diesel: "4.678",
        gasoline: "4.611",
        midGrade: "4.799",
        premium: "5.018"
      }, {
        name: "Arkansas",
        currency: "usd",
        diesel: "4.678",
        gasoline: "4.611",
        midGrade: "4.799",
        premium: "5.018"
      }];
      this.states.push(...mockData);
      // maybe add a mock data toggle
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
}

.header {
  background-color: #213555;
  width: 100%;
  color: white;
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

  height: 24px;
  border: none;

}

.navBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.navBarItem {
  width: 50%;
  font-size: 22px;
  padding: 15px;
}

.navBarItem:hover {
  background-color: #4F709C;
}

.active {
  background-color: #4F709C;
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
