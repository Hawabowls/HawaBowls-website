<template>
  <section class="w-full ">
    <div class="halfback px-4 py-5 md:px-2 flex justify-center mx-auto">
      <div class="flex-grow max-h-96 max-w-screen-lg mx-2">
        <div class=" h-96 bg-gray-400"></div>
      </div>
      <div class="flex-none hidden sm:flex flex-col    place-content-center">
        <button-network name="facebook"></button-network>
        <button-network name="instagram"></button-network>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.halfback {
  width: 100%;
  background: linear-gradient(to bottom, #3c9e7d 50%, white 50%);
}
</style>
