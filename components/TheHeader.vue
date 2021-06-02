<template>
  <header class="bg-secondary-500 w-full fixed inset-x-0 z-40 mb-4">
    <nav class="sm:flex py-3 sm:justify-between items-center px-3">
      <div class="flex justify-between ">
        <div>
          <img
            src="img/Logo_transparent.png"
            class="object-cover h-10"
            alt=""
          />
        </div>
        <div class="sm:hidden">
          <button
            class="block p-1  text-primary-500 hover:text-white active:text-white focus:outline-none"
            @click="isOpen = !isOpen"
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class=" px-2 pt-2 sm:flex " :class="isOpen ? 'block' : 'hidden'">
        <nuxt-link class="nav-brand-link  sm:hidden md:block" to=""
          >Home</nuxt-link
        >
        <nuxt-link class="mt-1 sm:mx-2 sm:mt-0 nav-brand-link" to=""
          >Menu</nuxt-link
        >
        <nuxt-link class="mt-1 sm:mx-2 sm:mt-0 nav-brand-link" to=""
          >Blog</nuxt-link
        >
        <nuxt-link class="mt-1  sm:mx-2 sm:mt-0 sm:active nav-brand-link" to=""
          >Contact</nuxt-link
        >

        <button class="mt-1 sm:mt-0 btn btn-test1">
          Commander
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style scoped>
.active {
  @apply block hover:bg-secondary-300;
}
</style>
