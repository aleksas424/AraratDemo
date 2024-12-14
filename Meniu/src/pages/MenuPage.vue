<template>
  <div class="menu-page">
    <!-- Kategorijos -->
    <div class="categories">
      <button
        v-for="(category, index) in categories"
        :key="index"
        :class="{ active: selectedCategory === category }"
        @click="selectCategory(category)"
        class="category-item"
      >
        {{ category }}
      </button>
    </div>

    <!-- Patiekalų tinklas -->
    <div class="dishes-grid">
      <div class="dish-card" v-for="(dish, index) in filteredDishes" :key="index" @click="selectDish(dish)">
        <img :src="dish.image" :alt="dish.name" class="dish-image" />
        <div class="dish-info">
          <h3 class="dish-name">{{ dish.name }}</h3>
          <p class="dish-price">{{ dish.price }} €</p>
        </div>
      </div>
    </div>

    <!-- Patiekalo Detalių Modalas -->
    <div v-if="selectedDish" class="dish-detail-modal">
      <DishDetail :dish="selectedDish" @close="closeDishDetail" @add-to-cart="addToCart" />
    </div>

    <!-- Krepšelio Komponentas -->
    <Cart 
      :cartItems="cart" 
      :totalPrice="totalPrice" 
      @remove="removeFromCart" 
      @update-quantity="updateCartQuantity"
      @show-order="showOrderDetails" 
      class="cart-component"
    />

    <!-- Užsakymo Detalių Modalas -->
    <OrderDetailsModal
      v-if="showOrderModal"
      :orderDetails="cart"
      :totalPrice="totalPrice"
      @close="showOrderModal = false"
    />
  </div>
</template>

<script>
import Cart from '../components/Cart.vue';
import DishDetail from '../components/DishDetail.vue';
import OrderDetailsModal from '../components/OrderDetailsModal.vue';

