<template>
  <div class="flex h-98 w-full p-1 ">
    <div class="hidden  h-98 w-full p-4 sm:flex justify-end">
      <div class=" h-full max-w-md ">
        <img class="h-full w-full" :src="article.cover[0]" alt="" />
      </div>
    </div>

    <div
      class=" h-98 w-full  flex-col  items-center sm:space-y-2 md:sm:space-y-4"
    >
      <div class=" h-72 w-full sm:max-w-md sm:-ml-14  border-8 border-white">
        <img
          class="h-full w-full object-cover"
          :src="article.cover[1]"
          alt=""
        />
      </div>
      <div class="px-4 py-1 overflow-hidden">
        <h3 class=" text-sm font-semibold text-gray-800">
          {{ article.title }}
        </h3>

        <p class=" mt-1 text-gray-500 max-w-xs truncate ">
          {{ article.short_desc }}
        </p>
        <nuxt-link
          :to="{ name: 'blog-article-slug', params: { slug: article._slug } }"
        >
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
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["article"]
};
</script>

<style></style>
