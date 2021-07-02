<template>
  <main>
    <div class="relative bg-secondary-500 md:pt-32 pb-32 z-0 pt-12">
      <div class="px-4 md:px-10 mx-auto w-full"></div>
    </div>
    dd
    <client-only>
      <editor-wyg />
    </client-only>
  </main>
</template>

<script>
import EditorWyg from "~/components/blog/EditorWyg.vue";
export default {
  components: { EditorWyg },
  layout: "admin",
};
</script>

<style></style>
