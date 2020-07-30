<template>
  <div class="balance">
    <h2>Account Balance: {{ formatMoney(getTotal) }}</h2>
  </div>
</template>

<script>
    const mapGetters = require('vuex')['mapGetters'];

    module.exports = {
        computed: {
            ...mapGetters([
                'getTotal'
            ])
        }
    }
</script>

<style scoped>
.balance {
  background: #cbd5e0;
  text-align: center;
  padding: 10px;
}
</style>
