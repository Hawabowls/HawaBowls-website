<template>
  <main>
    <div class="relative bg-secondary-500 md:pt-32 pb-32 z-0 pt-12">
      <div class="px-4 md:px-10 mx-auto w-full">
        <card-stat></card-stat>
      </div>
    </div>
    <section class="relative  px-4 md:px-10 mx-auto w-full -m-24 z-30">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="bg-white shadow overflow-hidden rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Details de la commande
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            <!-- Personal details and application. -->
          </p>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Nom complet</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Margot Foster
              </dd>
            </div>
            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Mobile</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                0659113907
              </dd>
            </div>
            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                margotfoster@example.com
              </dd>
            </div>
            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Montant</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                $20,000
              </dd>
            </div>
            <div class="py-4 sm:py-5 sm:grid md:grid-cols-3 md:gap-4 md:px-4">
              <dt class="text-sm font-medium text-gray-500">
                Contenu de la commande
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div class="flex space-x-1">
                  <div class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1604259597308-5321e8e4789c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=692&q=80"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          Po'alua
                        </div>
                        <div class="text-sm text-gray-500">Category</div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    aucune spécificité
                  </div>
                  <div
                    class="px-4 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    10.90
                  </div>
                  <div
                    class="px-4 py-4 whitespace-nowrap text-sm  font-medium text-gray-500"
                  >
                    x2
                  </div>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <footer-admin></footer-admin>
    </section>
  </main>
</template>

<script>
import FooterAdmin from "~/components/admin/FooterAdmin.vue";
export default {
  layout: "admin",
  components: { FooterAdmin }
};
</script>

<style></style>
