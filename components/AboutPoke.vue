<template>
  <div class="relative bg-white overflow-hidden mdmd:h-screen">
    <div class="max-w-7xl mx-auto">
      <div
        id="right-hero"
        class="relative z-10 pb-8 bg-white h-full sm:pb-10 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          <main
            class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h1
                class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span class="block xl:inline"> Quezako le </span>
                <span class="block text-indigo-600 xl:inline">Poké?</span>
              </h1>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Le poke ou poké est un des plats principaux de la cuisine
                traditionnelle hawaïenne. Il est composé de poisson cru coupé en
                dés, servi comme entrée ou en plat principal.
              </p>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div class="rounded-md shadow">
                  <nuxt-link
                    to="/commander"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-400 hover:bg-accent-500 md:py-4 md:text-lg md:px-10"
                  >
                    Commander
                  </nuxt-link>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <nuxt-link
                    to="#menu"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-indigo-100 hover:text-white hover:bg-primary-400 md:py-4 md:text-lg md:px-10"
                  >
                    Nos Plats
                  </nuxt-link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <video
          src="~/assets/img/banner/hawai-bowls-stop-motion.mp4"
          loop
          autoplay
          muted
          class="h-72 w-full object-cover o sm:h-72 md:h-96 lg:w-full lg:h-full"
        ></video>

        <!--      <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
         -->
      </div>
    </div>
  </div>
</template>

<script>
import CardAbout from "./CardAbout.vue";
import WaveBackground from "./WaveBackground.vue";
export default {
  components: { WaveBackground, CardAbout }
};
</script>

<style lang="postcss">
.o {
  object-position: 50% 35%;
  @screen xs {
    object-position: 35% 50%;
  }
}

#right-hero {
  @screen md {
    @apply h-screen;
  }
}
</style>
