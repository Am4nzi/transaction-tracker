<template>
  <div>
    <v-container fluid>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="8" md="6" lg="5" xl="4">
          <v-alert dense outlined border="bottom" type="info">
            <h2 class="primary--text">
              Account Balance: {{ formatMoney(getTotal) }}
            </h2>
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
