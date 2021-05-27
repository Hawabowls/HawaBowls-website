<template>
  <button :href="url" class="btn ">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: ["url", "text"]
};
</script>

<style></style>
