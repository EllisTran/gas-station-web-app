<template>
  <div class="cardContainer">
    <div class="card">
      <div v-for="(value, key) in data" :key="value"><span style="font-weight: bold;">{{ key !== 'name' ? key.charAt(0).toUpperCase() + key.slice(1) : ''
      }} </span> <span :style="key === 'name' ? 'font-weight: bold' : ''"><span v-if="(!isNaN(value))">$</span>{{ value }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true }
  },
  data() {
    return {}
  }
}
</script>

<style>
.card {
  margin: 0 auto;
}

.cardContainer {
  /* border: 1px solid black; */
  border-radius: 0.5em;
  display: flex;
  width: 200px;
  padding: 10px;
  margin: 10px;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
</style>