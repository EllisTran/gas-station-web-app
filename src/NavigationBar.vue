<template>
  <div class="header">

    <h1 style="margin: 0; text-align: center;">GasCheck</h1>
    <h2>You can use this app to look up average gas prices cities in a state or the average of every US state</h2>
    <div class="navBar">
      <div class="navBarItem" @click="handleOnClickActiveNavigationTag('average-city-gas-prices-in-a-state')"
        :class="activeNavigationTag === 'average-city-gas-prices-in-a-state' ? 'active' : ''">Average City Gas Prices in a State</div>
      <div class="navBarItem" @click="handleOnClickActiveNavigationTag('average-state-gas-prices')"
        :class="activeNavigationTag === 'average-state-gas-prices' ? 'active' : ''">Average State Gas Prices</div>
    </div> 
  </div>

</template>

<script>
export default {
  props: {
    activeNavigationTag: { type: String, required: true }
  },
  data(){
    return {};
  },
  methods: {
    handleOnClickActiveNavigationTag(navigationTag) {
      this.$emit('active-nav-tag', navigationTag)
    }
  }
}
</script>

<style>

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
.header {
  background-color: #213555;
  width: 100%;
  color: white;
}
.active {
  background-color: #4F709C;
}

</style>