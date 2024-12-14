<template>
  <v-app-bar app color="indigo" dark>
    <v-toolbar-title>
      <router-link to="/" style="text-decoration: none;">
        <v-img
          src="../assets/logo.png"
          alt="Ararat Restoranas"
          max-height="150"
          contain
        ></v-img>
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text to="/" class="animated bounceIn">Home</v-btn>
    <v-btn text to="/menu" class="animated bounceIn">Meniu</v-btn>
    <v-btn text to="/contact" class="animated bounceIn">Kontaktai</v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes bounceIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.v-btn.animated {
  animation: bounceIn 1s ease-out;
}
</style>
