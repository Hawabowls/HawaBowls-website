<template>
  <nav class="bg-primary-500 shadow">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex px-2 lg:px-0">
          <div class="flex-shrink-0 flex items-center">
           <nuxt-link to="/"> <img
              class="block lg:hidden h-8 w-auto"
              src="img/Logo_transparent.png"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="img/Logo_transparent.png"
              alt="Workflow"
            /></nuxt-link>
          </div>
          <!-- <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
      
            <a
              href="#"
              class="border-primary-500 text-accent-400  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Commander
            </a>
            <a
              href="#"
              class="border-transparent text-white hover:border-accent-500 hover:text-accent-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >Plats
            </a>
            <a
              href="#"
              class="border-transparent text-white hover:border-accent-500 hover:text-accent-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Boisson
            </a>
          </div> -->
        </div>
        <!--         <div
          class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end"
        >
          <div class="max-w-lg w-full lg:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
            
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div> -->
        <div class="flex order-first items-center lg:hidden">
          <!-- Mobile menu button -->
          <button
            @click="open = !open"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              :class="[open ? 'hidden' : 'block']"
              class=" h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              :class="[open ? 'block' : 'hidden']"
              class=" h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class=" lg:ml-4 flex items-center">
          <nuxt-link to="/cart">
          <button
            class="relative flex-shrink-0 p-1 text-gray-100 rounded-full hover:text-accent-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          
          >
            <span class="sr-only">Voir le panier</span>
            <!-- Heroicon name: outline/bell -->
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
             <span v-if="cart.length !=0" class="absolute top-0 right-0 w-4 h-4 bg-red-600 mt-1 p-0.5 font-semibold leading-3 text-white text-xs rounded-full bg-opacity-90">{{cart.length}}</span>
          </button>
          </nuxt-link>
          <div class="ml-4 relative hidden lg:block z-10 flex-shrink-0">
            <div   class="flex space-x-1 items-center">
                <nuxt-link v-if="!user"
                class="mt-0 btn btn-test1" to="/login">
               Se connecter
              </nuxt-link>
          <div v-if="user">
              <span class="text-white capitalize">{{user.firstname}}</span>
              <button
              
                type="button"
                @click="profile = !profile"
                class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
              <img v-if="user.avatar" class="h-8 w-8 rounded full" :src="user.avatar" alt="">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </button>
          </div>
             
            </div>



              <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
              <div
                v-if="profile"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 transform opacity-0 scale-95 transform opacity-100 scale-100"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <nuxt-link
                to="/user"
                  :class="[
                    active
                      ? 'bg-gray-100'
                      : 'block px-4 py-2 text-sm text-gray-700'
                  ]"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                  >Mon Profile</nuxt-link
                >
                <nuxt-link
                to="/paramatres"
                  :class="[
                    active
                      ? 'bg-gray-100'
                      : 'block px-4 py-2 text-sm text-gray-700'
                  ]"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                  >Parametres</nuxt-link
                >
                <a
                  href="#"
                  :class="[
                    active
                      ? 'bg-gray-100'
                      : 'block px-4 py-2 text-sm text-gray-700'
                  ]"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                  >Déconnection</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="lg:hidden" id="mobile-menu" v-if="open">
      <div class="pt-2 pb-3 space-y-1">
        <!-- Current: "bg-primary-50 border-primary-500 text-primary-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" -->
        <a
          href="#"
          class="bg-primary-50 border-primary-500 text-primary-700 block pl-3 pr-4 py-2 hover:bg-gray-100 hover:text-accent-400 border-l-4 text-base font-medium"
          >Commander</a
        >
        <!-- <a
          href="#"
          class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:bg-gray-100 hover:text-accent-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          ></a
        > -->
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              :src="[user.avatar ? 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80':user.avatar]"
              alt=""
            />
            
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">{{user.firstname}}</div>
            <div class="text-sm font-medium text-gray-500">{{user.email}}</div>
          </div>
        </div>
        <div class="mt-3 space-y-1">
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-accent-500 hover:bg-gray-100"
            >Mon profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-accent-500 hover:bg-gray-100"
            >Parametres</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-accent-500 hover:bg-gray-100"
            >Deconnexion</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions} from 'vuex'
export default {
  data() {
    return {
      open: false,
      active:false,
      profile: false
    };
  },
  methods:{
    
  },
  computed:{
    cart(){
      return this.$store.getters['cart/getCart']
    },
    user(){
      return this.$store.getters['user/getUser']
    }
  }
};
</script>

<style></style>
