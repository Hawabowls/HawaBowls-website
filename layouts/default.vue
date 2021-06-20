<template>
  <div class="relative">
    <TheHeader> </TheHeader>
    <!--   <the-hero></the-hero> -->
    <icon-scroll-bar :entries="[0.2, 0.05, 0.75, 1.0]"></icon-scroll-bar>
    <Nuxt />
    <TheFooter></TheFooter>
  </div>
</template>
<script>
export default {
  head: {
    bodyAttrs: {
      class: "op"
    }
  }
};
</script>
<style lang="postcss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.op {
  @apply overflow-x-hidden;
}
</style>
