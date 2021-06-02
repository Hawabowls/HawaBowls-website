<template>
  <section class=" bg-primary-200 px-4 py-2  " id="poke">
    <h2 class="text-center  text-white font-mono">
      Comment sont fais nos poké?
    </h2>
    <div class="flex flex-col items-start px-4 justify-between">
      <card-with-text
        v-for="items in recipe"
        :key="items.etape"
        :class="items.etape % 2 == 0 ? 'self-end' : ''"
        :etape="items.etape"
        :titre="items.titre"
        :text="items.text"
        :img="items.img"
      >
      </card-with-text>
    </div>
  </section>
</template>

<script>
import CardWithText from "./CardWithText.vue";
export default {
  components: { CardWithText },
  data() {
    return {
      recipe: [
        {
          etape: 1,
          titre: " Base",
          img: "icon/Riz-02.svg",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae dolor recusandae minima."
        },
        {
          etape: 2,
          img: "icon/Protéine.svg",
          titre: "Protein",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae dolor recusandae minima."
        },
        {
          etape: 3,
          img: "icon/Légumes.svg",
          titre: "Veggie",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae dolor recusandae minima."
        },
        {
          etape: 4,
          img: "icon/Toppings.svg",
          titre: "Toppings",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae dolor recusandae minima."
        },
        {
          etape: 5,
          img: "icon/Sauces.svg",
          titre: "Marinade Maisons",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae dolor recusandae minima."
        }
      ]
    };
  }
};
</script>

<style></style>
