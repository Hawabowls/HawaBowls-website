<template>
  <main class="mt-16 pt-0.5">
    <thathero></thathero>
    <the-dishes></the-dishes>
  </main>
</template>

<script>
import TheDishes from "~/components/TheDishes.vue";
import Thathero from "~/components/v2/Thathero.vue";
import ThisHeroes from "~/components/v2/ThisHeroes.vue";
export default {
  components: { Thathero, CardDishes, TheDishes },
  layout: "test"
};
</script>

<style></style>
