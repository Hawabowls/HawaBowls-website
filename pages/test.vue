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

      <div>
        <card-carrousel
          :post="lastNews[0]"
          :source="lastNews[0].source"
        ></card-carrousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastNews: [
        {
          id: 0,
          url:
            "https://images.unsplash.com/photo-1556040220-4096d522378d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          titre: "Hola que tal",
          caption: "Bienvenido",
          source: "blog"
        },
        {
          id: 1,
          url:
            "https://images.unsplash.com/photo-1556040220-4096d522378d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          titre: "Poke Poke Poke",
          caption:
            "dcsbdcqhijkejxwhmlzdUIFBDCQJKXWGUKEFJBCSDKHQIODEDbsvisdb<lqsk",
          source: "instragram"
        },
        {
          id: 2,
          url:
            "https://images.unsplash.com/photo-1556040220-4096d522378d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          titre: "Hola que tal",
          caption:
            "dcsbdcqhijkejxwhmlzdUIFBDCQJKXWGUKEFJBCSDKHQIODEDbsvisdb<lqsk",
          source: "blog"
        },
        {
          id: 3,
          url:
            "https://images.unsplash.com/photo-1556040220-4096d522378d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          titre: "Poke Poke Poke",
          caption:
            "dcsbdcqhijkejxwhmlzdUIFBDCQJKXWGUKEFJBCSDKHQIODEDbsvisdb<lqsk",
          source: "instragram"
        },

        {
          id: 4,
          url:
            "https://images.unsplash.com/photo-1556040220-4096d522378d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          titre: "Poke Poke Poke",
          caption:
            "dcsbdcqhijkejxwhmlzdUIFBDCQJKXWGUKEFJBCSDKHQIODEDbsvisdb<lqsk",
          source: "instragram"
        },
        {
          id: 5,
          url:
            "https://images.unsplash.com/photo-1556040220-4096d522378d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
          titre: "Poke Poke Poke",
          caption:
            "dcsbdcqhijkejxwhmlzdUIFBDCQJKXWGUKEFJBCSDKHQIODEDbsvisdb<lqsk",
          source: "instragram"
        }
      ]
    };
  }
};
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
