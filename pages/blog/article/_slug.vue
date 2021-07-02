<!-- ./src/components/BlogPage.vue -->

<template>
  <main>
    <the-hero :cover="article.cover[1]"></the-hero>
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          class="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <!--  <svg
            class="absolute top-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            class="absolute bottom-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg> -->
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <!--   <span
            class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase"
            >category</span
          > -->
          <h1>
            <span
              class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >{{ article.title }}</span
            >
          </h1>
          <!--  <p
            class="mt-8 text-xl text-gray-500 leading-8"
            v-html="article.content"
          ></p> -->
          <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>
              Les pokés bowls nous viennent tout droit du Pacifique, de la
              tradition hawaïenne. Qui l‘eût cru que ce petit bol coloré,
              gourmand et ancestral contiennent tout ce qu’il faut pour une
              alimentation équilibrée et vitaminée. Le pokés se compose de
              protéines indispensables pour prendre des forces, dans le poké
              original on y retrouve du saumon riche en oméga 3, indispensable
              pour la pression artérielle. Vous trouverez aussi votre bonheur
              avec le thon mariné, le bœuf ou le tofu bio pour nos amis
              végétariens. Des fruits gorgés de soleil pour faire le plein de
              vitamines et en prendre pleins les yeux (mangue, ananas, grenade).
              De légumes croquants pour les fibres (carotte, chou rouge, radis,
              concombre). Des algues pour des saveurs iodées. Des féculents que
              vous retrouvez dans le riz noir ou le riz blanc vinaigrés.
              Saupoudrer votre poké de graines aux nombreuses vertus et vous
              voilà prêt pour une vague de fraicheur.
            </p>
            <h2>A propos des graines</h2>
            <p>
              Une base de riz, du poisson frais livré tous les matins, des
              fruits juteux, des légumes croquants et des graines aux pouvoirs
              exceptionnels. Connaissez-vous les graines et surtout les
              bienfaits que celles-ci procurent à votre organisme ? Les graines
              se mangent en snacking ou bien saupoudrées sur vos pokés,
              certaines en dessert comme dans notre chia bowls mais savez vous
              pourquoi nous les aimons tant ?
            </p>

            <p>
              Chaque graine est unique, et à chaque graine à son lot de
              bienfaits, on comprend bien pourquoi les Hawaïens sont friands de
              poké ! Si tu lis cet article, j'imagine que tu as testé notre
              Po’Alua le plus populaire de la plage. Tu n’as pas pu passer à
              côté des graines de sésame bicolores qui habillent le poké mais
              connais tu les graines de sésames ? Venu des quatre coins du monde
              (Chine, Mexique, Inde) le sésame est populaire et pour cause, il
              améliore le transit intestinal, il est bon pour le cœur, grâce à
              sa forte teneur en acide gras insaturé. Antioxydant, cette graine
              lutte contre les radicaux libres qui sont la cause du
              vieillissement de la peau.
            </p>
            <blockquote>
              <p>
                le sésame est populaire et pour cause, il améliore le transit
                intestinal, il est bon pour le cœur, grâce à sa forte teneur en
                acide gras insaturé. Antioxydant, cette graine lutte contre les
                radicaux libres qui sont la cause du vieillissement de la peau.
              </p>
            </blockquote>
            <p>
              Si je vous dis Chia, vous pensez à Chia Bowls ! Evidemment la
              graine de chia est l’ingrédient principal de ce petit dessert
              sucré à l’agave. Les graines de Chia, ont une grande teneur en
              calcium qui lorsque la posologie est respectée, peuvent être une
              source de calcium à elle-même dans ton alimentation. Baie
              Mexicaine, la graine de chia est aussi excellente pour le cœur, à
              des vertus rassasiantes et permet de prévenir le diabète.
            </p>
            <h3>Pimpe ton poké</h3>
            <p>
              Varie les plaisirs et pimpe ton poké avec toutes les graines que
              Hawabowls te propose pour tester toutes les combinaisons : Graine
              de courges, Noix de cajou, Graine de lin et pour le plaisir et
              surtout pour les gourmands des oignons frits.
            </p>
            <p>
              Les graines de lin ont fait leur apparition sur le poké du sportif
              ce mois-ci, cette graine peu présente dans nos habitudes de
              consommation est juste dingue, ce super -aliment est à lui seul :
              sources de minéraux, d’acide gras essentiel, de fibre et de
              vitamines, rien que ça ! Ses différentes vertus lui permettent
              d’améliorer le système cardiovasculaire et digestif de chacun.
            </p>

            <p>
              La noix de Cajou, cette protéine végétale qu’on consomme à l’apéro
              est bien plus intéressante qu’elle en a l’air. Elle est parfaite
              lorsque le soleil se cache avec les périodes hivernales, elle vous
              apporte le magnésium nécessaire, idéal pour refaire le plein
              d’énergie et de bonne humeur, très Hawa vibes !
            </p>
            <p>
              On espère t’avoir appris quelque chose, vient chez Hawa Bowls
              tester toutes les graines et faire le plein d’énergie.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TheHero from "~/components/TheHero.vue";
