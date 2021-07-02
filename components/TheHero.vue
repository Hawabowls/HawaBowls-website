<template>
  <header class="h-92 w-full">
    <the-navbar></the-navbar>
    <div class="container mx-auto flex flex-col bg-primary-500 items-center">
      <div class="h-72 m-20 w-full rounded-md overflow-hidden max-w-4xl ">
        <img class="h-full w-full object-cover" :src="cover" alt="" />
      </div>
    </div>
  </header>
</template>

<script>
import TheNavbar from "./TheNavbar.vue";
export default {
  props: ["cover"],
  components: { TheNavbar }
};
</script>

<style>
.halfback {
  width: 100%;
  background: linear-gradient(to bottom, #3c9e7d 50%, white 50%);
}

.h-97 {
}
</style>
