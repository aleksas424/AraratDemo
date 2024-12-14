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

        <!-- Patvirtinimo varnelė -->
        <div class="confirmation">
          <input
            type="checkbox"
            id="confirm-order"
            v-model="isConfirmed"
          />
          <label for="confirm-order">Patvirtinu užsakymą</label>
        </div>

        <!-- Rodyti padavėjui mygtukas -->
        <button
          class="checkout-button"
          :disabled="!isConfirmed"
          @click="$emit('show-order')"
        >
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
      isConfirmed: false, // Valdo varnelės būseną
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
  padding: 20px;
  background-color: #fdfdfd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 30px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.cart-summary {
  text-align: center;
  padding: 12px 20px;
  font-size: 20px;
  font-weight: 600;
  color: #444;
  background-color: #f7f7f7;
  border-radius: 8px;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cart-summary:hover {
  background-color: #f0f0f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.cart-details {
  margin-top: 20px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
  color: #444;
}

.cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
  transition: box-shadow 0.3s ease;
}

.cart-item:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.item-name {
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.item-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.quantity-btn {
  padding: 6px 10px;
  font-size: 14px;
  font-weight: bold;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.quantity-btn:hover {
  background-color: #0056b3;
}

.item-quantity {
  font-size: 16px;
  text-align: center;
  min-width: 30px;
}

.item-price {
  font-size: 16px;
  font-weight: 600;
  color: #555;
  text-align: right;
}

.remove-btn {
  padding: 6px 10px;
  font-size: 14px;
  color: white;
  background-color: #ff4d4d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-btn:hover {
  background-color: #ff1a1a;
}

.total {
  margin-top: 20px;
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  color: #222;
}

.checkout-button {
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  font-size: 18px;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
}

.checkout-button:hover {
  background-color: #218838;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.empty-cart {
  text-align: center;
  font-size: 16px;
  color: #888;
  margin-top: 15px;
}
.confirmation {
  display: flex;
  align-items: center;
  margin-top: 15px;
  font-size: 16px;
  color: #555;
  gap: 8px;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.checkout-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>