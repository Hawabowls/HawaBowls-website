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

export default {
  name: "dashboard-page",
  components: {
    Navbar,
    TheSidebar,
  },
  middleware: "admin",

  methods: {
    ...mapActions({ reconnect: "admin/reconnection" }),
  },
  mounted() {},
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
