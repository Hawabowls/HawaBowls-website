<template>
  <section class="w-full mt-14 ">
    <div
      class="halfback px-4 py-5 md:px-2 flex justify-center mx-auto items-center"
    >
      <div class="flex-grow h-screen max-w-screen-lg mx-2">
        <div class=" h-4/5 bg-gray-400">
          <img
            class="object-cover h-full w-full"
            src="img/banner/banner.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="flex-none hidden sm:flex flex-col    place-content-center">
        <button-network name="facebook"></button-network>
        <button-network name="instagram"></button-network>
      </div>
      <!--  <div>
          <svg
            class="h-8 w-8 fill-current text-accent-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div> -->
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

.h-97 {
}
</style>
