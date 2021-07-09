<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex flex-wrap w-full">
        <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
          <div class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 inline-flex items-center justify-center text-white relative z-10"
            >
              <!--   <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg> -->
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                Etape 1
              </h2>
              <p class="leading-relaxed">
                Prise de la commande
              </p>
            </div>
          </div>
          <div class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 inline-flex items-center justify-center text-white relative z-10"
            >
              <!-- <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg> -->
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                Etape 2
              </h2>
              <p class="leading-relaxed">
                Préparation de la commande
              </p>
            </div>
          </div>
          <div class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 inline-flex items-center justify-center text-white relative z-10"
            >
              <!--  <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg> -->
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                Etape 3
              </h2>
              <p class="leading-relaxed">
                Finition de la commande
              </p>
            </div>
          </div>
          <div class="flex relative pb-12">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 inline-flex items-center justify-center text-white relative z-10"
            >
              <!--  <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg> -->
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                Etape 4
              </h2>
              <p class="leading-relaxed">
                Votre commande est pretes.
              </p>
            </div>
          </div>
          <div class="flex relative">
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 inline-flex items-center justify-center text-white relative z-10"
            >
              <!--   <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg> -->
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"
              >
                Collect
              </h2>
              <p class="leading-relaxed">
                Vous pouvez venir la récuperer à la caisse de notre restaurant
              </p>
            </div>
          </div>
        </div>
        <img
          class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
          src="https://dummyimage.com/800x500"
          alt="step"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "clean"
};
</script>

<style></style>
