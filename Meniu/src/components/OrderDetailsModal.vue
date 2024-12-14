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
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.modal-content h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #444;
  font-weight: 600;
}

.order-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.order-table th,
.order-table td {
  padding: 12px 15px;
  text-align: center;
  border: 1px solid #ddd;
}

.order-table th {
  background-color: #f4f4f4;
  font-size: 16px;
  font-weight: 600;
  color: #555;
}

.order-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.order-table tr:hover {
  background-color: #f1f1f1;
  transition: background-color 0.3s ease;
}

.order-total {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
  text-align: right;
}

button {
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

@media (max-width: 600px) {
  .modal-content {
    padding: 20px;
  }

  .order-table th,
  .order-table td {
    font-size: 14px;
  }

  button {
    width: 100%;
  }
}
</style>