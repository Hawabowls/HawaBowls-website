<template>
  <div class="container">
    <div>
      <h1 class="title">
        Test composant
      </h1>
      <div>
        <BaseButton
          class="btn-test1"
          href="/test"
          text="Commander"
        ></BaseButton>
        <BaseButton
          class="btn-test2"
          href="/test"
          text="Commander"
        ></BaseButton>
        <BaseButton
          class="btn-test3"
          href="/test"
          text="Commander"
        ></BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
