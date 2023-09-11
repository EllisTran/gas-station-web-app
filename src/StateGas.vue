<template>
    <info-card :data="data"></info-card>
</template>
<script>
export default {
  props: {
    state: { type: String, required: true},
    currency: { type: String, required: true, default: 'usd' },
    diesel: { type: Number, required: true },
    gasoline: { type: Number, required: true },
    midGrade: { type: Number, required: true },
    name: { type: String, required: true },
    premium: { type: Number, required: true },
  },
  data() {
    return {
      data: {
        name: this.name,
        currency: this.currency,
        gasoline: this.gasoline,
        midGrade: this.midGrade,
        premium: this.premium,
        diesel: this.diesel,
      }
    }
  },
  methods: {}
}
</script>

<style></style>