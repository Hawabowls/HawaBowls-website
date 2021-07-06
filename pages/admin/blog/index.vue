<template>
  <main>
    <div class="relative bg-secondary-500 md:pt-32 pb-32 pt-12"></div>
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
                      class="hidden sm:block px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Titre
                    </th>
                    <th
                      scope="col"
                      class="hidden md:block px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Publié
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date de Publication
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Voir</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="a in articles" :key="a._id">
                    <td class="hidden sm:block px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900 truncate">
                        {{ a._id }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            :src="a.cover[0]"
                            alt=""
                          />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ a.title }}
                          </div>
                          <div class="text-sm text-gray-500">
                            {{ a.author }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="hidden md:block px-6 py-4 whitespace-nowrap">
                      <div
                        class="inline-flex text-sm text-gray-900 md:w-28 truncate items-center"
                      >
                        {{ a.desc }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-secondary-100 text-secondary-800"
                      >
                        {{ a.isPublished }}
                      </span>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm truncate text-gray-500"
                    >
                      {{ a.publishingDate }}
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                    >
                      <nuxt-link
                        :to="{
                          name: 'admin-blog-id',
                          params: { id: a._id }
                        }"
                        class="text-indigo-600 border border-blue-600 px-2 py-2 hover:bg-blue-700  rounded hover:text-gray-100"
                        >Voir</nuxt-link
                      >
                    </td>
                  </tr>

                  <!-- More people... -->
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
      articles: []
    };
  },
  methods: {
    ...mapActions({
      getAllArticles: "blog/getAllArticles"
    })
  },
  async fetch() {
    this.articles = await this.getAllArticles();
  }
};
</script>

<style></style>
