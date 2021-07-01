<template>
  <div class="max-w-xs mx-auto bg-white rounded-md shadow-md">
    <div class="h-64">
      <img
        class="w-full rounded-t shadow h-full object-cover object-center"
        :src="post.url"
        alt=""
      />
    </div>
    <div class="py-2 px-2">
      <!--  <span class="text-accent-200 ">{{ post.source }}</span> -->
      <!-- <h3 class="font-semibold text-gray-800">{{ post.titre }}</h3> -->
      <!--  <p class="text-gray-600 truncate">{{ post.caption }}</p> -->
    </div>
    <div class="flex justify-around pb-1">
      <div class="fill-accent-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="#ffffff"
          stroke="#f8b04d"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
            stroke-width="2"
          />
        </svg>
        <span>
          {{ post.like }}
        </span>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#f8b04d"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>

        <span>{{ post.comment }}</span>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#f8b04d"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>

        <span>{{ post.share }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCarrousel",
  props: ["post", "source"]
};
</script>

<style></style>
