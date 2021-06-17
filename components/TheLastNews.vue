<template>
  <section class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div class="flex flex-col justify-center items-center px-3 py-4">
      <h3
        class="mt-1 text-4xl text-center font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
      >
        Nos Dernierès Actu
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
