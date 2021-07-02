<template>
  <section class="w-full" id="banner">
    <div class="side h-full">
      <h2
        class="
          text-4xl
          tracking-tight
          font-semibold
          text-gray-900
          sm:text-4xl
          md:text-5xl
          lg:text-5xl
        "
      >
        <span class="block text-accent-500 xl:inline">Qui somme-nous?</span>
      </h2>
      <p class="mt-3 max-w-md mx-auto text-lg text-accent-400 sm:text-xl">
        C'est en 2010 que les deux foncdateurs et amis de longue date, Walid et
        Daniel ont l'idée de ccréer un concept de restaurant healthy.Quand on
        sais que 80% des résultats du sportif se trouvent dans l'assiette et 20%
        dans l'effort, il était important pour eux, grands sportifs, de proposer
        un endroit dédié au bien être proposant des produits frais et vitaminés
        en alliant plaisir culinaire er bienfaits.
      </p>
      <p
        class="mt-3 max-w-md mx-auto text-lg text-accent-400 sm:text-xl md:mt-5"
      >
        C'est finalement 10 ans plus tard, en décembre 2020, que leur rêve prend
        forme avec l'ouverture d'Hawa Bowls en plein coeur de Nantes. Inspirés
        par le soleil d'Hawai avec une touche nantaise, les poké hawa Bowls
        ravissent à la fois les sportifs et les gourmands soucieux de prendre
        soin de leur alimentation grâce à des produits frais et de qualité.
      </p>
      <div class="mt-10 sm:flex w-full flex-col justify-center  space-y-2">
        <div
          class="relative pb-4/5 sm:pb-1/2 px-auto rounded-lg flex justify-center overflow-hidden"
        >
          <video
            loop
            muted
            autoplay
            class="
              absolute
              object-cover
              rounded-lg
              mx-auto
              w-full
              md:w-96
            h-full
              object-center
              o
            "
          >
            <source
              src="https://res.cloudinary.com/hawabowls/video/upload/q_80/v1624872794/Hawabowls/site_media/hawai-bowls-stop-motion_rygirv.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="">
          <nuxt-link
            to="#"
            class="
              w-full
              md:w-64
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
              mx-auto
              md:py-4
              md:text-lg
              md:px-10
            "
            >Commander</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="side-image h-full">
      <div class="h-full grid grid-cols-2 gap-4">
        <div class="col-span-1 bg-primary-300 big"></div>

        <div class="col-span-1">
          <div class="grid grid-row-3 gap-3">
            <div class="hidden md:block card-i">
              <img
                class="h-full w-full object-cover"
                src="https://res.cloudinary.com/hawabowls/image/upload/q_80,w_350,h_450/v1625064947/Hawabowls/site_media/little1_krbbq0.webp"
                alt=""
              />
            </div>
            <div class="card-i">
              <img
                class="h-full w-full object-cover object-start"
                src="https://res.cloudinary.com/hawabowls/image/upload/q_80,w_350,h_450/v1625064973/Hawabowls/site_media/little2_wvgbpa.webp"
                alt=""
              />
            </div>
            <div class="card-i">
              <img
                class="h-full w-full object-cover"
                src="https://res.cloudinary.com/hawabowls/image/upload/q_80,w_350,h_450/v1625064999/Hawabowls/site_media/little3_bcm8ub.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss">
#banner {
  display: flex;
  flex-direction: column;
  min-height: 78rem;
  padding: 2rem;
  @screen md {
    @apply flex-row py-20    px-6;
  }

  .side {
    min-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .side-image {
    min-width: 50%;
    padding: 1rem;

    .big {
      border-radius: 0.5rem;
      height: 100%;
      background-image: url("https://res.cloudinary.com/hawabowls/image/upload/q_80,h_1000,w_700/v1625064932/Hawabowls/site_media/big_m6lwek.webp");
      background-size: cover;
      background-position: center;
    }

    .little1 {
      height: 24rem;
      background-image: url("~assets/img/grid/little1.jpg");
      @apply bg-cover;
    }
    .little2 {
      background-image: url("~assets/img/grid/little2.jpg");
      background-size: cover;
      background-position: center;
    }
    .little3 {
      height: 24rem;
      background-image: url("~assets/img/grid/little1.jpg");
    }
    .card-i {
      @apply rounded-lg overflow-hidden;
      @screen lg {
        max-height: 18.75rem;
      }
    }
  }
}
</style>
