<template>
  <client-only>
    <splide :options="options">
      <splide-slide v-for="(news, i) in lastNews" :key="i">
        <card-carrousel :post="news" class="mb-8"></card-carrousel>
      </splide-slide> </splide
  ></client-only>
</template>

<script>
import CardCarrousel from "@/components/CardCarrousel.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  props: ["lastNews"],
  components: { CardCarrousel, Splide, SplideSlide },
  data() {
    return {
      options: {
        rewind: true,
        padding: 10,
        arrows: "slide",
        width: 900,
        perPage: 3,
        gap: "2rem",
        breakpoints: {
          650: {
            perPage: 1,
            width: 580
          },
          1024: {
            perPage: 2,
            width: 780
          }
        }
      }
    };
  }
};
</script>

<style></style>
