<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import Navigation from "./components/Navigation";
import money from "./mixins/money";

Vue.mixin(money);

export default {
  name: "App",
  mixins: [money],
  components: {
    Navigation
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

a {
  text-decoration: none;
}
</style>
