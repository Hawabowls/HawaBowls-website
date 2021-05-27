<template>
  <section class=" relative h-56 ">
    <div class="z-50 mx-auto flex flex-col items-center">
      <h2 class="text-center font-medium">
        Une envie d'organiser un evenement ou de commande une montagne de poké
      </h2>
      <base-button
        class="btn btn-big"
        url="/contact"
        text="Contactez-nous!"
      ></base-button>
    </div>
    <svg
      class="bg-triangle"
      viewBox="0 0 1438 229"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1438 0V229H0L1438 0Z" fill="#30377f" />
    </svg>
  </section>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
  name: "TheContact"
};
</script>

<style>
.bg-triangle {
  @apply absolute inset-x-0 bottom-0;
}
</style>
