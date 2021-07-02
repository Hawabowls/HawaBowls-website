<template>
  <div>
    <the-navbar class="bg-primary-500"></the-navbar>

    <div class="relative bg-white">
      <div class="lg:absolute lg:inset-0">
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            alt="photo de bureau"
          />
        </div>
      </div>
      <div
        class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2"
      >
        <div class="lg:pr-8">
          <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Que pouvons-nous faire pour vous ?
            </h2>
            <p class="mt-4 text-lg text-gray-500 sm:mt-3">
              Nous aimerions recevoir de vos nouvelles! Envoyez-nous un message
              via le formulaire ci-contre, ou écrivez-nous. Nous aimerions
              recevoir de vos nouvelles! Envoie-nous un message via le
              formulaire ci-contre ou par e-mail.
            </p>
            <form
              action="#"
              method="POST"
              class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  for="first_name"
                  class="block text-sm font-medium text-gray-700"
                  >Prénom</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    class="block w-full shadow-sm sm:text-sm focus:ring-accent-500 focus:border-accent-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-sm font-medium text-gray-700"
                  >Nom</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="block w-full shadow-sm sm:text-sm focus:ring-accent-500 focus:border-accent-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Email</label
                >
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="block w-full shadow-sm sm:text-sm focus:ring-accent-500 focus:border-accent-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="entreprise"
                  class="block text-sm font-medium text-gray-700"
                  >Entreprise</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="entreprise"
                    id="entreprise"
                    autocomplete="organization"
                    class="block w-full shadow-sm sm:text-sm focus:ring-accent-500 focus:border-accent-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700"
                    >Telephone</label
                  >
                  <span id="phone_description" class="text-sm text-gray-500"
                    >Optional</span
                  >
                </div>
                <div class="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autocomplete="tel"
                    aria-describedby="phone_description"
                    class="block w-full shadow-sm sm:text-sm focus:ring-accent-500 focus:border-accent-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label
                    for="how_can_we_help"
                    class="block text-sm font-medium text-gray-700"
                    >Comment pouvons-nous vous aider?</label
                  >
                  <span
                    id="how_can_we_help_description"
                    class="text-sm text-gray-500"
                    >Max. 500 characters</span
                  >
                </div>
                <div class="mt-1">
                  <textarea
                    id="how_can_we_help"
                    name="how_can_we_help"
                    aria-describedby="how_can_we_help_description"
                    rows="4"
                    class="block w-full shadow-sm sm:text-sm focus:ring-accent-500 focus:border-accent-500 border border-gray-300 rounded-md"
                  ></textarea>
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="how_did_you_hear_about_us"
                  class="block text-sm font-medium text-gray-700"
                  >Comment avez-vous entendu parler de nous?</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="how_did_you_hear_about_us"
                    id="how_did_you_hear_about_us"
                    class="shadow-sm focus:ring-accent-500 focus:border-accent-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div class="text-right sm:col-span-2">
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border w-full border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-accent-400 hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
                >
                  Envoyé
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavbar from "~/components/TheNavbar.vue";
export default {
  components: { TheNavbar },
  layout: "clean",
  head: {
    title: "Page de contact",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Si vous avez des idées de projet ou de partenariat dont vous aimeriez nous faire part. N'hésitez pas c'est par ici."
      }
    ]
  }
};
</script>

<style></style>
