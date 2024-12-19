<template>
  <div class="background-image">
    <div class="dark-overlay"></div>
    <v-container>
      <v-row class="text-center" align="center" justify="center">
        <v-col cols="12" md="8">
          <h1 class="headline font-weight-bold animated fadeInUp">Autentiška. Gardu</h1>
          <p class="subheading animated fadeInUp">Skoniai, kurie kviečia sugrįžti.</p>
          <v-btn
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/Saskyk.jpg')
}



.headline {
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase; 
}



.start-order-btn {
  margin-top: 20px;
  font-size: 18px;
  border: 2px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
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