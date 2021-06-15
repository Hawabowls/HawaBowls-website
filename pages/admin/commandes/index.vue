<template>
  <main class="">
    <div class="relative bg-secondary-500 md:pt-32 pb-32 z-0 pt-12">
      <div class="px-4 md:px-10 mx-auto w-full">
        <card-stat></card-stat>
      </div>
    </div>
    <div class="px-4 md:px-10 mx-auto w-full -m-24">
      <div class="flex flex-wrap">
        <!-- <line-chart></line-chart>
          <bar-chart></bar-chart> -->
      </div>
      <div class="flex flex-wrap mt-4">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
          >
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-gray-700">
                    Gestion des Commandes
                  </h3>
                </div>
              </div>
            </div>
            <div class="block w-full overflow-x-auto">
              <!-- Projects table -->
              <div class="items-center">
                <div
                  class="flex justify-around border-collapse border border-solid border-gray-100 "
                >
                  <div
                    class="px-4 bg-gray-50 text-gray-500 align-middle  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    id
                  </div>
                  <div
                    class="px-4 bg-gray-50 text-gray-500 align-middle  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    Utilisateur
                  </div>
                  <div
                    class="px-4 bg-gray-50 text-gray-500 align-middle  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    Montant
                  </div>
                  <div
                    class="px-4 bg-gray-50 text-gray-500 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    Etat
                  </div>
                </div>
                <div>
                  <div class="grid grid-cols-6 gap-2">
                    <div class="col-span-4 text-center">
                      <span>01</span>
                      <span>01</span>
                      <span>01</span>
                    </div>
                    <div class="col-span-1">etat</div>
                    <div class="col-span-1">
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer-admin></footer-admin>
    </div>
  </main>
</template>

<script>
import FooterAdmin from "~/components/admin/FooterAdmin.vue";
export default {
  layout: "admin",
  components: {
    FooterAdmin
  }
};
</script>

<style></style>
