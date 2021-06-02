<template>
  <div class="container bg-primary-500">
    <h2 class="text-2xl text-gray-400">Commande en ligne</h2>

    <div class="flex">
      <base-button class="btn-big" text="à emporter"></base-button>

      <base-button class="btn-big" text="en livraison"></base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "../BaseButton.vue";
export default {
  components: { BaseButton }
};
</script>

<style></style>
