<template>
  <main>
    <about-poke></about-poke>
    <!--  <section class="">
      <h1 class="title">
        Test composant
      </h1>
    </section> -->
    <notre-menu></notre-menu>
    <!--   <the-dishes></the-dishes> -->

    <the-last-news></the-last-news>
    <the-contact></the-contact>
  </main>
</template>

<script>
import AboutPoke from "~/components/AboutPoke.vue";

import TheDishes from "~/components/TheDishes.vue";
import TheLastNews from "~/components/TheLastNews.vue";
import TheContact from "~/components/TheContact.vue";
import IconScrollBar from "~/components/IconScrollBar.vue";
import NotreMenu from "~/components/NotreMenu.vue";
export default {
  components: {
    TheContact,
    TheLastNews,
    TheDishes,
    AboutPoke,
    IconScrollBar,
    NotreMenu
  }
};
</script>

<style></style>
