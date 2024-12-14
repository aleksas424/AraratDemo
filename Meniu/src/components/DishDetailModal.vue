<template>
  <div class="dish-detail-modal">
    <DishDetail :dish="selectedDish" @close="closeDishDetail" @add-to-cart="addToCart" />
  </div>
</template>

<script>
import DishDetail from "../components/DishDetail.vue";

export default {
  name: "DishDetailModal",
  components: {
    DishDetail,
  },
  props: {
    selectedDish: Object,
  },
  methods: {
    closeDishDetail() {
      this.$emit("close-dish-detail");
    },
    addToCart(dishWithQuantity) {
      this.$emit("add-to-cart", dishWithQuantity);
    },
  },
};
</script>

<style scoped>
.dish-detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  padding: 20px;
}

.dish-detail-modal > * {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  width: 100%;
  max-width: 500px;
}
</style>
