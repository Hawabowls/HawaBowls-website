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
                  src="data:image/png;base64,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:image/png;base64,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"
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
                Click and Collect
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
