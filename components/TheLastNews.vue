<template>
  <section class="container">
    <splide :options="options">
      <splide-slide v-for="(news, i) in lastNews" :key="i">
        <card-carrousel post="news" class="mb-8"></card-carrousel>
      </splide-slide>
    </splide>
  </section>
</template>

<script>
import CardCarrousel from "./CardCarrousel.vue";
export default {
  name: "TheLastNews",
  components: { CardCarrousel },
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
      },

      lastNews: [
        {
          id: 0,
          url:
            "https://images.unsplash.com/photo-1556040220-4096d522378d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          titre: "Hola que tal",
          caption: "Bienvenido",
          source: "blog"
        },
        {
          id: 1,
          url:
            "https://images.unsplash.com/photo-1556040220-4096d522378d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          titre: "Poke Poke Poke",
          caption:
            "dcsbdcqhijkejxwhmlzdUIFBDCQJKXWGUKEFJBCSDKHQIODEDbsvisdb<lqsk",
          source: "instragram"
        },
        {
          id: 2,
          url:
            "https://images.unsplash.com/photo-1556040220-4096d522378d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          titre: "Hola que tal",
          caption:
            "dcsbdcqhijkejxwhmlzdUIFBDCQJKXWGUKEFJBCSDKHQIODEDbsvisdb<lqsk",
          source: "blog"
        },
        {
          id: 3,
          url:
            "https://images.unsplash.com/photo-1556040220-4096d522378d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          titre: "Poke Poke Poke",
          caption:
            "dcsbdcqhijkejxwhmlzdUIFBDCQJKXWGUKEFJBCSDKHQIODEDbsvisdb<lqsk",
          source: "instragram"
        },

        {
          id: 4,
          url:
            "https://images.unsplash.com/photo-1556040220-4096d522378d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          titre: "Poke Poke Poke",
          caption:
            "dcsbdcqhijkejxwhmlzdUIFBDCQJKXWGUKEFJBCSDKHQIODEDbsvisdb<lqsk",
          source: "instragram"
        },
        {
          id: 5,
          url:
            "https://images.unsplash.com/photo-1556040220-4096d522378d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          titre: "Poke Poke Poke",
          caption:
            "dcsbdcqhijkejxwhmlzdUIFBDCQJKXWGUKEFJBCSDKHQIODEDbsvisdb<lqsk",
          source: "instragram"
        }
      ]
    };
  }
};
</script>

<style></style>
