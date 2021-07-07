<template>
  <section class="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-hidden" id="commu">
    <div class="flex flex-col justify-center items-center px-3 py-4">
      <span
        class="text-base font-semibold text-accent-300 tracking-wide uppercase"
      >
        La hawa Team
      </span>
      <h3
        class="
          mt-1
          text-4xl text-center
          font-extrabold
          text-primary-600
          sm:text-5xl
          sm:tracking-tight
          lg:text-6xl
        "
      >
        Rejoignez la communauté!
      </h3>
      <client-only>
        <lazy-carrousel-news :lastNews="lastNews"></lazy-carrousel-news>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheLastNews",
  components: {
    CarrouselNews: () =>
      process.client
        ? import("@/components/CarrouselNews.vue")
        : Promise.resolve({ render: h => h("div") })
  },
  data() {
    return {
      lastNews: [
        {
          id: 0,
          url: "img/grid/big.webp",
          titre: "Hola que tal",
          caption: "Bienvenido",
          source: "blog"
        },
        {
          id: 1,
          url: "img/grid/little1.webp",
          titre: "Poke Poke Poke",
          caption: "Belle journée",
          source: "instragram"
        },
        {
          id: 2,
          url: "img/grid/little3.webp",
          titre: "Hola que tal",
          caption: "envie d'un petit tensai",
          source: "instagram"
        },
        {
          id: 3,
          url: "img/grid/little2.webp",
          titre: "Poke Poke Poke",
          caption: "see big",
          source: "instragram"
        }
      ]
    };
  }
};
</script>

<style></style>
