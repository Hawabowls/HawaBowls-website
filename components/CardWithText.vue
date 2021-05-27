<template>
  <div class="flex  max-w-sm m-2 items-center py-4 px-1">
    <div class="w-32 h-24 bg-gray-400 mx-1">
      <slot></slot>
    </div>
    <div>
      <span>{{ titre }}</span>
      <p class="text-center leading-tight">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["titre", "text"]
};
</script>

<style></style>
