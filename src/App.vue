<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "App",

  components: {
    Navigation
  },

  data: () => ({
    //
  })
};
</script>

<style>
  * {
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    color: #444;
  }

  a {
    text-decoration: none;
  }
</style>