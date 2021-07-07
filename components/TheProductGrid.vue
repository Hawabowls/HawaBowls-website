<template>
  <section class="produit-container bg-gray-600">
    <div class="h-full w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div class="h-72 w-full bg-primary-200">
        <img
          class="h-full w-full object-cover"
          src="~/assets/img/product-grid/pois.webp"
          alt=""
        />
      </div>
      <div
        class="
          h-72
          w-full
          bg-secondary-100
          flex flex-col
          items-center
          justify-center
        "
      >
        <h3 class="animate-bounce text-accent-400 text-4xl font-bold">
          Healthy
        </h3>
      </div>
      <div class="h-72 w-full bg-primary-300">
        <img
          class="order-2 h-full w-full object-cover"
          src="~/assets/img/product-grid/mangue.webp"
          alt=""
        />
      </div>
      <div
        class="
        order-last
        sm:order-none
          h-72
          w-full
          bg-primary-100
          flex
         flex-col
          items-center
          justify-center
        "
      >
        <h3 class="animate-ping text-accent-400 text-4xl font-bold">
          Poke
        </h3>
      </div>
      <!--   <div class="h-72 w-full bg-primary-400">
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmlzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
          "
          alt=""
        />
      </div> -->
      <!-- <div class="hidden lg:block h-72 w-full bg-primary-600">
        <img
          class="h-full w-full object-cover"
          src="https://picsum.photos/seed/picsum/300/300"
          alt=""
        />
      </div> -->
      <div
        class="hidden lg:flex
          h-72
          w-full
          bg-accent-100
         flex-col
          items-center
          justify-center
        "
      >
        <h3 class="animate-pulse text-accent-400 text-4xl font-bold">
          Fresh
        </h3>
      </div>
      <div class="hidden lg:block h-72 w-full bg-primary-600">
        <img
          class="h-full w-full object-cover"
          src="~/assets/img/product-grid/radis.webp"
          alt=""
        />
      </div>
      <div class=" sm:order-none h-72 w-full bg-primary-700">
        <img
          src="~/assets/img/product-grid/recette.gif"
          alt="Image"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="h-72 w-full bg-primary-700">
        <img
          class="h-full w-full object-cover"
          src="~/assets/img/product-grid/ananas.webp"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
