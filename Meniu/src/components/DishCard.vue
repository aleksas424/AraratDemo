<template>
    <div class="dish-card" @click="selectDish">
      <img :src="dish.image" :alt="dish.name" class="dish-image" />
      <div class="dish-info">
        <h3 class="dish-name">{{ dish.name }}</h3>
        <p class="dish-price">{{ dish.price }} €</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DishCard',
    props: ['dish'],
    methods: {
      selectDish() {
        this.$emit('select-dish', this.dish);
      }
    }
  };
  </script>
  