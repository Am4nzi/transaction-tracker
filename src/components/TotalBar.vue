<template>
  <div>
    <v-container fluid>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="8" md="4" lg="4" xl="12">
          <v-alert dense outlined type="info">
            <h2>Account Balance: {{ formatMoney(getTotal) }}</h2>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];

module.exports = {
  computed: {
    ...mapGetters(["getTotal"])
  }
};
</script>
