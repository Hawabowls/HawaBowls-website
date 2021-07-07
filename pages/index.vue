<template>
  <main>
    <test></test>
    <the-product-grid></the-product-grid>
    <notre-menu></notre-menu>
    <!-- <the-dishes></the-dishes> -->

    <the-last-news></the-last-news>
    <the-contact></the-contact>
  </main>
</template>

<script>
import TheDishes from "~/components/TheDishes.vue";
import TheLastNews from "~/components/TheLastNews.vue";
import TheContact from "~/components/TheContact.vue";
import IconScrollBar from "~/components/IconScrollBar.vue";
import NotreMenu from "~/components/NotreMenu.vue";
import Test from "~/components/v2/TheTest.vue";
import TheProductGrid from "~/components/TheProductGrid.vue";
export default {
  components: {
    TheContact,
    TheLastNews,
    TheDishes,
    IconScrollBar,
    NotreMenu,
    TheProductGrid,
    Test
  }
};
</script>

<style></style>
