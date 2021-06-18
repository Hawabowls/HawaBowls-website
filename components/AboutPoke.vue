<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-gray-50">
    <main class="lg:relative">
      <div
        class="
          mx-auto
          max-w-7xl
          w-full
          pt-16
          pb-20
          text-center
          lg:py-24
          lg:text-left
        "
      >
        <div class="px-2 lg:w-1/2 sm:px-4 xl:pr-24">
          <h2
            class="
              text-4xl
              tracking-tight
              font-extrabold
              text-gray-900
              sm:text-4xl
              md:text-6xl
              lg:text-5xl
              xl:text-5xl
            "
          >
            <span class="block text-accent-500 xl:inline">Qui somme-nous?</span>
          </h2>
          <p
            class="
              mt-3
              max-w-md
              mx-auto
              text-lg text-accent-400
              sm:text-xl
              md:mt-5
              md:max-w-3xl
            "
          >
            C'est en 2010 que les deux foncdateurs et amis de longue date, Walid
            et Daniel ont l'idée de ccréer un concept de restaurant
            healthy.Quand on sais que 80% des résultats du sportif se trouvent
            dans l'assiette et 20% dans l'effort, il était important pour eux,
            grands sportifs, de proposer un endroit dédié au bien être proposant
            des produits frais et vitaminés en alliant plaisir culinaire er
            bienfaits.
          </p>
          <p
            class="
              mt-3
              max-w-md
              mx-auto
              text-lg text-accent-400
              sm:text-xl
              md:mt-5
              md:max-w-3xl
            "
          >
            C'est finalement 10 ans plus tard, en décembre 2020, que leur
            rêve^prend forme avec l'ouverture d'Hawa Bowls en plein coeur de
            Nantes. Inspirés par le soleil d'Hawai avec une touche nantaise, les
            poké hawa Bowls ravissent à la fois les sportifs et les gourmands
            soucieux d eprendre soin de leur alimentation grâce à des produits
            frais et de qualité.
          </p>
          <div class="mt-10 sm:flex flex-col lg:justify-start space-y-2">
            <div class="relative pb-3/4 rounded overflow-hidden">
              <video
                loop
                muted
                autoplay
                class="absolute object-cover w-full h-full object-center o"
              >
                <source
                  src="~/assets/img/banner/hawai-bowls-stop-motion.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="">
              <nuxt-link
                to="#"
                class="
                  w-full
                  md:w-1/2
                  flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  border border-transparent
                  text-base
                  font-medium
                  rounded-full
                  text-white
                  bg-accent-400
                  hover:bg-accent-600
                  md:py-4
                  md:text-lg
                  md:px-10
                "
                >Commander</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          relative
          w-full
          h-64
          sm:h-72
          md:h-full
          lg:absolute
          lg:inset-y-0
          lg:right-0
          lg:w-1/2
          lg:h-full
        "
      >
        <div class="absolute inset-0 w-full h-full bg-gray-400 p-12 md:p-16">
          <div class="flex  -mx-4">
            <div class=" md:block md:w-1/2 px-4">
              <div
                class="h-full w-full bg-cover rounded shadow-md"
                style="
                    background-image: url('https://source.unsplash.com/random/1280x720');
                  "
              ></div>
            </div>
            <div class="md:w-1/2 h-full px-4">
              <div class="mb-8">
                <img
                  class="rounded shadow-md"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
              <div class="mb-8">
                <img
                  class="rounded shadow-md"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="rounded shadow-md"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <!--  <img class="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt=""> -->
      </div>
    </main>
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
}

#right-hero {
  @screen md {
    @apply h-screen;
  }
}
</style>
