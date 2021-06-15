<template>
  <header class=" h-screen color-bg lake">
    <video
      loop
      muted
      autoplay
      class="showcase-video  object-cover w-full h-full opacity-90 mix-blend-overlay"
    >
      <source src="~/assets/img/banner/video_hawa.mp4" type="video/mp4" />
    </video>
    <the-navbar></the-navbar>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style>
.color-bg {
  background-color: #2db8f853;
}
</style>
