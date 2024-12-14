<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router"; // Import the router hook for condition checking

export default {
  components: {
    Header,
    Footer,
  },
  
};
</script>

<style>
/* General styles */
body {
  font-family: 'Roboto', sans-serif;
  background-color: #fafafa;
  transition: background-color 0.3s ease-in-out;
}
.v-application {
  transition: background-color 0.3s ease-in-out;
}
/* Užtikrina, kad visos aplikacijos dalys būtų tinkamos skirtingiems įrenginiams */

.v-application {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  transition: background-color 0.3s ease-in-out;
}


</style>