export default {
  data() {
    return {
      article: {
        _id: 0,
        _slug: "les-graines-super-food",
        title: "Les graines Super food",

        cover: ["/img/blog/riz col.png", "/img/blog/riz row.png"],
        content: `<body class="c5"><p class="c1 c4"><span class="c0">Les graines Super food</span></p><p class="c1 c2"><span class="c0"></span></p><p class="c1 c4"><span class="c0">Les pokés bowls nous viennent tout droit du Pacifique, de la tradition hawaïenne. Qui l‘eût cru que ce petit bol coloré, gourmand et ancestral contiennent tout ce qu’il faut pour une alimentation équilibrée et vitaminée. Le pokés se compose de protéines indispensables pour prendre des forces, dans le poké original on y retrouve du saumon riche en oméga 3, indispensable pour la pression artérielle. Vous trouverez aussi votre bonheur avec le thon mariné, le bœuf ou le tofu bio pour nos amis végétariens. Des fruits gorgés de soleil pour faire le plein de vitamines et en prendre pleins les yeux (mangue, ananas, grenade). De légumes croquants pour les fibres (carotte, chou rouge, radis, concombre). Des algues pour des saveurs iodées. Des féculents que vous retrouvez dans le riz noir ou le riz blanc vinaigrés. Saupoudrer votre poké de graines aux nombreuses vertus et vous voilà prêt pour une vague de fraicheur.</span></p><p class="c1"><span class="c3">A propos des graines </span></p><p class="c1 c4"><span class="c0">Une base de riz, du poisson frais livré tous les matins, des fruits juteux, des légumes croquants et des graines aux pouvoirs exceptionnels. Connaissez-vous les graines et surtout les bienfaits que celles-ci procurent à votre organisme&nbsp;? Les graines se mangent en snacking ou bien saupoudrées sur vos pokés, certaines en dessert comme dans notre chia bowls mais savez vous pourquoi nous les aimons tant&nbsp;?</span></p><p class="c1 c4"><span class="c0">Chaque graine est unique, et à chaque graine à son lot de bienfaits, on comprend bien pourquoi les Hawaïens sont friands de poké&nbsp;! Si tu lis cet article, j'imagine que tu as testé notre Po’Alua le plus populaire de la plage. Tu n’as pas pu passer à côté des graines de sésame bicolores qui habillent le poké mais connais tu les graines de sésames&nbsp;? Venu des quatre coins du monde (Chine, Mexique, Inde) le sésame est populaire et pour cause, il améliore le transit intestinal, il est bon pour le cœur, grâce à sa forte teneur en acide gras insaturé. Antioxydant, cette graine lutte contre les radicaux libres qui sont la cause du vieillissement de la peau.</span></p><p class="c1 c4"><span class="c0">Si je vous dis Chia, vous pensez à Chia Bowls&nbsp;! Evidemment la graine de chia est l’ingrédient principal de ce petit dessert sucré à l’agave. Les graines de Chia, ont une grande teneur en calcium qui lorsque la posologie est respectée, peuvent être une source de calcium à elle-même dans ton alimentation. Baie Mexicaine, la graine de chia est aussi excellente pour le cœur, à des vertus rassasiantes et permet de prévenir le diabète.</span></p><p class="c1"><span class="c0">Varie les plaisirs et pimpe ton poké avec toutes les graines que Hawabowls te propose pour tester toutes les combinaisons : Graine de courges, Noix de cajou, Graine de lin et pour le plaisir et surtout pour les gourmands des oignons frits. </span></p><p class="c1"><span class="c0">Les graines de lin ont fait leur apparition sur le poké du sportif ce mois-ci, cette graine peu présente dans nos habitudes de consommation est juste dingue, ce super -aliment est à lui seul&nbsp;: sources de minéraux, d’acide gras essentiel, de fibre et de vitamines, rien que ça&nbsp;! Ses différentes vertus lui permettent d’améliorer le système cardiovasculaire et digestif de chacun.</span></p><p class="c1"><span class="c0">La noix de Cajou, cette protéine végétale qu’on consomme à l’apéro est bien plus intéressante qu’elle en a l’air. Elle est parfaite lorsque le soleil se cache avec les périodes hivernales, elle vous apporte le magnésium nécessaire, idéal pour refaire le plein d’énergie et de bonne humeur, très Hawa vibes&nbsp;!</span></p><p class="c1"><span class="c0">On espère t’avoir appris quelque chose, vient chez Hawa Bowls tester toutes les graines et faire le plein d’énergie.</span></p></body>`
      }
    };
  },
  head() {
    const meta = [
      {
        property: "og:title",
        content: this.article.title,
        hid: "og:title"
      },
      {
        property: "og:description",
        content: this.article.short_desc,
        hid: "og:description"
      },
      {
        property: "description",
        content: this.article.short_desc,
        hid: "description"
      }
    ];
    if (this.article.cover !== null) {
      meta.push({
        property: "og:image",
        content: `${this.article.cover[0]}`,
        hid: "og:image"
      });
    }
    return {
      title: this.article.title,
      meta
    };
  },
  components: { TheHero },
  layout: "blog"
};
</script>

<style></style>
