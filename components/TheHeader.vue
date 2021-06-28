<template>
  <header class=" h-screen relative color-bg lake">
    <div
      class="flex items-center absolute z-20 top-0 inset-x-0 justify-center w-full h-full space-y-4 bg-opacity-80"
    >
      <div class="text-center space-y-6">
        <!--   <h1 class="text-2xl font-semibold text-white uppercase md:text-3xl">
          Build Your new <span class="text-blue-400 underline">Saas</span>
        </h1> -->
        <div class="p-4">
          <img
            class="h-64 object-cover"
            src="img/Fichier 3.png"
            alt="Hawabowls"
          />
        </div>
        <div>
          <button
            @click="isModal = !isModal"
            class=" bg-accent-400 hover:bg-accent-500 px-3 py-2 rounded-lg text-white font-medium text-xl  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Commander
          </button>

          <the-modal-order
            v-if="isModal"
            @close-modal="changeValue"
          ></the-modal-order>
        </div>
        <button
          class="px-4 py-2 mt-20 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
        >
          <svg
            class="animate-bounce w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <!--   <plant-background></plant-background> -->
    </div>
    <video
      loop
      muted
      autoplay
      class="showcase-video  object-cover w-full h-full opacity-90 "
    >
      <source
        src="https://res.cloudinary.com/hawabowls/video/upload/q_auto/v1624882862/Hawabowls/site_media/video_hawa2_wlxowv.mp4"
        type="video/mp4"
      />
    </video>

    <the-navbar></the-navbar>
  </header>
</template>

<script>
import TheModalOrder from "./admin/TheModalOrder.vue";
export default {
  name: "TheHeader",
  components: { TheModalOrder },
  data() {
    return {
      isModal: false
    };
  },
  methods: {
    changeValue(payload) {
      console.log(payload);
      this.isModal = payload.value;
    }
  }
};
</script>

<style>
.color-bg {
  background-color: #2db8f853;
}
</style>
