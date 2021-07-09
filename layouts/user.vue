<template>
  <div>
    <the-navbar-user></the-navbar-user>
    <Nuxt />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from "~/components/TheFooter.vue";
import TheNavbarUser from "~/components/user/TheNavbarUser.vue";
let store = require("store");
import { mapActions } from "vuex";
export default {
  components: { TheNavbarUser, TheFooter },
  head() {
    script: [{ src: "https://js.stripe.com/v3/" }];
  },
  methods: {
    ...mapActions({ reconnect: "user/reconnection", addCart: "cart/addCart" }),
    async getAdLogged() {
      if (store.get("token")) {
        if (!this.$store.getters["user/isAuthenticated"]) {
          const client = await this.reconnect(store.get("token"));

          if (client) {
            console.log(client);
          }
        }
      }
    },
    async getCart() {
      if (this.$store.getters["cart/getCart"].length == 0) {
        if (store.get("cart")) {
          this.addCart(store.get("cart"));
        }
      }
    }
  },
  mounted() {
    this.getAdLogged();
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
