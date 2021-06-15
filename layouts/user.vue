<template>
  <div>
    <the-navbar-user></the-navbar-user>
    <Nuxt />
  </div>
</template>

<script>
import TheNavbarUser from "~/components/user/TheNavbarUser.vue";
export default {
  components: { TheNavbarUser }
};
</script>

<style></style>
