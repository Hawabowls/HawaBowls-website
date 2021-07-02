<template>
  <main>
    <section class="h-full w-full px-4 space-y-6">
      <card-article
        v-for="a in articles"
        :key="a._id"
        :article="a"
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
      articles: [
        {
          _id: 0,
          _slug: "les-graines-super-food",
          title: "Les graines Super food",
          short_desc: `Les pokés bowls nous viennent tout droit du Pacifique, de la
              tradition hawaïenne. Qui l‘eût cru que ce petit bol coloré,
              gourmand et ancestral contiennent tout ce qu’il faut pour une
              alimentation équilibrée et vitaminée.`,

          cover: ["img/blog/riz col.png", "img/blog/riz row.png"]
        }
      ]
    };
  }
};
</script>

<style>
.h-98 {
  height: 26rem;
}
</style>
