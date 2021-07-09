<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
let store = require("store");
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({ addCart: "cart/addCart" }),
    async getCart() {
      if (this.$store.getters["cart/getCart"].length == 0) {
        if (store.get("cart")) {
          this.addCart(store.get("cart"));
        }
      }
    }
  },
  mounted() {
    this.getCart();
  }
};
</script>

<style lang="postcss">
::-webkit-scrollbar {
  width: 11px;

  &-track {
    @apply bg-primary-200 rounded;
  }
  &-thumb {
    @apply rounded-full bg-primary-500;
    &:hover {
      @apply bg-primary-600;
    }
  }
}
</style>
