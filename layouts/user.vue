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
  components: { TheNavbarUser, TheFooter },
  head() {
    script: [{ src: "https://js.stripe.com/v3/" }];
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
