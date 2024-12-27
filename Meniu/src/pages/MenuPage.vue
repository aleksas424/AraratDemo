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
        <img src="https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=" :alt="dish.name" class="dish-image"  />
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
          name: "Basturma",
          price: 6.0,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
          category: "Užkandžiai",
          description: "Vytinta jautiena arba jautienos dešra armėniškų prieskonių mišinyje, pagaminta pagal autentišką šeimos receptą",
        },
        {
          name: "Sūrių rinkinys",
          price: 8.0,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
          category: "Užkandžiai",
          description: "Brinza, pelėsinis sūris, rūkytas sūris, vynuogės, lavašo traškučiai",
        },
        {
          name: "Pikantiškos sūrio spurgytės",
          price: 7.0,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
          category: "Užkandžiai",
          description: "Vytinta jautiena arba jautienos dešra armėniškų prieskonių mišinyje, pagaminta pagal autentišką šeimos receptą",
        },
        {
          name: "Lavašo traškučiai",
          price: 4.0,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
          category: "Užkandžiai",
          description: "Crispy prawns with a hot and tangy firecracker sauce.",
        },
        {
          name: "Kepta duona su česnaku ir sūriu",
          price: 5.0,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
          category: "Užkandžiai",
          description: "A classic Caesar salad with fresh lettuce, croutons, and Parmesan cheese.",
        },
        {
          name: "Lavašas",
          price: 2.5,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
          category: "Užkandžiai",
          description: "Creamy spaghetti with pancetta, Parmesan, and black pepper.",
        },
        {
          name: "Traškieji svogūnu/kalmarų žiedai",
          price: 6.0,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
          category: "Užkandžiai",
          description: "A hearty vegetable soup with fresh seasonal ingredients.",
        },
        {
          name: "Užkanda prie degtinės",
          price: 10.0,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
          category: "Užkandžiai",
          description: "Grilled beef skewers with smoky flavor and tender texture.",
        },
        {
          name: "Užkanda prie alaus",
          price: 15.0,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
          category: "Desertai",
          description: "Decadent chocolate cake with a rich and moist texture.",
        },
        {
          name: "Charčio su aviena",
          price: 8.0,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
          category: "Sriubos",
          description: "A selection of fine cheeses served with crackers and fruit.",
        },
        {
          name: "Charčio su jautiena",
          price: 6.0,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
          category: "Sriubos",
          description: "A rich and creamy tomato soup with fresh basil.",
        },
        {
          name: "Chašlama su aviena",
          price: 8.0,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
          category: "Sriubos",
          description: "Juicy grilled chicken skewers with a smoky flavor.",
        },
        {
          name: "Armėniški barščiai",
          price: 6.0,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
          category: "Sriubos",
          description: "Classic pizza with mozzarella, tomato sauce, and fresh basil.",
        },
        {
          name: "Akroška",
          price: 5.0,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
          category: "Sriubos",
          description: "A refreshing mix of seasonal fruits.",
        },
        {
          name: "Fried Calamari",
          price: 11.0,
          image: "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=1024x1024&w=is&k=20&c=-cx2OEvdsCqs2TPK_EttPr7QZoTmeNww-Wa2njBeCR0=",
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
  scrollbar-width: thin;
  scrollbar-color: #ddd transparent;
}

.categories::-webkit-scrollbar {
  height: 6px;
}

.categories::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 10px;
}

.category-item {
  padding: 30px 45px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: #f9f9f9;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  text-align: center;
  min-width: 120px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.category-item:hover {
  background-color: #ffe600;
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.category-item.active {
  background-color: #ffe600;
  font-weight: bold;
  transform: scale(1.1);
}

.dishes-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 15px;
  padding: 20px 0;
}

.dish-card {
  border: 1px solid #ddd;
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
  position: relative;
  transition: box-shadow 0.3s, transform 0.2s;
  margin: 10px 0px;
}

.dish-card:hover {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.dish-image {
  width: 100%;
  height: 250px;
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

@media (max-width: 768px) {
  .dishes-grid {
    grid-template-columns: repeat(2, 1fr); /* Sumažinkite tinklo stulpelių skaičių */
    gap: 10px;
  }

  .dish-card {
    margin: 5px 0;
  }

  .dish-image {
    height: 150px; /* Sumažinkite paveikslėlio aukštį */
  }

  .cart-component {
    bottom: 10px;
    right: 10px;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .dishes-grid {
    grid-template-columns: 1fr; /* Vienas stulpelis */
  }

  .dish-card {
    margin: 5px 0;
  }

  .category-item {
    font-size: 10px;
    padding: 8px 15px;
  }

  .cart-component {
    font-size: 12px;
    padding: 8px;
  }
}
</style>