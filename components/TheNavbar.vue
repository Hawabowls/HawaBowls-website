<template>
  <div class="w-full fixed h-16 top-0 inset-x-0 z-20 " id="container-nav">
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

        <button
          class="mt-1 sm:mt-0 btn btn-test1"
          @click="isModalOpen = !isModalOpen"
        >
          Commander
        </button>

        <the-modal-order
          v-if="isModalOpen"
          @close-modal="changeValue"
        ></the-modal-order>
      </div>
    </nav>
    <div class="hidden h-20" id="video-nav">
      <video
        src="~/assets/img/banner/video2.mp4"
        loop
        muted
        autoplay
        class="fixed top-0 -z-10 object-cover w-full h-16 "
      ></video>
    </div>
  </div>
</template>

<script>
import TheModalOrder from "./admin/TheModalOrder.vue";
export default {
  components: { TheModalOrder },
  data() {
    return {
      isOpen: false,
      isModalOpen: false,
      sha: false
    };
  },
  methods: {
    changeValue(payload) {
      console.log(payload);
      this.isModalOpen = payload.value;
    }
  },
  mounted() {
    let scrollpos = window.scrollY;
    let header = document.getElementById("container-nav");
    let video = document.querySelector("#video-nav");
    let navaction = document.getElementById("navAction");
    let littleLink = document.getElementById("littleLink");
    document.addEventListener("scroll", function() {
      /*Apply classes for slide in bar*/
      scrollpos = window.scrollY;
      if (scrollpos > 615) {
        header.classList.add("bg-primary-500");
        video.classList.remove("hidden");
        /*     navaction.classList.remove("bg-white");
        navaction.classList.add("gradient");
        navaction.classList.remove("text-gray-800");
        navaction.classList.add("text-white"); */
        /*   littleLink.classList.remove("lg:text-white");
        littleLink.classList.add("text-gray-800"); */
      } else {
        video.classList.add("hidden");
        /*      logo.alt = "logo clicknchill white"; */
        header.classList.remove("bg-primary-500");
        /*         navaction.classList.remove("gradient");
        navaction.classList.add("bg-white");
        navaction.classList.remove("text-white");
        navaction.classList.add("text-gray-800"); */
      }
    });
  }
};
</script>

<style></style>
