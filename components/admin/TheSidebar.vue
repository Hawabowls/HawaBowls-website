<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-prim flex flex-wrap items-center justify-between relative md:w-64 z-40 py-4 px-4"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <nuxt-link
        class="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
        to="/admin"
      >
        <img src="/img/Fichier 5.png" class="object-cover h-10" alt="" />
      </nuxt-link>
      <!-- User -->
      <ul class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
          <notification-dropdown></notification-dropdown>
        </li>
        <li class="inline-block relative">
          <user-dropdown></user-dropdown>
        </li>
      </ul>
      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <a
                class="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                href="javascript:void(0)"
              >
                Hawabowls
              </a>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-6 mb-4 md:hidden">
          <div class="mb-3 pt-0">
            <input
              type="text"
              placeholder="Search"
              class="border-0 px-3 py-2 h-12 border border-solid  border-gray-500 placeholder-gray-300 text-gray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
            />
          </div>
        </form>
        <!-- Navigation -->
        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li class="items-center">
            <nuxt-link
              class="text-gray-700 hover:text-accent-400 flex items-center text-xs uppercase py-3 font-bold block"
              to="/admin/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class=" opacity-75 h-4 w-4 mr-2 text-sm"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>

              Dashboard</nuxt-link
            >
          </li>
          <li class="items-center">
            <nuxt-link
              class="text-gray-700 hover:text-accent-400 flex items-center text-xs uppercase py-3 font-bold "
              to="/admin/commandes"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="opacity-75 h-4 w-4 mr-2 text-sm"
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
              Gestion des Commandes</nuxt-link
            >
          </li>
          <li class="items-center">
            <nuxt-link
              class="text-gray-700 hover:text-accent-400 flex items-center text-xs uppercase py-3 font-bold "
              to="/admin/produits"
            >
              <svg class="opacity-75 h-4 w-4 mr-2 text-sm" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M15.6 12H2V15C2 18.9 5.1 22 9 22H15C18.9 22 22 18.9 22 15V12H15.6M20 15C20 17.8 17.8 20 15 20H9C6.2 20 4 17.8 4 15V14H20V15M16.2 11L20.3 4.4L22 5.5L18.6 11H16.2Z"
                />
              </svg>
              Gestion des Plats & dessert</nuxt-link
            >
          </li>
          <li class="items-center">
            <nuxt-link
              class="text-gray-700 hover:text-accent-400 flex items-center text-xs uppercase py-3 font-bold "
              to="/admin/Ingredients"
              ><svg class="opacity-75 h-4 w-4 mr-2 text-sm" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M17,9H7V7H17M17,13H7V11H17M14,17H7V15H14M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"
                />
              </svg>
              Gestion des Ingredients</nuxt-link
            >
          </li>
          <li class="items-center">
            <nuxt-link
              class="text-gray-700 hover:text-accent-400 flex items-center text-xs uppercase py-3 font-bold "
              to="/admin/website"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="opacity-75 h-4 w-4 mr-2 text-sm"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
              Gestion Website</nuxt-link
            >
          </li>
          <!--  <li class="items-center">
            <a
              class="text-gray-300 text-xs uppercase py-3 font-bold block"
              href="#pablo"
              ><i class="fas fa-clipboard-list text-gray-300 mr-2 text-sm"></i>
              Register (soon)</a
            >
          </li>
           -->
        </ul>
        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        <!-- Heading -->
        <h6
          class="md:min-w-full text-gray-400 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          Equipe
        </h6>
        <!-- Navigation -->
        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
          <li class="inline-flex">
            <a
              class="text-gray-700 hover:text-gray-500 flex items-center text-sm block mb-4 no-underline font-semibold"
              href="/admin/equipes/roles"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="opacity-75 h-4 w-4 mr-2 text-sm"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Gestion de l'equipe</a
            >
          </li>
          <li class="inline-flex">
            <a
              class="text-gray-700 hover:text-gray-500  flex items-center text-sm block mb-4 no-underline font-semibold"
              href="#/documentation/alerts"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="opacity-75 h-4 w-4 mr-2 text-sm"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Calendrier
            </a>
          </li>
          <li class="inline-flex">
            <a
              class="text-gray-700 hover:text-gray-500 text-sm block mb-4 no-underline font-semibold"
              href="#/documentation/vue/alerts"
              ><i class="fab fa-vuejs mr-2 text-gray-400 text-base"></i>
            </a>
          </li>
          <!-- <li class="inline-flex">
            <a
              class="text-gray-700 hover:text-gray-500  text-sm block mb-4 no-underline font-semibold"
              href="#/documentation/react/alerts"
              ><i class="fab fa-react mr-2 text-gray-400 text-base"></i>
              React</a
            >
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import NotificationDropdown from "./NotificationDropdown.vue";
import UserDropdown from "./UserDropdown.vue";
export default {
  data() {
    return {
      collapseShow: "hidden"
    };
  },
  methods: {
    toggleCollapseShow: function(classes) {
      this.collapseShow = classes;
    }
  },
  components: {
    NotificationDropdown,
    UserDropdown
  }
};
</script>
