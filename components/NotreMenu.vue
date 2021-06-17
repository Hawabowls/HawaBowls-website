<template>
  <section
    class="max-w-7xl mx-auto bg-primary-100 py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
    id="menu"
  >
    <div class="space-y-16">
      <div class="text-center">
        <h2
          class="text-base font-semibold text-secondary-200 tracking-wide uppercase"
        >
          Venez deguster
        </h2>
        <p
          class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
        >
          Plongez dans nos bowl de fraicheur
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores iste
          , inventore voluptate necessitatibus reiciendis atque!!
        </p>
      </div>
      <div class="mx-auto min-w-sm flex space-x-2 overflow-x-auto">
        <div
          @click="toggle('poke')"
          class=" group hover:bg-white relative w-full max-w-sm h-60 cursor-pointer shadow-lg rounded-lg flex items-end justify-center overflow-hidden"
        >
          <h3
            class="text-2xl lg:text-4xl font-bold text-center text-accent-200 z-10"
          >
            Poke
          </h3>
          <img
            class="absolute h-64 w-full group-hover:opacity-80 object-cover"
            src="https://images.unsplash.com/photo-1604259597308-5321e8e4789c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1892&q=80"
            alt=""
          />
        </div>
        <div
          @click="toggle('dessert')"
          class="relative w-full max-w-sm h-60 cursor-pointer shadow-lg rounded-lg flex items-end justify-center overflow-hidden"
        >
          <h3
            class="text-2xl lg:text-4xl font-bold text-center text-accent-200 z-10"
          >
            Dessert
          </h3>
          <img
            class="absolute h-64 w-full object-cover"
            src="https://images.unsplash.com/photo-1605190557072-1fe6a230ee65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80  "
            alt=""
          />
        </div>

        <div
          @click="toggle('boisson')"
          class="relative group  w-full max-w-sm cursor-pointer h-60 shadow-lg rounded-lg flex items-end justify-center overflow-hidden"
        >
          <h3
            class="text-2xl lg:text-4xl font-bold text-center text-accent-200 z-10"
          >
            Boisson
          </h3>
          <img
            class="absolute h-64 w-full group-hover:opacity-85 object-cover"
            src="https://images.unsplash.com/photo-1560023907-5f339617ea30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt=""
          />
        </div>
      </div>
      <ul
        v-if="poke"
        role="list"
        class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        <li
          class="relative"
          v-for="i in 5"
          :key="i"
          :class="[i == 5 ? 'lg:col-start-2' : '']"
        >
          <div
            class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
          >
            <img
              src="~assets/img/plat/po'aha2.jpg"
              alt=""
              class="object-cover pointer-events-none group-hover:opacity-75"
            />
            <button type="button" class="absolute inset-0 focus:outline-none">
              <span class="sr-only">View details</span>
            </button>
          </div>
          <!--     <p
            class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
          >
            po'aha
          </p>
          <p
            class="block text-sm font-medium text-gray-500 pointer-events-none"
          >
            9.90
          </p> -->
        </li>

        <!-- More files... -->
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      poke: true,
      boisson: false,
      dessert: false
    };
  },
  methods: {
    toggle(section) {
      if (section == "poke") {
        this.poke = !this.poke;
        this.dessert = false;
        this.boisson = false;
      }
      if (section == "dessert") {
        this.dessert = !this.dessert;
        this.poke = false;
        this.boisson = false;
      }
      if (section == "boisson") {
        this.boisson = !this.boisson;
        this.poke = false;
        this.dessert = false;
      }
    }
  }
};
</script>

<style></style>
