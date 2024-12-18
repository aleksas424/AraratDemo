<template>
  <div class="dish-detail">
    <img :src="dish.image" :alt="dish.name" class="dish-image" />
    <div class="dish-info">
      <h1 class="dish-name">{{ dish.name }}</h1>
      <p class="dish-price">{{ dish.price }} €</p>
      <p class="dish-description">{{ dish.description }}</p>

      <div class="quantity-selector">
        <label for="quantity">Kiekis:</label>
        <button @click="updateQuantity(-1)" :disabled="quantity <= 1" class="quantity-btn">-</button>
        <input 
          id="quantity" 
          type="number" 
          v-model.number="quantity" 
          min="1" 
          class="quantity-input" 
        />
        <button @click="updateQuantity(1)" class="quantity-btn">+</button>
      </div>

      <div class="action-buttons">
        <button class="back-btn" @click="$emit('close')">Grįžti į meniu</button>
        <button class="add-to-cart" @click="addToCart">Įdėti į krepšelį</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dish: Object,
  },
  data() {
    return {
      quantity: 1, // Numatytoji reikšmė
    };
  },
  methods: {
    updateQuantity(amount) {
      const newQuantity = this.quantity + amount;
      if (newQuantity >= 1 && !isNaN(newQuantity)) {
        this.quantity = newQuantity;
      }
    },
    addToCart() {
      if (this.quantity > 0 && !isNaN(this.quantity)) {
        this.$emit("add-to-cart", { ...this.dish, quantity: this.quantity });
      } else {
        alert("Pasirinkite kiekį, kuris yra bent 1.");
      }
    },
  },
};
</script>

<style scoped>
/* Pagrindinis konteineris */
.dish-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

/* Paveikslėlis */
.dish-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

/* Informacijos blokas */
.dish-info {
  text-align: center;
}

.dish-name {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
}

.dish-price {
  font-size: 22px;
  color: #ff6347; /* Šilkinė oranžinė spalva */
  font-weight: bold;
  margin-bottom: 15px;
}

.dish-description {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

/* Kiekio pasirinkimas */
.quantity-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.quantity-selector label {
  margin-right: 10px;
  font-weight: bold;
}

.quantity-input {
  width: 60px;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin: 0 8px;
}

.quantity-btn {
  padding: 5px 12px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.quantity-btn:hover {
  background-color: #d4d4d4;
  transform: scale(1.1);
}

/* Mygtukų stilius */
.action-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.back-btn,
.add-to-cart {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn {
  background-color: #ffcd00;
  color: #333;
}

.back-btn:hover {
  background-color: #e6b800;
}

.add-to-cart {
  background-color: #28a745;
  color: #fff;
}

.add-to-cart:hover {
  background-color: #218838;
  transform: translateY(-3px);
}

/* Responsyvus dizainas */
@media (max-width: 600px) {
  .dish-detail {
    padding: 50px 10px;
  }

  .dish-name {
    font-size: 24px;
  }

  .dish-price {
    font-size: 18px;
  }

  .quantity-input {
    width: 50px;
  }
}
</style>
