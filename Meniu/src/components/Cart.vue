<template>
  <div class="cart">
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
  methods: {
    removeFromCart(item) {
      this.$emit("remove", item);
    },
    checkout() {
      this.$emit("checkout");
    },
    updateQuantity(item, amount) {
      const newQuantity = item.quantity + amount;
      if (newQuantity > 0) {
        this.$emit("update-quantity", { item, quantity: newQuantity });
      }
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  color: #333;
}

.cart h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #555;
  text-align: center;
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
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.item-name {
  font-size: 16px;
  flex: 2;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 5px;
  flex: 1;
}

.quantity-btn {
  padding: 5px;
  font-size: 14px;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.quantity-btn:hover {
  background-color: #bbb;
}

.item-quantity {
  font-size: 16px;
  text-align: center;
  width: 30px;
}

.item-price {
  font-size: 16px;
  flex: 1;
  color: #888;
  text-align: right;
}

.remove-btn {
  padding: 5px 10px;
  font-size: 14px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #ff1a1a;
}

.total {
  text-align: right;
  font-size: 18px;
  margin-top: 20px;
}

.checkout-btn {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.checkout-btn:hover {
  background-color: #45a049;
}

.empty-cart {
  text-align: center;
  font-size: 16px;
  color: #888;
}
</style>
