<template lang="">
    <div>
          <h2 class="has-text-weight-bold">
            {{productItem.title}}
            <span
                @click="addCartItem(productItem)"
              class="tag is-primary is-pulled-right has-text-white"
            >Add to Cart</span>
          </h2>
          <p>
            {{productItem.description}}
          </p>
          <span class="has-text-primary has-text-weight-bold">
            <i class="fa fa-usd"></i> {{productItem.price}}
          </span>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["productItem"],
  methods: {
    // addCartItem(item) {
    //   this.$store.dispatch("addCartItem", item);
    // }
    ...mapActions(["addCartItem"]), //简写，映射到action
    ...mapActions({
      add: "addCartItem"
    })
  }
};
</script>
<style scoped>
.tag {
  cursor: pointer;
}
</style>
