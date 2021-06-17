<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6"
      >
        <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
          <button
            @click="close"
            type="button"
            class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">Close</span>
            <!-- Heroicon name: outline/x -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <div
            v-if="livraison || emporter"
            class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
          >
            <!-- Heroicon name: outline/check -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5" v-if="!livraison && !emporter">
            <h3
              class="text-lg leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              Commander
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div
          class="mt-5 sm:mt-6 flex justify-between"
          v-if="!livraison && !emporter"
        >
          <button
            @click="livraison = !livraison"
            class="inline-flex text-white items-center text-3xl justify-center bg-accent-400 w-full sm:w-1/2 rounded-lg p-2 m-1 hover:bg-accent-300 focus:outline-none"
          >
            Livraison
          </button>
          <nuxt-link to="/plats" class="w-full sm:w-1/2">
            <button
              class="inline-flex text-white items-center text-3xl justify-center bg-accent-400 w-full rounded-lg p-2 m-1 hover:bg-accent-300 focus:outline-none"
            >
              A emporter
            </button>
          </nuxt-link>
        </div>
        <div class="mt-5 sm:mt-6 flex justify-center">
          <div v-if="livraison">
            <div class="text-center">
              <h4
                class="text-md leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                Livraison
              </h4>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div class="mt-5 sm:mt-6 flex justify-between">
              <button
                class="inline-flex justify-center bg-primary-400 w-20 h-20 rounded-full p-1"
              >
                <img
                  src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c520.png"
                  class="w-full h-full object-contain object-center"
                  alt=""
                />
              </button>
              <button
                class="inline-flex justify-center bg-primary-400 w-20 h-20 rounded-full p-1"
              >
                <img
                  src="https://logos-marques.com/wp-content/uploads/2021/03/Uber-Eats-Logo-2017.png"
                  class="w-full h-full object-contain object-center"
                  alt=""
                />
              </button>
              <button
                class="inline-flex justify-center bg-primary-400 w-20 h-20 rounded-full p-1"
              >
                <img
                  src="https://naofood.fr/logos/NaoBlanc.png"
                  class="w-full h-full object-contain object-center"
                  alt=""
                />
              </button>
              <button
                class="inline-flex justify-center bg-primary-400 w-20 h-20 rounded-full p-1"
              >
                <img
                  src="https://naofood.fr/logos/NaoBlanc.png"
                  class="w-full h-full object-contain object-center"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div v-if="emporter">
            <div class="texrt-center">
              <h4
                class="text-md leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                A emporter
              </h4>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div class="mt-5 sm:mt-6 flex justify-center">
              <button
                class="inline-flex justify-center bg-primary-400 w-20 h-20 rounded-full p-1"
              >
                <img
                  src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c520.png"
                  class="w-full h-full object-contain object-center"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      livraison: false,
      emporter: false
    };
  },
  methods: {
    close() {
      this.$emit("close-modal", { value: false });
    }
  }
};
</script>

<style></style>
