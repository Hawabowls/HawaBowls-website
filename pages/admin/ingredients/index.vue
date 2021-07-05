<template>
  <main>
    <div class="relative bg-secondary-500 md:pt-32 pb-32 z-0 pt-12">
      <div class="px-4 md:px-10 mx-auto w-full"></div>
    </div>
    <section class=" relative  px-4 md:px-10 mx-auto w-full -m-24 z-30">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nom
                    </th>
                    <th
                      scope="col"
                      class="hidden sm:block px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      En stock
                    </th>
                    <th scope="col" class="relative px-3 py-3">
                      <nuxt-link
                        :to="{
                          name: 'admin-produits-create'
                        }"
                        class="text-primary-600 border border-primary-600 px-2 py-2 hover:bg-primary-700  rounded hover:text-gray-100"
                        >Créer Ingredients</nuxt-link
                      >

                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="i in ingredients" :key="i._id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ i.name }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="hidden sm:block px-6 py-4 whitespace-nowrap">
                      <div
                        class="text-sm text-gray-900 sm:w-40 md:w-60 truncate"
                      >
                        {{ i.type }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        {{ i.isInStock }}
                      </span>
                    </td>

                    <td
                      class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                    >
                      <nuxt-link
                        :to="{
                          name: 'admin-ingredients-id',
                          params: { id: i._id }
                        }"
                        class="text-primary-600 border border-primary-600 px-2 py-2 hover:bg-primary-700  rounded hover:text-gray-100"
                        >Edit</nuxt-link
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  layout: "admin",
  data() {
    return {
      ingredients: []
    };
  },
  methods: {
    ...mapActions({
      getAllIngredients: "ingredient/getAllIngredients"
    })
  },
  async fetch() {
    this.ingredients = await this.getAllIngredients();
  }
};
</script>

<style></style>
