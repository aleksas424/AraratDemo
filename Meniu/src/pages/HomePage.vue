<template>
  <div class="background-image">
    <div class="dark-overlay"></div>
    <v-container>
      <v-row class="text-center" align="center" justify="center">
        <v-col cols="12" md="8">
          <h1 class="headline font-weight-bold animated fadeInUp">Welcome to Ararat Restoranas!</h1>
          <p class="subheading animated fadeInUp">Atraskite skaniausius patiekalus.</p>
          <v-btn
            color="primary"
            large
            class="start-order-btn animated bounceIn"
            to="/menu"
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
  height: 100vh;
  /* background-image: url('../assets/Restoranas.png'); */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/Restoranas.png')
}

.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); Adjust the opacity (0.5) to make it darker/lighter */
}

.start-order-btn {
  margin-top: 20px;
  font-size: 18px;
  animation: bounceIn 1s;
}

.headline {
  animation: fadeInUp 1s ease-in-out;
}

.subheading {
  animation: fadeInUp 1.5s ease-in-out;
}

/* Animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

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
</style>