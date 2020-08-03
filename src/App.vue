<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
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
import TotalBar from "./components/TotalBar";
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
    dummyTransactionData: {
      first: {
        type: "debit",
        description: "Eating Out",
        amount: 3500
      },
      second: {
        type: "debit",
        description: "Weekly City Transport",
        amount: 7500
      },
      third: {
        type: "credit",
        description: "Payroll",
        amount: 100000
      },
    }
  }),

  mounted() {
    for (const transaction in this.dummyTransactionData) {
      this.$store.dispatch("addTransaction", this.dummyTransactionData[transaction]);
    }
  },

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
}

h1 {
  font-family: sofia-pro, sans-serif;
  font-weight: 600;
  font-style: normal;
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
