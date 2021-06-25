<template>
  <div class="flex h-98 w-full p-1 ">
    <div class="hidden  h-98 w-full p-4 sm:flex justify-end">
      <div class=" h-full max-w-3xl ">
        <img
          class="h-full w-full"
          src="https://images.unsplash.com/photo-1527731149372-fae504a1185f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt=""
        />
      </div>
    </div>

    <div
      class=" h-98 w-full  flex-col  items-center sm:space-y-2 md:sm:space-y-4"
    >
      <div class=" h-72 w-full sm:max-w-md sm:-ml-14  border-8 border-white">
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1537519646099-335112f03225?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </div>
      <div class="px-4 py-2 overflow-hidden">
        <h3 class=" text-sm font-semibold text-gray-800">
          Default Taiwindcss Config
        </h3>

        <p class=" mt-1 text-gray-500 max-w-xs truncate ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
          fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.
        </p>
        <button
          type="button"
          class="inline-flex items-center bg-primary-500 mt-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Voir l'article

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2 -mr-1 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
