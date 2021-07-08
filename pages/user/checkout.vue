<template>
  <div
    :class="isCard ? '' : 'lg:h-screen'"
    class="
      container
      mx-auto
      p-6
      grid grid-cols-1
      row-gap-12
      lg:grid-cols-10
      lg:col-gap-10
      lg:pt-12
    "
  >
    <Payment :total="total"></Payment>
    <Summary :items="items"></Summary>
  </div>
</template>

<script>
import Payment from "~/components/user/checkout/Payment";
import Summary from "~/components/user/checkout/Summary";

export default {
  layout: "clean",
  components: {
    Payment,
    Summary,
  },
  head() {
    return { script: [{ src: "https://js.stripe.com/v3/" }] };
  },
  data() {
    return {
      items: [
        {
          title: "Title 1",
          description: "lorem impsu liwe",
          price: 550,
        },
        {
          title: "Title 2",
          description: "lorem impsu liwe",
          price: 250,
        },
        {
          title: "Title 3",
          description: "lorem impsu liwe",
          price: 150,
        },
      ],
      total: 0,
      isCard: true,
      loading: true,
    };
  },
  methods: {
    getTotal(items) {
      items.forEach((item) => {
        this.total += item.price;
      });
    },
  },
  mounted() {
    this.getTotal(this.items);
  },
};
</script>

<style></style>
