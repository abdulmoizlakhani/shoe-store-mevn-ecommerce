<template>
  <div v-if="cartItems.length > 0">
    <ProductsListItem
      :key="product.id"
      v-for="product in cartItems"
      :product="product"
    />
  </div>
  <p v-else>You haven't added anything to your cart yet!</p>
</template>

<script>
import ProductsListItem from "./ProductsListItem.vue";

export default {
  name: "ProductsList",
  components: { ProductsListItem },
  props: ["cartItems"],
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
};
</script>
