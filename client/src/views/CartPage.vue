<template>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>
    <ProductsList :cartItems="cartItems" />
    <h3 id="total-price">Total: ${{ totalPrice }}</h3>
    <button id="checkout-button">Proceed to Checkout</button>
  </div>
</template>

<script>
import { cartItems } from "../fake-data";
import ProductsList from "../components/ProductsList.vue";

export default {
  name: "CartPage",
  data() {
    return {
      cartItems,
    };
  },
  components: { ProductsList },
};
</script>

<style scoped>
h1 {
  border-bottom: 1px solid black;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  width: 100%;
}
</style>
