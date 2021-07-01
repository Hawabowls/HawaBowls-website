<template>
  <header class="h-92 w-full">
    <the-navbar></the-navbar>
    <div class="container mx-auto flex flex-col bg-primary-500 items-center">
      <div class="h-64  w-full rounded-md max-w-3xl ">
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1527731149372-fae504a1185f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt=""
        />
      </div>
    </div>
  </header>
</template>

<script>
import TheNavbar from "./TheNavbar.vue";
export default {
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
