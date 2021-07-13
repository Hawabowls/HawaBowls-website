<template>
  <section
    class="w-full mx-auto bg-white py-16 px-3 sm:py-20 sm:px-6 lg:px-8"
    id="menu"
  >
    <div class="space-y-12 mb-1">
      <div class="text-center">
        <h2
          class="
            text-base
            font-semibold
            text-accent-300
            tracking-wide
            uppercase
          "
        >
          Venez deguster
        </h2>
        <p
          class="
            mt-1
            text-4xl
            font-extrabold
            text-primary-600
            sm:text-5xl
            sm:tracking-tight
            lg:text-6xl
          "
        >
          Plongez dans nos bowl de fraicheur
        </p>
        <p class="max-w-2xl mt-5 mx-auto text-xl text-gray-200">
          Savourez une cuisine métissée où la nourriture saine, le respect de la
          Nature et la vie à la cool sont notre credo ! Avec une carte
          clairement inspirée du soleil d’Hawaï, nous promettons à vos papilles
          un voyage à l’autre bout du monde. Pokés Bowls, avocado toast, chia
          bowls, bubble tea, jus bio... vous allez vous régaler !
        </p>
      </div>
      <div
        class="
          mx-auto
          min-w-sm
          card-container
          space-x-1
          md:space-x-4
          lg:space-x-8
         
          p-2
        "
      >
        <div
          @click="toggle('poke')"
          class="
            group
            hover:bg-white
            relative
           w-full
           max-w-md
           h-36
            cursor-pointer
            shadow-lg
            rounded-full
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >
          <h3
            class="
              text-2xl
              lg:text-4xl
              font-bold
              text-center text-accent-200
              z-10
            "
          >
            Poke
          </h3>
          <img
            class="absolute h-full w-full group-hover:opacity-80 object-cover"
            src="img/plat/Header .webp"
            alt="photo de poke"
          />
        </div>
        <div class="mt-4 grid grid-cols-2 gap-8">
          <div
            @click="toggle('dessert')"
            class="
            group
            hover:bg-white
            relative
            card
            cursor-pointer
            shadow-lg
            rounded-full
            flex
            items-center
            justify-center
            overflow-hidden
          "
          >
            <h3
              class="
              text-2xl
              lg:text-3xl
              font-bold
              text-center
              leading-tight
              text-accent-200
              z-10
            "
            >
              Dessert
            </h3>
            <img
              class="absolute h-full w-full group-hover:opacity-80 object-cover"
              src="img/plat/moelleux au chocolat.webp"
              alt="photo dessert"
            />
          </div>
          <div
            @click="toggle('entree')"
            class="
            group
            hover:bg-white
            relative
            card
            cursor-pointer
            shadow-lg
            rounded-full
            flex
            items-center
            justify-center
            overflow-hidden
          "
          >
            <h3
              class="
              text-2xl
              lg:text-3xl
              font-bold
              text-center
              leading-tight
              text-accent-200
              z-10
            "
            >
              Entree
            </h3>
            <img
              class="absolute h-full w-full group-hover:opacity-80 object-cover"
              src="img/plat/entree.webp"
              alt="photo entrée"
            />
          </div>
          <div
            @click="toggle('bubble')"
            class="
            group
            hover:bg-white
            relative
            card
            cursor-pointer
            shadow-lg
            rounded-full
            flex
            items-center
            justify-center
            overflow-hidden
          "
          >
            <h3
              class="
              text-2xl
              lg:text-4xl
              font-bold
              text-center text-accent-200
              z-10
            "
            >
              Bubble tea
            </h3>
            <img
              class="absolute h-full w-full group-hover:opacity-80 object-cover"
              src="img/plat/bubble.webp"
              alt="photo de bubble tea"
            />
          </div>
          <div
            @click="toggle('boisson')"
            class="
            group
            hover:bg-white
            relative
            card
            cursor-pointer
            shadow-lg
            rounded-full
            flex
            items-center
            justify-center
            overflow-hidden
          "
          >
            <h3
              class="
              text-2xl
              lg:text-4xl
              font-bold
              text-center text-accent-200
              z-10
            "
            >
              Boisson
            </h3>
            <img
              class="absolute h-full w-full group-hover:opacity-80 object-cover"
              src="img/plat/boisson.webp"
              alt="image de boisson"
            />
          </div>
        </div>
      </div>
    </div>
    <ul
      ref="pokebowls-1"
      id="pokebowls"
      v-if="poke"
      role="list"
      class="
        grid grid-cols-2
        gap-x-4 gap-y-8
        sm:grid-cols-3
        mx-auto
        sm:gap-x-6
        lg:grid-cols-3
        lg:px-32
        mt-4
        xl:gap-x-8
      "
    >
      <li class="relative" v-for="dish in plats" :key="dish.nom">
        <!--  <div
            class="
              group
              block
              w-full
              rounded-lg
              t
              bg-gray-100
              focus-within:ring-2
              focus-within:ring-offset-2
              focus-within:ring-offset-gray-100
              focus-within:ring-indigo-500
              overflow-hidden
            "
          >
            <img
              :src="require('~/assets/img/plat/' + dish.image + '.jpg')"
              alt=""
              class="object-fill pointer-events-none group-hover:opacity-75"
            />
            <button type="button" class="absolute inset-0 focus:outline-none">
              <span class="sr-only">View details</span>
            </button>
          </div> -->

        <div class="card-image" @dbclick="sendDish(dish)">
          <img
            :src="dish.image"
            :alt="dish.name"
            class="image pointer-events-none"
          />
          <div class="image-overlay">
            <p
              class="
                text-2xl
                lg:text-3xl
                font-bold
                text-center
                leading-tight
                text-accent-200
              "
            >
              {{ dish.nom }}
            </p>

            <p
              class="text-md
                font-bold
                text-center
                leading-tight
                text-accent-100"
            >
              {{ dish.desc }}
            </p>
          </div>
        </div>

        <!--     <p
            class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
          >
            po'aha
          </p>
          <p
            class="block text-sm font-medium text-gray-500 pointer-events-none"
          >
            9.90
          </p> -->
        <modal
          v-if="isModal && selectionedDish"
          @close-modal="changeValue"
          :item="selectionedDish"
        ></modal>
      </li>

      <!-- More files... -->
    </ul>
    <ul
      id="boisson"
      v-if="boisson"
      role="list"
      class="
        grid grid-cols-2
        gap-x-4 gap-y-8
        sm:grid-cols-3
        mx-auto
        sm:gap-x-6
        lg:grid-cols-3
        lg:px-24
        mt-4
        xl:gap-x-8
      "
    >
      <li class="relative" v-for="dish in boissons" :key="dish.nom">
        <!--  <div
            class="
              group
              block
              w-full
              rounded-lg
              t
              bg-gray-100
              focus-within:ring-2
              focus-within:ring-offset-2
              focus-within:ring-offset-gray-100
              focus-within:ring-indigo-500
              overflow-hidden
            "
          >
            <img
              :src="require('~/assets/img/plat/' + dish.image + '.jpg')"
              alt=""
              class="object-fill pointer-events-none group-hover:opacity-75"
            />
            <button type="button" class="absolute inset-0 focus:outline-none">
              <span class="sr-only">View details</span>
            </button>
          </div> -->

        <div class="card-image" @dbclick="sendDish(dish)">
          <img
            :src="dish.image"
            :alt="dish.name"
            class="image pointer-events-none"
          />
          <div class="image-overlay">
            <p
              class="
                text-2xl
                lg:text-3xl
                font-bold
                text-center
                leading-tight
                text-accent-100
              "
            >
              {{ dish.nom }}
            </p>
          </div>
        </div>

        <!--     <p
            class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
          >
            po'aha
          </p>
          <p
            class="block text-sm font-medium text-gray-500 pointer-events-none"
          >
            9.90
          </p> -->
        <modal
          v-if="isModal && selectionedDish"
          @close-modal="changeValue"
          :item="selectionedDish"
        ></modal>
      </li>

      <!-- More files... -->
    </ul>
    <ul
      id="bubble"
      v-if="bubble"
      role="list"
      class="
        grid grid-cols-2
        gap-x-4 gap-y-8
        sm:grid-cols-3
        mx-auto
        sm:gap-x-6
        lg:grid-cols-3
        lg:px-24
        mt-4
        xl:gap-x-8
      "
    >
      <li class="relative" v-for="dish in bubbles" :key="dish.nom">
        <!--  <div
            class="
              group
              block
              w-full
              rounded-lg
              t
              bg-gray-100
              focus-within:ring-2
              focus-within:ring-offset-2
              focus-within:ring-offset-gray-100
              focus-within:ring-indigo-500
              overflow-hidden
            "
          >
            <img
              :src="require('~/assets/img/plat/' + dish.image + '.jpg')"
              alt=""
              class="object-fill pointer-events-none group-hover:opacity-75"
            />
            <button type="button" class="absolute inset-0 focus:outline-none">
              <span class="sr-only">View details</span>
            </button>
          </div> -->

        <div class="card-image" @dbclick="sendDish(dish)">
          <img
            :src="dish.image"
            :alt="dish.name"
            class="image pointer-events-none"
          />
          <div class="image-overlay">
            <p
              class="
                text-2xl
                lg:text-3xl
                font-bold
                text-center
                leading-tight
                text-accent-100
              "
            >
              {{ dish.nom }}
            </p>
          </div>
        </div>

        <!--     <p
            class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
          >
            po'aha
          </p>
          <p
            class="block text-sm font-medium text-gray-500 pointer-events-none"
          >
            9.90
          </p> -->
        <modal
          v-if="isModal && selectionedDish"
          @close-modal="changeValue"
          :item="selectionedDish"
        ></modal>
      </li>

      <!-- More files... -->
    </ul>
    <ul
      id="dessert"
      v-if="dessert"
      role="list"
      class="
        grid grid-cols-2
        gap-x-4 gap-y-8
        sm:grid-cols-3
        mx-auto
        sm:gap-x-6
          lg:grid-cols-3
        lg:px-24
        mt-4
        xl:gap-x-8
      "
    >
      <li class="relative" v-for="dish in desserts" :key="dish.nom">
        <!--  <div
            class="
              group
              block
              w-full
              rounded-lg
              t
              bg-gray-100
              focus-within:ring-2
              focus-within:ring-offset-2
              focus-within:ring-offset-gray-100
              focus-within:ring-indigo-500
              overflow-hidden
            "
          >
            <img
              :src="require('~/assets/img/plat/' + dish.image + '.jpg')"
              alt=""
              class="object-fill pointer-events-none group-hover:opacity-75"
            />
            <button type="button" class="absolute inset-0 focus:outline-none">
              <span class="sr-only">View details</span>
            </button>
          </div> -->

        <div class="card-image" @dbclick="sendDish(dish)">
          <img
            :src="dish.image"
            :alt="dish.image"
            class="image pointer-events-none"
          />
          <div class="image-overlay">
            <p
              class="
                text-2xl
                lg:text-3xl
                font-bold
                text-center
                leading-tight
                text-accent-100
              "
            >
              {{ dish.nom }}
            </p>
          </div>
        </div>

        <!--     <p
            class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
          >
            po'aha
          </p>
          <p
            class="block text-sm font-medium text-gray-500 pointer-events-none"
          >
            9.90
          </p> -->
        <modal
          v-if="isModal && selectionedDish"
          @close-modal="changeValue"
          :item="selectionedDish"
        ></modal>
      </li>

      <!-- More files... -->
    </ul>
    <ul
      id="entree_container"
      v-if="entree"
      role="list"
      class="
        grid grid-cols-2
        gap-x-4 gap-y-8
        sm:grid-cols-3
        mx-auto
        sm:gap-x-6
       lg:grid-cols-3
        lg:px-24
        mt-4
        xl:gap-x-8
      "
    >
      <li class="relative" v-for="dish in entrees" :key="dish.nom">
        <!--  <div
            class="
              group
              block
              w-full
              rounded-lg
              t
              bg-gray-100
              focus-within:ring-2
              focus-within:ring-offset-2
              focus-within:ring-offset-gray-100
              focus-within:ring-indigo-500
              overflow-hidden
            "
          >
            <img
              :src="require('~/assets/img/plat/' + dish.image + '.jpg')"
              alt=""
              class="object-fill pointer-events-none group-hover:opacity-75"
            />
            <button type="button" class="absolute inset-0 focus:outline-none">
              <span class="sr-only">View details</span>
            </button>
          </div> -->

        <div class="card-image" @dbclick="sendDish(dish)">
          <img
            :src="dish.image"
            :alt="dish.name"
            class="image pointer-events-none"
          />
          <div class="image-overlay">
            <p
              class="
                text-2xl
                lg:text-3xl
                font-bold
                text-center
                leading-tight
                text-accent-100
              "
            >
              {{ dish.nom }}
            </p>
          </div>
        </div>

        <!--     <p
            class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none"
          >
            po'aha
          </p>
          <p
            class="block text-sm font-medium text-gray-500 pointer-events-none"
          >
            9.90
          </p> -->
        <modal
          class=""
          v-if="isModal && selectionedDish"
          @close-modal="changeValue"
          :item="selectionedDish"
        ></modal>
      </li>

      <!-- More files... -->
    </ul>
  </section>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  components: { Modal },

  data() {
    return {
      poke: true,
      boisson: false,
      isModal: false,
      entree: false,
      bubble: false,
      dessert: false,
      oldSection: "",

      plats: [
        {
          nom: "Po'Akahi",
          image: "img/plat/Po'akahi.webp",
          desc:
            "Riz vinaigré, Boeuf mariné cuit, Ananas, Avocat, Tomate cerise, Mais, concombre,  Graîne de sesame,Oignon frits",
          allergene: ""
        },
        {
          nom: "Po'Alua",
          image: "img/plat/Po'alua.webp",
          desc:
            "Riz vinaigré, Saumon mariné cuit,  Mangues fraiche, Radis, Chou Rouge, Avocat, Fèves Edamame, Jeune pousse de soja, Graîne de sesame",
          allergene: ""
        },
        {
          nom: "Po'Akolu",
          image: "img/plat/Po'akolu.webp",
          desc:
            "Riz vinaigré, Tofu mariné cuit, Mangues fraiches, Fèves Edamame, Tomate cerise, Salade d'algues Wakamé, Carotte râpées, Graîne de sesame, Oignon frits",
          allergene: ""
        },
        {
          nom: "Po'Aha",
          image: "img/plat/Po'aha.webp",
          desc:
            "Riz vinaigré, Thon cru mariné, Avocat, Radis, Fèves Edamame, Chou Rouge, Carotte râpées, Ananas, Graîne de sesame ",
          allergene: ""
        },
        {
          nom: "Po'Alima",
          image: "img/plat/Po'alima.webp",
          desc:
            "Riz vinaigré, Saumon mariné cuit, Ananas, Avocat, Tomate cerise, Mais, concombre, graîne",
          allergene: ""
        },

        {
          nom: "Création Poké ",
          image: "img/plat/Header .webp",
          desc:
            "Choissisez vous mêmes les ingrédients qui composeront votre poké parmi nos base, veggies, protéines, toopings et sauces",
          allergene: ""
        }
      ],

      entrees: [
        {
          nom: "Salade d'edamame",
          image: "img/plat/salade d'edamame.webp",
          desc: "",
          allergene: ""
        },
        {
          nom: "Salade de wakame",
          image: "img/plat/Salade de wakame.webp",
          desc: "",
          allergene: ""
        }
      ],
      bubbles: [
        {
          nom: "Création de Bubble Tea",
          image:
            "https://res.cloudinary.com/hawabowls/image/upload/v1625130669/Hawabowls/site_media/bubble_tea_bq2x9t.jpg",
          desc: ""
        }
      ],
      desserts: [
        {
          nom: "Moelleux au chocolat",
          image: `img/plat/moelleux au chocolat.webp`,
          desc: "",
          allergene: ""
        },
        {
          nom: "Shia",
          image: "img/plat/chia bowl.webp",
          desc: "",
          allergene: ""
        },
        {
          nom: "Salade de mangue",
          image: "img/plat/salade d'ananas.webp",
          desc: "",
          allergene: ""
        },
        {
          nom: "Salade d'ananas",
          image: "img/plat/Salade de mangue.webp",
          desc: "",
          allergene: ""
        }
      ],

      boissons: [
        {
          nom: "Tensai thé Blanc",
          image: "img/plat/Thé blanc myrtille.webp",
          desc: "",
          allergene: ""
        },
        {
          nom: "Tensai matcha ",
          image: "img/plat/thé matcha menthe poivre.webp",
          desc: "",
          allergene: ""
        },
        {
          nom: "Tensai thé vert",
          image: "img/plat/Thé vert citron.webp",
          desc: "",
          allergene: ""
        }
      ],
      selectionedDish: {}
    };
  },
  methods: {
    showCurrent(index) {
      document.querySelector(index).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    },
    toggle(section) {
      if (section == "poke") {
        /*   this.showCurrent("pokebowls-1"); */
        this.poke = !this.poke;
        this.entree = false;
        this.boisson = false;
        this.bubble = false;
        this.dessert = false;
        if (this.oldSection != "poke") {
          this.$nextTick(() => this.showCurrent("#pokebowls"));
        }
        this.oldSection = "poke";
      }
      if (section == "entree") {
        this.entree = !this.entree;
        this.poke = false;
        this.bubble = false;
        this.boisson = false;
        this.dessert = false;
        if (this.oldSection != "entree") {
          this.$nextTick(() => this.showCurrent("#entree_container"));
        }
        this.oldSection = "entree";
      }
      if (section == "boisson") {
        /*     this.showCurrent("boisson"); */
        this.boisson = !this.boisson;
        this.bubble = false;
        this.poke = false;
        this.entree = false;
        this.dessert = false;
        if (this.oldSection != "boisson") {
          this.$nextTick(() => this.showCurrent("#boisson"));
        }
        this.oldSection = "boisson";
      }
      if (section == "dessert") {
        /* this.showCurrent("dessert"); */
        this.dessert = !this.dessert;
        this.bubble = false;
        this.boisson = false;
        this.poke = false;
        this.entree = false;
        if (this.oldSection != "dessert") {
          this.$nextTick(() => this.showCurrent("#dessert"));
        }
        this.oldSection = "dessert";
      }
      if (section == "bubble") {
        /* this.showCurrent("dessert"); */
        this.bubble = !this.bubble;
        this.dessert = false;
        this.boisson = false;
        this.poke = false;
        this.entree = false;
        if (this.oldSection != "bubble") {
          this.$nextTick(() => this.showCurrent("#bubble"));
        }
        this.oldSection = "bubble";
      }
    },
    sendDish(dish) {
      this.selectionedDish = dish;
      this.isModal = true;
    },
    changeValue(payload) {
      console.log(payload.value);
      this.isModal = payload.value;
      this.selectionedDish = {};
    }
  }
};
</script>

<style lang="postcss">
.card {
  width: 9rem;
  height: 9rem;

  & img {
    @apply transition duration-500 ease-in-out transform scale-100;
    &:hover {
      @apply transform scale-150;
    }
  }
}

.card-container {
  @apply flex flex-col justify-center items-center overflow-hidden;
  -webkit-overflow-scrolling: touch;
}
.card-image {
  @apply relative w-full h-52  overflow-hidden rounded-lg;
  @screen md {
    @apply h-64;
  }
  .image {
    @apply block w-full h-full object-cover transition duration-300 ease-in-out transform scale-100;
    &:hover img {
      @apply transform scale-125;
    }
  }
  .image-overlay {
    @apply absolute top-0 left-0 w-full h-full bg-primary-700 bg-opacity-60 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500;
    &:hover {
      @apply opacity-100;
      & > * {
        @apply transform -translate-y-3;
      }
    }
    & > * {
      @apply transition duration-300 transform translate-y-4;
    }
  }
}
</style>
