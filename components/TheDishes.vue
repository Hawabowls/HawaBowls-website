<template>
  <section class="container mx-auto">
    <div class="flex flex-col">
      <h2 class="m-4 text-2xl text-gray-700">Nos plats Signatures</h2>
      <div class="flex flex-wrap justify-between">
        <card-dishes
          v-for="dishe in dishes"
          :dishe="dishe"
          :key="dishe.name"
        ></card-dishes>
      </div>
    </div>
  </section>
</template>

<script>
import CardDishes from "./CardDishes.vue";
export default {
  components: { CardDishes },
  data() {
    return {
      dishes: [
        {
          name: "Poa'lua",
          caption: "Base riz, saumon, radis, emame,graine de chia",
          cal: 475
        },
        {
          name: "Poa'lua",
          caption: "Base riz, saumon, radis, emame,graine de chia",
          cal: 475
        },
        {
          name: "Poa'lua",
          caption: "Base riz, saumon, radis, emame,graine de chia",
          cal: 475
        },
        {
          name: "Poa'lua",
          caption: "Base riz, saumon, radis, emame,graine de chia",
          cal: 475
        }
      ]
    };
  }
};
</script>

<style></style>
