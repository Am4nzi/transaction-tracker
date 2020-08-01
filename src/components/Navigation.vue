<template>
  <v-app-bar app color="#15233f" dark cols="12" sm="8" md="4" lg="8" xl="4">
    <v-spacer></v-spacer>
    <router-link to="/transactions">
      <h1 class="white--text text-uppercase">Transaction Tracker</h1>
    </router-link>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style scoped>
  h1 {
    letter-spacing: 10px;
  }
</style>
