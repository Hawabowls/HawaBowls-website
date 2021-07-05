<template>
  <main>
    <div class="relative bg-secondary-500 md:pt-32 pb-32 z-0 pt-12">
      <div class="px-4 md:px-10 mx-auto w-full"></div>
    </div>
    <section class="relative px-4 md:px-10 mx-auto w-full -m-24 z-30">
      <div class="bg-white rounded p-2 md:p-8  shadow-md">
        <form
          class="space-y-8 divide-y divide-gray-200"
          @submit.prevent="update"
        >
          <div class="space-y-8 divide-y divide-gray-200">
            <div>
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Ingredients
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  Details d'un ingredient
                </p>
              </div>

              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-4">
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Nom de l'ingredient
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input
                      v-model="ingredient.name"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Rentrez le nom de l'ingrédient"
                      autocomplete="name"
                      class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-8">
              <div class="sm:col-span-3">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700"
                  >Type</label
                >
                <div class="mt-1">
                  <select
                    v-model="ingredient.type"
                    id="country"
                    name="country"
                    autocomplete="country"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="base">Base</option>
                    <option value="protein">Protein</option>
                    <option value="toppings">Toppings</option>
                    <option value="veggies">Veggies</option>
                    <option value="sauce">Sauce</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-8">
            <div class="sm:col-span-3">
              <label
                for="country"
                class="block text-sm font-medium text-gray-700"
                >En Stock</label
              >
              <div class="mt-1">
                <select
                  v-model="ingredient.isInStock"
                  id="country"
                  name="country"
                  autocomplete="country"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option :value="true">Oui</option>
                  <option :value="false">Non</option>
                </select>
              </div>
            </div>
          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              <nuxt-link
                to="/admin/ingredients"
                class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Retour
              </nuxt-link>
              <button
                :disabled="!change"
                :class="[!change ? 'opacity-50' : 'opacity-100']"
                type="submit"
                class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sauvegarder
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      ingredient: {
        name: "",
        type: "",
        isInStock: false
      },
      oldIng: {
        name: "",
        type: "",
        isInStock: false
      },
      change: false
    };
  },
  layout: "admin",
  methods: {
    ...mapActions({
      getIngredient: "ingredient/getIngredient",
      updateIngredient: "ingredient/updateIngredient"
    }),

    async update() {
      try {
        let response = await this.updateIngredient({
          id: this.$route.params.id,
          ingredient: this.ingredient
        });
        console.log(response);
        //rajoute notification reussite et echec
        this.$router.push("/admin/ingredients");
      } catch (e) {
        console.log(e);
      }
    }
  },
  async fetch() {
    this.ingredient = await this.getIngredient(this.$route.params.id);
    this.oldIng = { ...this.ingredient };
  },
  watch: {
    ingredient: {
      handler: function(val) {
        console.log(
          val.name == this.oldIng.name &&
            val.type == this.oldIng.type &&
            val.isInStock === this.oldIng.isInStock
        );
        if (
          val.name != this.oldIng.name ||
          val.type != this.oldIng.type ||
          val.isInStock !== this.oldIng.isInStock
        ) {
          this.change = true;
        } else {
          this.change = false;
        }
      },
      deep: true
    }
  },
  mounted() {}
};
</script>

<style></style>
