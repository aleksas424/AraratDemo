<template>
  <v-app-bar app dark>
    <v-toolbar-title>
      <div style="width: 100px;">
        <router-link to="/" style="text-decoration: none;">
          <v-img
            src="../assets/logo.png"
            alt="Ararat Restoranas"
            max-width="150px"
            contain
          ></v-img>
        </router-link>
      </div>
    </v-toolbar-title>

    <!-- Meniu tik kompiuteriuose -->
    <div class="d-none d-md-flex" style="margin-right: auto; display: flex; gap: 5px;">
      <v-btn text to="/" class="animated bounceIn">Home</v-btn>
      <v-btn text to="/menu" class="animated bounceIn">Meniu</v-btn>
      <v-btn text to="/contact" class="animated bounceIn">Kontaktai</v-btn>
    </div>

    <!-- Hamburger meniu tik mobiliajame -->
    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
  </v-app-bar>

  <!-- Navigacijos dėžė mobiliems įrenginiams -->
  <v-navigation-drawer v-model="drawer" temporary app>
    <v-list>
      <v-list-item link to="/">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/menu">
        <v-list-item-title>Meniu</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/contact">
        <v-list-item-title>Kontaktai</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
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
