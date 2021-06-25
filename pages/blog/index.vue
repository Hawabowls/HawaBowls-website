<template>
  <main>
    <section class="h-full w-full px-4 space-y-6">
      <card-article></card-article>
      <card-article></card-article>

      <!-- This example requires Tailwind CSS v2.0+ -->
    </section>
  </main>
</template>

<script>
import CardArticle from "~/components/blog/CardArticle.vue";
export default {
  components: { CardArticle }
};
</script>

<style>
.h-98 {
  height: 26rem;
}
</style>
