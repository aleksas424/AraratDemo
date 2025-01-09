<template>
  <v-container>
    <h1>Kontaktai</h1>
    <p>Telefonas: <a href="tel:+37060000000">+370 600 00000</a></p>
    <p>El. paštas: <a href="mailto:info@ararat-restoranas.lt">info@.lt</a></p>

    <v-divider class="my-4"></v-divider>

    <h2>Renginių organizavimas</h2>
    <p>
      Artėja vestuvės, krikštynos, gimtadienis ar tiesiog maloni šventė, o Jūs neturite laiko rūpintis maisto ruošimu? 
      Šventinius rūpesčius palikite mums!
    </p>
    <p>
      imageimport.meta.url).href,

    </p>
    <p>
      Teiraukitės telefonais:
      <br />
      Vilniuje: <a href="tel:+37000000000">8 000000000</a>
      <br />
      Šiauliuose: <a href="tel:+370800000">8 00000000</a>
      <br />
      El. paštu: <a href="mailto:">@-restoranas.lt</a>
    </p>

    <v-row class="mt-4">
      <v-col cols="12" md="6" lg="4" v-for="(image, index) in foodImages" :key="index">
        <v-img :src="image" alt="Maisto nuotrauka" class="rounded elevation-2" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Importuojame nuotraukas tiesiogiai
import maistas1 from '@/assets/maistas1.png';
import maistas2 from '@/assets/maistas2.png';
import maistas3 from '@/assets/maistas3.png';

export default {
  name: "ContactPage",
  data() {
    return {
      // Pridedame nuotraukas į masyvą
      foodImages: [maistas1, maistas2, maistas3],
    };
  },
};
</script>

<style scoped>
h1, h2 {
  font-size: 1.8em;
  margin-bottom: 1rem;
}
p {
  margin: 0.5rem 0;
  line-height: 1.5;
}
</style>
