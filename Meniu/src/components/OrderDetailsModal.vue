<template>
    <div class="order-details-modal">
      <div class="modal-content">
        <h2>Užsakymo detalės</h2>
        <table class="order-table">
          <thead>
            <tr>
              <th>Patiekalas</th>
              <th>Kiekis</th>
              <th>Kaina</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in orderDetails" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ (item.quantity * item.price).toFixed(2) }} €</td>
            </tr>
          </tbody>
        </table>
        <div class="order-total">
          <strong>Viso: {{ totalPrice }} €</strong>
        </div>
        <button @click="$emit('close')">Uždaryti</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "OrderDetailsModal",
    props: {
      orderDetails: {
        type: Array,
        required: true,
      },
      totalPrice: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .order-details-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }
  
  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 80%;
    max-width: 600px;
  }
  
  .order-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  .order-table th, .order-table td {
    border: 1px solid #ddd;
    padding: 10px;
  }
  
  .order-total {
    margin-top: 20px;
    font-size: 18px;
  }
  </style>