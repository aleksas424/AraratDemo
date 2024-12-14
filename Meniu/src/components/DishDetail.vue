<template>
  <div class="dish-detail">
    <img :src="dish.image" :alt="dish.name" class="dish-image" />
    <div class="dish-info">
      <h1 class="dish-name">{{ dish.name }}</h1>
      <p class="dish-price">{{ dish.price }} €</p>
      <p class="dish-description">{{ dish.description }}</p>

      <div class="quantity-selector">
        <label for="quantity">Kiekis:</label>
        <button @click="updateQuantity(-1)" :disabled="quantity <= 1">-</button>
        <input 
          id="quantity" 
          type="number" 
          v-model.number="quantity" 
          min="1" 
          class="quantity-input" 
        />
        <button @click="updateQuantity(1)">+</button>
      </div>

      <button class="back-btn" @click="$emit('close')">Grįžti į meniu</button>
      <button class="add-to-cart" @click="addToCart">Įdėti į krepšelį</button>
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
    // Uždrausti neigiamas reikšmes ir įsitikinti, kad tai būtų skaičius
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
.dish-detail {
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
}

.dish-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.dish-info {
  margin-top: 20px;
}

.dish-name {
  font-size: 22px;
  font-weight: bold;
}

.dish-price {
  color: #666;
  font-size: 18px;
  margin: 10px 0;
}

.dish-description {
  font-size: 16px;
  margin-bottom: 20px;
  color: #333;
}

.quantity-selector {
  margin-bottom: 20px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-input {
  width: 60px;
  padding: 5px;
  font-size: 16px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 10px;
}

.quantity-btn {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
}

.quantity-btn:hover {
  background-color: #e0e0e0;
}

.back-btn {
  padding: 10px 20px;
  background-color: #ffe600;
  color: #000;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
}

.add-to-cart {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

.add-to-cart:hover {
  background-color: #218838;
}
</style>
