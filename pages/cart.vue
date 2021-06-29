<template>
  <section class="bg-gray-200">
    <div class="container mx-auto mt-10">
      <div class="flex flex-wrap shadow-md my-10">
        <div class="w-full md:w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Panier Click n Collect</h1>
            <h2 class="font-semibold text-2xl">3 Items</h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3
              class="font-semibold text-gray-600 text-xs uppercase w-3/5 sm:w-2/5"
            >
              Details du produit
            </h3>
            <h3
              class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
            >
              Quantité
            </h3>
            <h3
              class="hidden sm:block font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
            >
              Prix
            </h3>
            <h3
              class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
            >
              Total
            </h3>
          </div>
          <div
            v-for="item in cart"
            :key="item.name"
            class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
          >
            <div class="flex w-3/5 sm:w-2/5">
              <!-- product -->
              <div class="w-20">
                <img class="h-24 w-20 object-cover" :src="item.image" alt="" />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">{{ item.name }}</span>
                <span class="text-red-500 text-xs">{{ item.category }}</span>
                <button
                  @click="remove(item)"
                  class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Remove
                </button>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <button @click="">
                <svg
                  class="fill-current text-gray-600 w-3"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                  />
                </svg>
              </button>
              <input
                class="mx-2 border px-1 text-center w-8"
                type="text"
                v-model="item.quantity"
              />
              <button @click="">
                <svg
                  class="fill-current text-gray-600 w-3"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                  />
                </svg>
              </button>
            </div>
            <span
              class="hidden sm:block text-center w-1/5 font-semibold text-sm"
              >{{ item.price }}</span
            >
            <span class="text-center w-1/5 font-semibold text-sm">{{
              item.price * item.quantity
            }}</span>
          </div>

          <nuxt-link
            to="/plats"
            class="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              class="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path
                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
              />
            </svg>
            Continue Shopping
          </nuxt-link>
        </div>

        <div id="summary" class="bg-primary-500 w-full md:w-1/4 px-8 py-10">
          <h1 class="font-semibold text-gray-100 text-2xl border-b pb-8">
            Résume du panier
          </h1>

          <div class="py-10">
            <label
              for="promo"
              class="font-semibold inline-block mb-3 text-gray-100 text-sm uppercase"
              >Code Promo</label
            >
            <input
              type="text"
              id="promo"
              placeholder="Entrer cotre code"
              class="p-2 text-sm rounded-lg w-full"
            />
          </div>
          <button
            class="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-sm text-white uppercase"
          >
            Appliquer
          </button>
          <div class="border-t mt-8">
            <div
              class="flex font-semibold justify-between py-6 text-gray-100 text-sm uppercase"
            >
              <span>Total cost</span>
              <span class="text-white">{{ total }}</span>
            </div>
            <nuxt-link to="/user/checkout">
              <button
                class="bg-accent-500 font-semibold hover:bg-indigo-600 py-3 rounded-lg text-sm text-white uppercase w-full"
              >
                Checkout
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  layout: "user",
  middleware: "auth",
  computed: {
    cart() {
      return this.$store.getters["cart/getCart"];
    },
    total() {
      return this.$store.getters["cart/getCartTotal"];
    },
    priceItem(item) {
      return this.$store.getters["cart/getTotalItemPrice"](item);
    }
  },
  methods: {
    ...mapMutations("cart", ["removeItem"]),
    remove(item) {
      this.removeItem(item);
    }
  },
  filter: {}
};
</script>

<style></style>
