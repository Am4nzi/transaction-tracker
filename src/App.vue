<template>
  <v-app>
    <Navigation />
    <v-main>
      <TotalBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import Navigation from "./components/Navigation";
import TotalBar from './components/TotalBar';
import money from "./mixins/money";

Vue.mixin(money);

export default {
  name: "App",
  mixins: [money],
  components: {
    Navigation,
    TotalBar
  },

  data: () => ({
    //
  }),

  mounted() {
    // console.log(Money.formatMoney);
  }
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
}

h1 {
  color: #444;
}

h2 {
  color: #444;
  font-weight: 300;
  font-size: 1.2rem;
}

a {
  text-decoration: none;
}
</style>
