<template>
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
  </template>
  
  <script>
  export default {
    name: 'Categories',
    props: ['categories', 'selectedCategory'],
    methods: {
      selectCategory(category) {
        this.$emit('select-category', category);
      }
    }
  };
  </script>
  