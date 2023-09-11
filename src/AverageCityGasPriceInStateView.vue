<template>
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
</template>

<script>
export default {
  props: {
    apiKey: {type: String, required: true},  // This should be in the .env along with other env variables.
    cities: {type: Array, required: true}
  },
  data() {
    return {
      cityToSearch: '',
    }
  },
  methods: {
    async getGasDataForCitiesInState() {
      const url = `https://api.collectapi.com/gasPrice/stateUsaPrice?state=${this.cityToSearch}`;
      if (this.cityToSearch.length !== 2)
      {
        alert("This is not valid entry");
        return;
      }
      this.$emit('toggle-loading');
      await fetch(url, {
        headers: {
          "Content-type": "application/json",
          "authorization": this.apiKey,
        }
      }).then(response => response.json())
        .then(result => this.$emit('add-avg-city-gas-prices', result.result))
        .catch((error) => console.error(error))
        .finally(() => this.$emit('toggle-loading'));
    },
  }

}
</script>
<style></style>