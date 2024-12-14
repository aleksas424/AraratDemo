<template>
  <div class="cart">
    <!-- Krepšelio užsakymų skaičius -->
    <div class="cart-summary" @click="toggleCartDetails">
      🛒 Užsakymų skaičius: <strong>{{ cartItemsCount }}</strong>
    </div>

    <!-- Detali informacija apie krepšelį -->
    <div v-if="showDetails" class="cart-details">
      <h2>Krepšelis</h2>
      <div v-if="cartItems.length > 0">
        <ul class="cart-items">
          <li v-for="item in cartItems" :key="item.name" class="cart-item">
            <span class="item-name">{{ item.name }}</span>
            <div class="item-controls">
              <button class="quantity-btn" @click="updateQuantity(item, -1)">-</button>
              <span class="item-quantity">{{ item.quantity }}</span>
              <button class="quantity-btn" @click="updateQuantity(item, 1)">+</button>
            </div>
            <span class="item-price">{{ (item.price * item.quantity).toFixed(2) }} €</span>
            <button class="remove-btn" @click="removeFromCart(item)">Šalinti</button>
          </li>
        </ul>
        <div class="total">
          <strong>Viso: {{ totalPrice.toFixed(2) }} €</strong>
        </div>
        <button class="checkout-button" @click="$emit('show-order')">
          Rodyti padavėjui
        </button>
      </div>
      <p v-else class="empty-cart">Krepšelis tuščias</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartItems: {
      type: Array,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      showDetails: false, // Valdo krepšelio detalios informacijos rodymą
    };
  },
  computed: {
    cartItemsCount() {
      // Suskaičiuoja bendrą užsakymų skaičių
      return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    },
  },
  methods: {
    toggleCartDetails() {
      this.showDetails = !this.showDetails; // Perjungia detalių rodymą
    },
    removeFromCart(item) {
      this.$emit("remove", item);
    },
    updateQuantity(item, amount) {
      const newQuantity = item.quantity + amount;
      if (newQuantity > 0) {
        this.$emit("update-quantity", { item, amount });
      }
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 15px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  max-width: 600px;
  margin: 20px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.cart-summary {
  text-align: center;
  padding: 15px;
  font-size: 20px;
  cursor: pointer;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.cart-summary:hover {
  background-color: #e9ecef;
}

.cart-details {
  margin-top: 20px;
}

.cart h2 {
  font-size: 28px;
  color: #444;
  text-align: center;
  margin-bottom: 20px;
}

.cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.item-name {
  font-size: 18px;
  font-weight: 500;
  flex: 2;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.quantity-btn {
  padding: 8px 12px;
  font-size: 16px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.quantity-btn:hover {
  background-color: #45a049;
}

.item-quantity {
  font-size: 18px;
  text-align: center;
  width: 40px;
  font-weight: bold;
}

.item-price {
  font-size: 18px;
  flex: 1;
  color: #555;
  text-align: right;
  font-weight: 600;
}

.remove-btn {
  padding: 6px 12px;
  font-size: 14px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #ff1a1a;
}

.total {
  text-align: right;
  font-size: 20px;
  margin-top: 20px;
  color: #222;
  font-weight: bold;
}

.checkout-button {
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.checkout-button:hover {
  background-color: #0056b3;
}

.empty-cart {
  text-align: center;
  font-size: 18px;
  color: #888;
  margin-top: 20px;
}
</style>