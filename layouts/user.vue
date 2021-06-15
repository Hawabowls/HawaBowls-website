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
export default {
  components: { TheNavbarUser, TheFooter }
};
</script>

<style></style>
