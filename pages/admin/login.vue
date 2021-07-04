<template>
  <div
    class="
      flex
      max-w-sm
      mx-auto
      overflow-hidden
      bg-white
      rounded-lg
      shadow-lg
      dark:bg-gray-800
      lg:max-w-4xl
    "
  >
    <div
      class="hidden bg-cover lg:block lg:w-1/2 t object-cover"
      style=""
    ></div>

    <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
      <h2
        class="text-2xl font-semibold text-center text-gray-700 dark:text-white"
      >
        Hawabowls
      </h2>

      <p class="text-xl text-center text-gray-600 dark:text-gray-200">
        Bienvenu menbres du Staff
      </p>

      <a
        href="#"
        class="
          flex
          items-center
          justify-center
          mt-4
          text-gray-600
          rounded-lg
          shadow-md
          dark:bg-gray-700
          dark:text-gray-200
          hover:bg-gray-100
          dark:hover:bg-gray-600
        "
      >
      </a>

      <div class="flex items-center justify-between mt-4">
        <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

        <a
          href="#"
          class="
            text-xs text-center text-gray-500
            uppercase
            dark:text-gray-400
            hover:underline
          "
          >Connexion avec email</a
        >

        <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
      </div>
      <form @submit.prevent="connexion">
        <div class="mt-4">
          <label
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-600
              dark:text-gray-200
            "
            for="LoggingEmailAddress"
            >Email Address</label
          >
          <input
            id="LoggingEmailAddress"
            class="
              block
              w-full
              px-4
              py-2
              text-gray-700
              bg-white
              border border-gray-300
              rounded-md
              dark:bg-gray-800
              dark:text-gray-300
              dark:border-gray-600
              focus:border-blue-500
              dark:focus:border-blue-500
              focus:outline-none
              focus:ring
            "
            type="email"
            v-model="form.email"
            v-on:change="mailClick = true"
          />
          <p
            v-if="!mailIsValid && mailClick"
            class="text-red-500 text-xs italic"
          >
            Veuillez entrée un email valide
          </p>
        </div>

        <div class="mt-4">
          <div class="flex justify-between">
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-600
                dark:text-gray-200
              "
              for="loggingPassword"
              >Password</label
            >
            <a
              href="#"
              class="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >Forget Password?</a
            >
          </div>

          <input
            id="loggingPassword"
            class="
              block
              w-full
              px-4
              py-2
              text-gray-700
              bg-white
              border border-gray-300
              rounded-md
              dark:bg-gray-800
              dark:text-gray-300
              dark:border-gray-600
              focus:border-blue-500
              dark:focus:border-blue-500
              focus:outline-none
              focus:ring
            "
            type="password"
            v-on:change="passwordClick = true"
            v-model="form.password"
          />
          <p
            v-if="!passwordIsValid && passwordClick"
            class="text-red-500 text-xs italic"
          >
            Veuillez rentrer un mot de passe (min 6) et (max 24)
          </p>
        </div>

        <div class="mt-8">
          <button
            class="
              w-full
              px-4
              py-2
              tracking-wide
              text-white
              transition-colors
              duration-200
              transform
              bg-gray-700
              rounded
              hover:bg-gray-600
              focus:outline-none
              focus:bg-gray-600
            "
          >
            Connexion
          </button>
        </div>
      </form>
      <!--       <div class="flex items-center justify-between mt-4">
        <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

        <a
          href="#"
          class="
            text-xs text-gray-500
            uppercase
            dark:text-gray-400
            hover:underline
          "
          >or sign up</a
        >

        <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
      </div>
      <div class="mt-8">
        <button
          class="
            w-full
            px-4
            py-2
            tracking-wide
            text-white
            transition-colors
            duration-200
            transform
            bg-gray-700
            rounded
            hover:bg-gray-600
            focus:outline-none
            focus:bg-gray-600
          "
        >
          Inscription
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
let store = require("store");
import { mapActions } from "vuex";
export default {
  layout: "auth",
  data() {
    return {
      regMail:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      passwordClick: false,
      mailClick: false,
      form: {
        email: "",
        password: "",
      },
      err: "",
    };
  },
  computed: {
    mailIsValid() {
      return this.regMail.test(this.form.email);
    },
    passwordIsValid() {
      return this.form.password.length >= 6 && this.form.password.length <= 32;
    },
    formIsValid() {
      return this.mailIsValid && this.passwordIsValid;
    },
  },
  methods: {
    ...mapActions({ login: "admin/login", reconnect: "admin/reconnection" }),

    async connexion() {
      if (this.formIsValid) {
        console.log(this.form);
        const client = await this.login(this.form);
        console.log(client);
        if (client.data) {
          console.log(client);
          this.$router.push("/admin");
        }
      } else {
        console.log("invalid form");
      }
    },
    async getAdLogged() {
      if (store.get("tokenAd")) {
        this.$router.push("/admin");
        const client = await this.reconnect(store.get("tokenAd"));

        if (client.data.staff) {
        }
      } else {
      }
    },
  },
  mounted() {
    this.getAdLogged();
  },
};
</script>

<style lang="postcss">
.t {
  background: center/90% no-repeat url("@/assets/img/Fichier1.png");
}
</style>
