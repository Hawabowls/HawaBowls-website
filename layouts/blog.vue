<template>
  <div>
    <Nuxt />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from "~/components/TheFooter.vue";
import TheHero from "~/components/TheHero.vue";
export default {
  components: { TheHero, TheFooter }
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
