<template>
  <main>
    <section class="h-full w-full px-4 space-y-6">
      <card-article
        v-for="a in articles"
        :key="a.title"
        article="a"
      ></card-article>

      <!-- This example requires Tailwind CSS v2.0+ -->
    </section>
  </main>
</template>

<script>
import CardArticle from "~/components/blog/CardArticle.vue";
export default {
  components: { CardArticle },
  data() {
    return {
      articles: [{ titre: "", desc: "", content: "", cover: ["", ""] }]
    };
  }
};
</script>

<style>
.h-98 {
  height: 26rem;
}
</style>
