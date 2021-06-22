<template>
  <div v-if="loading" class="loading-page">
    <div>
      <img clas="w-64 h-64 bounce" src="~assets/img/Fichier 3.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
};
</script>

<style lang="postcss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #30377f;
  z-index: 3000;
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 180px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