export default {
  name: "MenuPage",
  components: {
    Cart,
    DishDetail,
    OrderDetailsModal
  },
  data() {
    return {
      categories: [
        "Visi", "Pusryčiai", "Gėrimai", "Sriubos", "Salotos", "Šašlykai", "Karšti patiekalai", "Žuvies patiekalai", 
        "Chačapuri", "Makaronai", "Miltiniai patiekalai", "Užkandžiai", "Desertai",
      ],
      selectedCategory: "Visi",
      selectedDish: null,
      dishes: [
        {
          name: "Prawn Raisukaree",
          price: 12.0,
          image: "../src/assets/Memas.png",
          category: "Karšti patiekalai",
          description: "A spicy and flavorful prawn curry with aromatic spices.",
        },
        {
          name: "Firecracker Prawn",
          price: 11.0,
          image: "../src/assets/Memas.png",
          category: "Žuvies patiekalai",
          description: "Crispy prawns with a hot and tangy firecracker sauce.",
        },
        {
          name: "Caesar Salad",
          price: 8.0,
          image: "../src/assets/memas.png",
          category: "Salotos",
          description: "A classic Caesar salad with fresh lettuce, croutons, and Parmesan cheese.",
        },
        {
          name: "Spaghetti Carbonara",
          price: 10.0,
          image: "../src/assets/memas.png",
          category: "Makaronai",
          description: "Creamy spaghetti with pancetta, Parmesan, and black pepper.",
        },
        {
          name: "Vegetable Soup",
          price: 6.0,
          image: "../src/assets/memas.png",
          category: "Sriubos",
          description: "A hearty vegetable soup with fresh seasonal ingredients.",
        },
        {
          name: "Beef Skewers",
          price: 14.0,
          image: "../src/assets/memas.png",
          category: "Šašlykai",
          description: "Grilled beef skewers with smoky flavor and tender texture.",
        },
        {
          name: "Chocolate Cake",
          price: 5.0,
          image: "../src/assets/memas.png",
          category: "Desertai",
          description: "Decadent chocolate cake with a rich and moist texture.",
        },
        {
          name: "Cheese Platter",
          price: 15.0,
          image: "../src/assets/memas.png",
          category: "Užkandžiai",
          description: "A selection of fine cheeses served with crackers and fruit.",
        },
        {
          name: "Tomato Soup",
          price: 7.0,
          image: "../src/assets/memas.png",
          category: "Sriubos",
          description: "A rich and creamy tomato soup with fresh basil.",
        },
        {
          name: "Chicken Skewers",
          price: 13.0,
          image: "../src/assets/memas.png",
          category: "Šašlykai",
          description: "Juicy grilled chicken skewers with a smoky flavor.",
        },
        {
          name: "Margarita Pizza",
          price: 9.0,
          image: "../src/assets/memas.png",
          category: "Užkandžiai",
          description: "Classic pizza with mozzarella, tomato sauce, and fresh basil.",
        },
        {
          name: "Fruit Salad",
          price: 6.0,
          image: "../src/assets/memas.png",
          category: "Desertai",
          description: "A refreshing mix of seasonal fruits.",
        },
        {
          name: "Fried Calamari",
          price: 11.0,
          image: "../src/assets/memas.png",
          category: "Žuvies patiekalai",
          description: "Crispy fried calamari served with a tangy dipping sauce.",
        },
      ],
      cart: [],
      showOrderModal: false, // Modal būklė
    };
  },
  computed: {
    filteredDishes() {
      if (this.selectedCategory === "Visi") {
        return this.dishes;
      }
      return this.dishes.filter((dish) => dish.category === this.selectedCategory);
    },
    totalPrice() {
      return this.cart.reduce((total, dish) => total + (dish.price * dish.quantity), 0);
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
    selectDish(dish) {
      this.selectedDish = dish;
    },
    closeDishDetail() {
      this.selectedDish = null;
    },
    addToCart(dish) {
  // Patikrinkite, ar ši prekė jau yra krepšelyje
  const existingDish = this.cart.find(item => item.name === dish.name);
  if (existingDish) {
    // Jei jau yra, tiesiog padidinkite kiekį pagal perduotą kiekį
    existingDish.quantity += dish.quantity;
  } else {
    // Jei nėra, pridėkite naują prekę su perduotu kiekiu
    this.cart.push({ ...dish, quantity: dish.quantity });
  }

    },
    removeFromCart(dish) {
      this.cart = this.cart.filter(item => item !== dish); // Remove from cart
    },
    updateCartQuantity({ item, amount }) {
  const dish = this.cart.find(cartItem => cartItem.name === item.name);
  if (dish) {
    // Atnaujinkite kiekį
    const newQuantity = dish.quantity + amount;
    if (newQuantity > 0) {
      dish.quantity = newQuantity;
    } else {
      // Jei kiekis pasiekia 0, pašaliname prekę
      this.cart = this.cart.filter(cartItem => cartItem !== dish);
    } 
    // No need to remove the dish if quantity is 0, we just prevent it from going below 1.
  }


    },
    showOrderDetails() {
      this.showOrderModal = true; // Rodo modalą su užsakymo detalėmis
    },
  },
};
</script>

<style scoped>
.menu-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.categories {
  display: flex;
  padding-bottom: 10px;
  gap: 10px;
  overflow-x: auto;
  white-space: nowrap;
}

.category-item {
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: #f9f9f9;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s, transform 0.2s;
}

.category-item.active {
  background-color: #ffe600;
  font-weight: bold;
  transform: scale(1.1);
}

.dishes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 15px;
}

.dish-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
  position: relative;
  transition: box-shadow 0.3s;
}

.dish-card:hover {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.dish-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.dish-info {
  padding: 10px;
}

.dish-name {
  font-size: 16px;
  margin: 5px 0;
}

.dish-price {
  color: #666;
  font-size: 14px;
}

.dish-detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.cart-component {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 15px;
  cursor: pointer;
}
</style>
