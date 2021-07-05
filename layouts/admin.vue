<template>
  <div>
    <the-sidebar></the-sidebar>
    <div class="relative md:ml-64 bg-gray-50">
      <navbar></navbar>
      <!-- Header -->

      <Nuxt />
    </div>
  </div>
</template>
<script>
import Navbar from "../components/admin/Navbar.vue";
import TheSidebar from "../components/admin/TheSidebar.vue";
let store = require("store");
import { mapActions } from "vuex";
export default {
  name: "dashboard-page",
  components: {
    Navbar,
    TheSidebar
  },
  /*   middleware: "admin", */

  methods: {
    ...mapActions({ reconnect: "admin/reconnection" }),
    async getAdLogged() {
      if (store.get("tokenAd")) {
        const client = await this.reconnect(store.get("tokenAd"));

        if (client) {
          console.log(client);
        }
      } else {
        this.$router.push("/admin/login");
      }
    }
  },
  mounted() {
    this.getAdLogged();
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
