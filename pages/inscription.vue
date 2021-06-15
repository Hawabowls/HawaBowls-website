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

      <div class="mt-4">
        <label
          class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          for="LoggingEmailAddress"
          >Nom</label
        >
        <input
          id="LoggingEmailAddress"
          class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="email"
        />
      </div>
      <div class="mt-4">
        <label
          class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          for="LoggingEmailAddress"
          >Prénom</label
        >
        <input
          id="LoggingEmailAddress"
          class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="email"
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
          class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="tel"
          pattern="[0-9]{2}-[0-9]{2}-[0-9]{6}"
        />
      </div>

      <div class="mt-4">
        <label
          class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          for="LoggingEmailAddress"
          >Email Address</label
        >
        <input
          id="LoggingEmailAddress"
          class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="email"
        />
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
          class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="password"
        />
      </div>
      <div class="mt-6 mb-3">
        <button
          class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary-600 rounded hover:bg-primary-700 focus:outline-none focus:bg-primary-700"
        >
          Inscription
        </button>
      </div>

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
export default {
  layout: "auth"
};
</script>

<style>
.t {
  background: center/90% no-repeat url("@/assets/img/Fichier1.png");
}
</style>
