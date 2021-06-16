<template>
  <div class="container relative">
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
    <div
      class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
      style="transform: translateZ(0);"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-gray-900 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
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

<style lang="postcss"></style>
