<template>
  <div
    class="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl"
  >
    <div class="hidden bg-cover lg:block t lg:w-1/2" style=""></div>

    <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
      <h2
        class="text-2xl font-semibold text-center text-gray-700 dark:text-white"
      >
        Hawabowls
      </h2>

      <p class="text-xl text-center text-gray-600 dark:text-gray-200">
        Bienvenu
      </p>

      <div class="flex items-center justify-between mt-4">
        <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

        <a
          href="#"
          class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >Inscription avec email</a
        >

        <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
      </div>
      <form @submit.prevent="inscription">
        <div class="mt-4">
          <label
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            for="LoggingEmailAddress"
            >Nom</label
          >
          <input
            id="Loggingfirstname"
            v-model="form.firstname"
            class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            for="LoggingEmailAddress"
            >Prénom</label
          >
          <input
            id="Logginglastname"
            v-model="form.lastname"
            class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="text"
          />
        </div>
        <div class="mt-4">
          <div class="flex justify-between">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="loggingMobile"
              >Mobile</label
            >
          </div>

          <input
            id="loggingMobile"
            v-model="form.mobile"
            v-on:change="mobileClick = true"
            class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="tel"
            pattern="[0][0-9][0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
          />
          <p
            v-if="!passwordIsValid && passwordClick"
            class="text-red-500 text-xs italic"
          >
            Veuillez rentrer un mot de passe (min 6) et (max 24)
          </p>
        </div>

        <div class="mt-4">
          <label
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            for="LoggingEmailAddress"
            >Email Address</label
          >
          <input
            id="LoggingEmailAddress"
            v-model="form.email"
            v-on:change="mailClick = true"
            class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="email"
          />
          <p
            v-if="!mailIsValid && mailClick"
            class="text-red-500 text-xs italic"
          >
            Please enter valid mail
          </p>
        </div>
        <div class="mt-4">
          <div class="flex justify-between">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="loggingPassword"
              >Mot de Passe</label
            >
            <a
              href="#"
              class="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >Mot de Passe oublié?</a
            >
          </div>

          <input
            id="loggingPassword"
            v-model="form.password"
            v-on:change="passwordClick = true"
            class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="password"
          />
          <p
            v-if="!passwordIsValid && passwordClick"
            class="text-red-500 text-xs italic"
          >
            Veuillez rentrer un mot de passe (min 6) et (max 24)
          </p>
        </div>
        <div class="mt-6 mb-3">
          <button
            class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary-600 rounded hover:bg-primary-700 focus:outline-none focus:bg-primary-700"
          >
            Inscription
          </button>
        </div>
      </form>

      <!--  <div class="flex items-center justify-between mt-4">
        <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

        <a
          href="#"
          class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >ou Inscription</a
        >

        <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  layout: "auth",

  data() {
    return {
      regMail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      form: {
        email: "",
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        password: ""
      },
      passwordClick: false,
      mailClick: false
    };
  },
  computed: {
    mobileIsValid() {
      return this.form.mobile.match(/\d/g).length === 10;
    },
    mailIsValid() {
      return this.regMail.test(this.form.email);
    },
    passwordIsValid() {
      return this.form.password.length >= 6 && this.form.password.length <= 32;
    },
    formIsValid() {
      return this.mobileIsValid && this.mailIsValid && this.passwordIsValid;
    }
  },
  methods: {
    ...mapActions({ register: "user/register" }),
    async inscription() {
      if (this.formIsValid) {
        console.log(this.form);
        const client = await this.register(this.form);
        if (client.data) {
          console.log(client);
          this.$router.push("/cart");
        }
      } else {
        console.log("invalid form");
      }
    }
  }
};
</script>

<style>
.t {
  background: center/90% no-repeat url("@/assets/img/Fichier1.png");
}
</style>
