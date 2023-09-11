<template>
  <button class="button" @click.prevent="getGasDataForUSAStates" style="width: 50%">Search for All USA Prices</button>
  <div class="cardContainerRow">
    <div v-for="state in states" :key="state.lowerName">
      <state-gas :name="state.name" :premium="state.premium" :currency="state.currency" :diesel="state.diesel"
        :gasoline="state.gasoline" :midGrade="state.midGrade">
      </state-gas>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    apiKey: { type: String, required: true },  // This should be in the .env along with other env variables.
    states: { type: Array, required: true }
  },
  data() { },
  methods: {
    async getGasDataForUSAStates() {
      this.$emit('toggle-loading');
      await fetch(`https://api.collectapi.com/gasPrice/allUsaPrice`, {
        headers: {
          "Content-type": "application/json",
          "authorization": "apikey 4T56yIcfcwAQ1oTigoZ5a6:4hcmA0s2a8smtj57yWToh4"
        }
      }).then(response => response.json()).then(result => this.$emit('add-states-gas-prices', result.result)).catch((error) => {
        console.error(error);
      }).finally(() => this.$emit('toggle-loading'));
    }
  }
}
</script>
<style></style>