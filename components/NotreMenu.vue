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
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-200">
          Vous avez envie de quelque chose de frais et d'healthy vous êtes à la
          bonne addresses. Chez Hawabowls nous avons comme seul but de vous
          offrir des produit frais. et sain. Le tout servi dans un belle ecrin
          et accompagné dans grand sourire pour égyer votre journée.
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
            src="https://res.cloudinary.com/hawabowls/image/upload/c_fill,f_auto,h_300,q_80,w_520/v1625124516/Hawabowls/site_media/c4f117b3-e7de-4729-8e14-ff6ff3461dba_vqylzt.webp"
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
              src="https://res.cloudinary.com/hawabowls/image/upload/q_80,w_420/v1624875439/Hawabowls/site_media/chia_bowl_vxul2s.webp"
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
              src="https://res.cloudinary.com/hawabowls/image/upload/q_80/v1625061345/Hawabowls/site_media/photo-1603046891726-36bfd957e0bf_nuwy0z.webp"
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
              src="https://images.unsplash.com/photo-1560023907-5f339617ea30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80 "
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
              src="https://res.cloudinary.com/hawabowls/image/upload/q_80/v1625062803/Hawabowls/site_media/boisson_rrt0tg.webp"
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
      id="entree"
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

      plats: [
        {
          nom: "Po'Akahi",
          image:
            "https://res.cloudinary.com/hawabowls/image/upload/c_fill,f_auto,h_300,q_70,w_370/v1624885061/Hawabowls/site_media/Po_akahi_mmos8w.webp",
          desc:
            "Riz vinaigré, Boeuf mariné cuit, Ananas, Avocat, Tomate cerise, Mais, concombre, graîne",
          allergene: ""
        },
        {
          nom: "Po'Alua",
          image:
            "https://res.cloudinary.com/hawabowls/image/upload/c_fill,f_auto,h_300,q_70,w_370/v1624885060/Hawabowls/site_media/Po_alua_ghk1cw.webp",
          desc:
            "Riz vinaigré, Boeuf mariné cuit, Ananas, Avocat, Tomate cerise, Mais",
          allergene: ""
        },
        {
          nom: "Po'Akolu",
          image:
            "https://res.cloudinary.com/hawabowls/image/upload/c_fill,f_auto,h_300,q_70,w_370/v1624885059/Hawabowls/site_media/Po_akolu_vqa7sx.webp",
          desc:
            "Riz vinaigré, Boeuf mariné cuit, Ananas, Avocat, Tomate cerise, Mais",
          allergene: ""
        },
        {
          nom: "Po'Aha",
          image:
            "https://res.cloudinary.com/hawabowls/image/upload/c_fill,f_auto,h_300,q_70,w_370/v1625050664/Hawabowls/site_media/Po_aha_elwdzt.webp",
          desc:
            "Riz vinaigré, Boeuf mariné cuit, Ananas, Avocat, Tomate cerise, Mais",
          allergene: ""
        },
        {
          nom: "Po'Alima",
          image:
            "https://res.cloudinary.com/hawabowls/image/upload/c_fill,f_auto,h_300,q_70,w_370/v1624885059/Hawabowls/site_media/Po_alima_eq9yob.webp",
          desc:
            "Riz vinaigré, Boeuf mariné cuit, Ananas, Avocat, Tomate cerise, Mais",
          allergene: ""
        },

        {
          nom: "Création Poké ",
          image:
            "https://res.cloudinary.com/hawabowls/image/upload/c_fill,f_auto,h_300,q_70,w_370/v1625124516/Hawabowls/site_media/c4f117b3-e7de-4729-8e14-ff6ff3461dba_vqylzt.webp",
          desc:
            "Choissisez vous mêmes les ingrédients qui composeront votre poké parmi nos base, veggies, protéine, toopings et sauce",
          allergene: ""
        }
      ],

      entrees: [
        {
          nom: "Salade de mangue",
          image:
            "https://res.cloudinary.com/hawabowls/image/upload/c_fill,f_auto,h_300,q_70,w_370/v1624875435/Hawabowls/site_media/Salade_de_mangue_ihmqz7.webp",
          desc: "",
          allergene: ""
        },
        {
          nom: "Salade d'ananas",
          image:
            "https://res.cloudinary.com/hawabowls/image/upload/c_fill,f_auto,h_300,q_70,w_370/v1624875431/Hawabowls/site_media/salade_d_ananas_tjk32i.webp",
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
          image:
            "https://res.cloudinary.com/hawabowls/image/upload/c_fill,f_auto,h_300,q_70,w_370/v1625050481/Hawabowls/site_media/moelleux_au_chocolat_wl4d0o.webp",
          desc: "",
          allergene: ""
        },
        {
          nom: "Shia",
          image:
            "https://res.cloudinary.com/hawabowls/image/upload/c_fill,f_auto,h_300,q_70,w_370/v1624875439/Hawabowls/site_media/chia_bowl_vxul2s.webp",
          desc: "",
          allergene: ""
        }
      ],

      boissons: [
        {
          nom: "Tensai thé Blanc",
          image:
            "https://res.cloudinary.com/hawabowls/image/upload/c_fill,f_auto,h_300,q_70,w_370/Hawabowls/site_media/Th%C3%A9_blanc_myrtille_aiudjf.webp",
          desc: "",
          allergene: ""
        },
        {
          nom: "Tensai matcha ",
          image:
            "https://res.cloudinary.com/hawabowls/image/upload/c_fill,f_auto,h_300,q_70,w_370/v1624875440/Hawabowls/site_media/th%C3%A9_matcha_menthe_poivre_s59msu.webp",
          desc: "",
          allergene: ""
        },
        {
          nom: "Tensai thé vert",
          image:
            "https://res.cloudinary.com/hawabowls/image/upload/c_fill,f_auto,h_300,q_70,w_370/v1624884679/Hawabowls/site_media/Th%C3%A9_vert_citron_zavocf.webp",
          desc: "",
          allergene: ""
        }
      ],
      selectionedDish: {}
    };
  },
  methods: {
    showCurrent(index) {
      this.$refs[index].scrollIntoView();
    },
    toggle(section) {
      if (section == "poke") {
        /*   this.showCurrent("pokebowls-1"); */
        this.poke = !this.poke;
        this.entree = false;
        this.boisson = false;
        this.bubble = false;
        this.dessert = false;
      }
      if (section == "entree") {
        /*   this.showCurrent("entree"); */
        this.entree = !this.entree;
        this.poke = false;
        this.bubble = false;
        this.boisson = false;
        this.dessert = false;
      }
      if (section == "boisson") {
        /*     this.showCurrent("boisson"); */
        this.boisson = !this.boisson;
        this.bubble = false;
        this.poke = false;
        this.entree = false;
        this.dessert = false;
      }
      if (section == "dessert") {
        /* this.showCurrent("dessert"); */
        this.dessert = !this.dessert;
        this.bubble = false;
        this.boisson = false;
        this.poke = false;
        this.entree = false;
      }
      if (section == "bubble") {
        /* this.showCurrent("dessert"); */
        this.bubble = !this.bubble;
        this.dessert = false;
        this.boisson = false;
        this.poke = false;
        this.entree = false;
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
