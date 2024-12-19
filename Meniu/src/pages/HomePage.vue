<template>
  <div class="background-image">
    <div class="dark-overlay"></div>
    <v-container>
      <v-row class="text-center" align="center" justify="center">
        <v-col cols="12" md="8">
          <h1 class="headline font-weight-bold animated fadeInUp">
            <span class="highlight">Autentiška.</span> Gardu
          </h1>
          <p class="subheading animated fadeInUp">
            Skoniai, kurie <span class="italic">kviečia sugrįžti</span>.
          </p>
          <v-btn size="x-large"
            class="start-order-btn animated bounceIn"
            to="/menu"
            rounded
          >
            Pradėti Užsakymą
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.background-image {
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/Saskyk.jpg');
}

.headline {
  font-weight: 700;
  font-size: 40px; /* Padidintas dydis */
  text-transform: uppercase;
  line-height: 1.2; /* Gražesnis tarpas tarp eilučių */
}

.highlight {
  color: #ff7e5f; /* Akcento spalva */
  text-shadow: 1px 1px 10px rgba(255, 126, 95, 0.5); /* Švytėjimas */
}

.subheading {
  font-size: 18px;
  font-weight: 300;
  margin-top: 10px;
}

.italic {
  font-style: italic; /* Dėmesį traukiantis stilius */
}

.start-order-btn {
  margin-top: 30px;
  font-size: 18px;
  padding: 10px 30px;
  border: 2px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
  transition: all 0.3s ease-in-out;
}

.start-order-btn:hover {
  background-color: #ff7e5f;
  color: #ffffff;
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .headline {
    font-size: 30px;
  }

  .subheading {
    font-size: 16px;
  }

  .start-order-btn {
    font-size: 16px;
    padding: 8px 20px;
  }
}
</style>
