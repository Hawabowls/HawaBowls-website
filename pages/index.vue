<template>
  <main>
    <about-poke></about-poke>
    <!--  <section class="">
      <h1 class="title">
        Test composant
      </h1>
    </section> -->

    <the-dishes></the-dishes>
    <notre-menu></notre-menu>
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
