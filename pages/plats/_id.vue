<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-12 md:py-24 mx-auto">
      <nuxt-link :to="{ name: 'plats' }" class="ml-24 w-4">
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
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </nuxt-link>

      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="photo du plat"
          class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          :src="item.image"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            Hawabowls
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            {{ item.name }}
          </h1>
          <div class="flex mb-4">
            <span class="flex items-center text-secondary-500">
              <svg
                :class="
                  i <= average(item.reviews)
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
              <span class="text-gray-600 ml-3"
                >{{ item.reviews.length }} Reviews</span
              >
            </span>
            <span
              class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"
            >
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  ></path>
                </svg>
              </a>
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  ></path>
                </svg>
              </a>
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  ></path>
                </svg>
              </a>
            </span>
          </div>
          <p class="leading-relaxed">
            {{ item.description }}
          </p>
          <div
            class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"
          >
            <!--  <div class="flex">
              <span class="mr-3">Color</span>
              <button
                class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
              ></button>
              <button
                class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"
              ></button>
              <button
                class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"
              ></button>
            </div> -->
            <div class="flex ml-6 items-center">
              <span class="mr-3">Taille du Poke</span>
              <div class="relative">
                <select
                  v-model="taille"
                  class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                >
                  <option>Petit Poke</option>
                  <option>Grand poke</option>
                </select>
                <span
                  class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">{{
              isBigPoke(item.price) | formatPrice
            }}</span>
            <button
              @click="addItemToCart(addItem(item))"
              class="flex ml-auto text-white bg-accent-500 border-0 py-2 px-6 focus:outline-none hover:bg-accent-600 rounded"
            >
              Ajout au panier
            </button>
            <button
              class="rounded-full w-10 h-10 bg-accent-200 p-0 border-0 inline-flex items-center justify-center hover:text-accent-600 active:text-accent-600 text-accent-500 ml-4"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  layout: "user",
  data() {
    return {
      cartItem: {
        _id: "",
        name: "",
        price: "",
        quantity: 1
      },
      taille: "Petit Poke",
      item: {
        _id: "",
        name: "",
        price: "",
        description: "",
        reviews: []
      }
    };
  },
  methods: {
    ...mapActions({
      addItemToCart: "cart/addItemToCart",
      getProduct: "product/getProduct"
    }),

    average(arr) {
      return arr.reduce((p, c) => p + c, 0) / arr.length;
    },
    isBigPoke(v) {
      return this.taille == "Petit Poke" ? v : v + 2.9;
    },
    addItem(i) {
      this.cartItem._id = i.id;
      this.cartItem.name = i.price;
      this.cartItem.price = i.price;
      return this.cartItem;
    }
  },
  computed: {},
  filters: {
    formatPrice(price) {
      return `€${price}`;
    }
  },
  async fetch() {
    console.log(this.$route.params.id);
    this.item = await this.getProduct(this.$route.params.id);
  }
};
</script>

<style></style>
