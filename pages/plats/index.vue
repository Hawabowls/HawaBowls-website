<template>
  <main class="max-w-7xl mx-auto py-4 sm:px-5 lg:px-8">
    <div
      class="mx-auto min-w-sm  card-container space-x-2 overflow-x-hidden p-4"
    >
      <div
        @click="toggle('poke')"
        class=" group hover:bg-white relative card h-36 cursor-pointer shadow-lg rounded-full flex items-center justify-center overflow-hidden"
      >
        <h3
          class="text-2xl lg:text-4xl font-bold text-center text-accent-200 z-10"
        >
          Poke
        </h3>
        <img
          class="absolute h-full w-full group-hover:opacity-80 object-cover"
          src="https://images.unsplash.com/photo-1604259597308-5321e8e4789c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1892&q=80"
          alt=""
        />
      </div>
      <div
        @click="toggle('poke')"
        class=" group hover:bg-white relative card h-36 cursor-pointer shadow-lg rounded-full flex items-center  justify-center overflow-hidden"
      >
        <h3
          class="text-2xl lg:text-4xl font-bold text-center text-accent-200 z-10"
        >
          Entrée
        </h3>
        <img
          class="absolute h-full w-full group-hover:opacity-80 object-cover"
          src="https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt=""
        />
      </div>
      <div
        @click="toggle('poke')"
        class=" group hover:bg-white relative card h-36 cursor-pointer shadow-lg rounded-full flex items-center justify-center overflow-hidden"
      >
        <h3
          class="text-2xl lg:text-4xl font-bold text-center text-accent-200 z-10"
        >
          Bubble <br />
          Tea
        </h3>
        <img
          class="absolute h-full w-full group-hover:opacity-80 object-cover"
          src="https://images.unsplash.com/photo-1560023907-5f339617ea30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80 "
          alt=""
        />
      </div>
    </div>
    <div
      class="grid grid-cols-1  gap-x-6 gap-y-4 px-2 sm:grid-cols-2 md:grid-cols-3"
    >
      <div class="max-w-lg" v-for="p in poke" :key="p.titre">
        <div class="relative pb-4/5">
          <img
            :src="require('~/assets/img/plat/' + p.image + '.jpg')"
            class="absolute w-full h-full  rounded-lg shadow-md object-cover"
            alt="p.image"
          />
        </div>
        <div class="px-4 -mt-16 relative">
          <div class="bg-white bg-opacity-90 rounded-lg shadow-lg md:p-6 p-4">
            <div class="flex justify-between items-center">
              <span
                class="inline-block bg-secondary-200 text-secondary-600 text-xs px-1 sm:px-2 py-1 rounded-full tracking-wide"
                >Populaire</span
              >
              <div class="ml-2 flex items-center">
                <svg
                  :class="
                    i <= average(p.reviews)
                      ? 'text-accent-400'
                      : 'text-gray-300'
                  "
                  v-for="i in 5"
                  :key="i"
                  class="h-5 w-5 fill-current text-accent-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <!-- <span class="ml-2 text-gray-600 text-xs">X avis</span> -->
              </div>
            </div>
            <h4
              class="mt-1 font-semibold text-xl tracking-wider leading-tight truncate"
            >
              {{ p.image }}
            </h4>
            <div class="text-gray-500 text-xs font-medium">
              {{ p.desc }}
              <div class="mt-1 text-gray-600">
                11.2<span class="text-gray-400">€</span>
              </div>

              <div class="mt-2 space-y-1">
                <button
                  type="button"
                  class="inline-flex items-center px-2 py-2 border border-transparent text-md font-medium rounded shadow-sm text-white bg-accent-400 hover:bg-accent-500 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mx-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    /></svg
                  >Ajout au panier
                </button>
                <button
                  type="button"
                  class="inline-flex items-center px-2 py-2 border border-transparent text-md font-medium rounded shadow-sm text-white bg-primary-100 hover:bg-primary-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mx-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    /></svg
                  >Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- More people... -->
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: "user",
  data() {
    return {
      poke: [
        {
          titre: "Po'alima",
          image: "po'aha2",
          desc:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit nisl sit amet euismod rhoncus. Donec consectetur aliquet scelerisque. Duis neque ipsum, eleifend nec magna eu, mollis porttitor diam.",
          reviews: [3.5, 2, 1]
        },
        {
          titre: "Po'alima",
          image: "po'akahi",
          desc:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit nisl sit amet euismod rhoncus. Donec consectetur aliquet scelerisque. Duis neque ipsum, eleifend nec magna eu, mollis porttitor diam.",
          reviews: [2.5, 4, 5]
        },
        {
          titre: "Po'alima",
          image: "po'alua",
          desc:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamusblandit nisl sit amet euismod rhoncus. Donec consectetur aliquet scelerisque. Duis neque ipsum, eleifend nec magna eu, mollis porttitor diam.",
          reviews: [3, 4, 3]
        },
        {
          titre: "Po'alima",
          image: "po'aha2",
          desc:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit nisl sit amet euismod rhoncus. Donec consectetur aliquet scelerisque. Duis neque ipsum, eleifend nec magna eu, mollis porttitor diam.",
          reviews: [4, 5, 4]
        },

        {
          titre: "Po'alima",
          image: "po'aha2",
          desc:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit nisl sit amet euismod rhoncus. Donec consectetur aliquet scelerisque. Duis neque ipsum, eleifend nec magna eu, mollis porttitor diam.",
          reviews: [3, 5, 1]
        }
      ]
    };
  },
  methods: {
    average(arr) {
      return arr.reduce((p, c) => p + c, 0) / arr.length;
    }
  }
};
</script>

<style lang="postcss">
.card {
  min-width: 9rem;
  &:hover {
    @apply transform -translate-y-3;
  }
}

.card-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
  overflow-x:auto @screen sm {
    overflow: hidden;
  }
  & ::-webkit-scrollbar {
    display: none !important;
  }
}
</style>
