<template>
  <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <ul v-if="cartItems.length>0">
      <li class="cart-item" v-for="item in cartItems" :key="item.id">
        <CartListItem :cartItem="item"></CartListItem>
      </li>
      <div class="cart-details">
        <p>
          Total Quantity:
          <span class="has-text-weight-bold">{{cartQuantity}}</span>
        </p>
        <p class="cart-remove-all--text" @click="removeAllCartItems">
          <i class="fa fa-trash"></i>Remove all
        </p>
      </div>
    </ul>
    <p
      v-if="!cartItems.length"
      class="cart-empty-text has-text-centered"
    >Add some items to the cart!</p>
    <button :disabled="!cartItems.length" @click="checkoutCart" class="button is-primary">
      Checkout (
      <span class="has-text-weight-bold">${{cartTotal}}</span>)
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartQuantity"])
  },
  methods: {
    ...mapActions(["removeAllCartItems",'checkoutCart'])
  },
  created() {
    this.$store.dispatch("getCartItems");
  }
};
</script>

<style scoped>
</style>