<template>
  <section
    class="w-full mx-auto bg-white py-16 px-3 sm:py-24 sm:px-6 lg:px-8"
    id="menu"
  >
    <div class="space-y-12">
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At enim a
          labore quaerat odit possimus reprehenderit quisquam, amet tempore
          consequatur excepturi obcaecati nobis aspernatur nisi incidunt
          voluptates soluta rem distinctio.
        </p>
      </div>
      <div
        class="mx-auto min-w-sm  card-container space-x-2 overflow-x-hidden p-4"
      >
        <div
          @click="toggle('poke')"
          class=" group hover:bg-white relative card h-80 cursor-pointer shadow-lg rounded-lg flex items-end justify-center overflow-hidden"
        >
          <h3
            class="text-2xl lg:text-4xl font-bold text-center text-accent-200 z-10"
          >
            Poke
          </h3>
          <img
            class="absolute h-full w-full group-hover:opacity-80 object-cover"
            src="https://images.unsplash.com/photo-1604259597308-5321e8e4789c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1892&q=80"
            alt=""
          />
        </div>
        <div
          @click="toggle('poke')"
          class=" group hover:bg-white relative card h-80 cursor-pointer shadow-lg rounded-lg flex items-end  justify-center overflow-hidden"
        >
          <h3
            class="text-2xl lg:text-4xl font-bold text-center text-accent-200 z-10"
          >
           Nos Petites faim
          </h3>
          <img
            class="absolute h-full w-full group-hover:opacity-80 object-cover"
            src="https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt=""
          />
        </div>
        <div
          @click="toggle('poke')"
          class=" group hover:bg-white relative card h-80 cursor-pointer shadow-lg rounded-lg flex items-end justify-center overflow-hidden"
        >
          <h3
            class="text-2xl lg:text-4xl font-bold text-center text-accent-200 z-10"
          >
            Bubble
          </h3>
          <img
            class="absolute h-full w-full group-hover:opacity-80 object-cover"
            src="https://images.unsplash.com/photo-1560023907-5f339617ea30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80 "
            alt=""
          />
        </div>
      </div>
     
      </div>
      <ul
        v-if="poke"
        role="list"
        class="
          grid grid-cols-2
          gap-x-4 gap-y-8
          sm:grid-cols-3
          mx-auto
          sm:gap-x-6
          lg:grid-cols-5
          mt-4
          xl:gap-x-8
        "
      >
        <li class="relative" v-for="dish in plats" @click="sendDish(dish)" :key="dish.nom">
          <div
            class="
              group
              block
              w-full
              aspect-w-8 aspect-h-10
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
          <modal v-if="isModal" :item="selectionedDish"></modal>
        </li>

        <!-- More files... -->
      </ul>
      
  
     </div>
  </section>
</template>

<script>
import Modal from './Modal.vue';
export default {
  components: {Modal},

  data() {
    return {
      poke: true,
      boisson: false,
      isModal:false,
      dessert: false,

      plats:[{nom:"Po'Akahi",image:"po'akahi",desc:"Riz vinaigré, Boeuf mariné cuit, Ananas, Avocat, Tomate cerise, Mais, concombre, graîne",allergene:""},
      {nom:"Po'Alua",image:"po'alua",desc:"Riz vinaigré, Boeuf mariné cuit, Ananas, Avocat, Tomate cerise, Mais",allergene:""},
      {nom:"Po'Akolu",image:"po'aha2",desc:"Riz vinaigré, Boeuf mariné cuit, Ananas, Avocat, Tomate cerise, Mais",allergene:""},
      {nom:"Po'Aha",image:"po'aha2",desc:"Riz vinaigré, Boeuf mariné cuit, Ananas, Avocat, Tomate cerise, Mais",allergene:""},
      {nom:"Po'Alima",image:"po'aha2",desc:"Riz vinaigré, Boeuf mariné cuit, Ananas, Avocat, Tomate cerise, Mais",allergene:""}],
      selectionedDish:{}
    };
  },
  methods: {
    toggle(section) {
      if (section == "poke") {
        this.poke = !this.poke;
        this.dessert = false;
        this.boisson = false;
      }
      if (section == "dessert") {
        this.dessert = !this.dessert;
        this.poke = false;
        this.boisson = false;
      }
      if (section == "boisson") {
        this.boisson = !this.boisson;
        this.poke = false;
        this.dessert = false;
      }
    },
    sendDish(dish){
      this.selectionedDish=dish
      this.isModal=true;
    }
  }
};
</script>

<style lang="postcss">
.card{
  min-width: 14rem;
  width: 100%;
  &:hover{
    
    @apply transform -translate-y-3;
  }
}

.card-container{
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
  overflow-x:auto
  @screen sm{
    overflow: hidden ;
  }
  & ::-webkit-scrollbar {
    display: none !important;
  }
}

</style>
