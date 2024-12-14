import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MenuPage from "../pages/MenuPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import DishDetail from "../components/DishDetail.vue"; // Import the DishDetail component

const routes = [
  { path: "/", component: HomePage },
  { path: "/menu", component: MenuPage },
  { path: "/contact", component: ContactPage },
  { 
    path: "/dish/:id", 
    component: DishDetail, 
    name: "DishDetail" 
  }, // Add the dynamic route for dish details
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
