<template>
  <div
    :class="isCard ? '' : 'lg:h-screen'"
    class="container mx-auto p-6 grid grid-cols-1 row-gap-12 lg:grid-cols-10 lg:col-gap-10 lg:pt-12"
  >
    <Payment
      @handle-card="handleCard"
      @change-parent="handleAlert"
      :total="total"
    ></Payment>
    <Summary :items="items"></Summary>
    <Alert
      :visible="alertVisible"
      position="top-right"
      color="success"
      title="Success"
      description="Your payment has been successfully processed."
    />
  </div>
</template>

<script>
import Payment from "~/components/user/checkout/Payment";
import Summary from "~/components/user/checkout/Summary";
import Alert from "~/components/user/checkout/Alert";
import { loadStripe } from "@stripe/stripe-js";
const style = {
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: "500",
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883"
      },
      "::placeholder": {
        color: "#87BBFD"
      }
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE"
    }
  }
};
export default {
  layout: "clean",
  components: {
    Payment,
    Summary,
    Alert
  },
  head() {
    return { script: [{ src: "https://js.stripe.com/v3/" }] };
  },
  data() {
    let pk = process.env.STRIPE_PK;
    let stripe = null;
    let elements = null;
    return {
      items: [
        {
          title: "Title 1",
          description: "lorem impsu liwe",
          price: 550
        },
        {
          title: "Title 2",
          description: "lorem impsu liwe",
          price: 250
        },
        {
          title: "Title 3",
          description: "lorem impsu liwe",
          price: 150
        }
      ],
      alertVisible: false,
      total: 0,
      isCard: true,
      loading: true
    };
  },
  methods: {
    handleSubmit(event) {
      if (loading.value) return;
      console.log("hi", event);
    },
    async loadStripe() {
      const ELEMENT_TYPE = "card";
      console.log(process.env.STRIPE_PK);

      this.stripe = await loadStripe(process.env.STRIPE_PK);
      this.elements = this.stripe.elements();
      const element = this.elements.create(ELEMENT_TYPE, style);
      element.mount("#test");
      this.loading = false;
    },
    getTotal(items) {
      items.forEach(item => {
        this.total += item.price;
      });
    },
    handleAlert() {
      this.alertVisible = true;
      setTimeout(() => {
        this.alertVisible = false;
      }, 4000);
    },
    handleCard() {
      this.isCard = true;
    }
  },
  mounted() {
    this.loadStripe();
    this.getTotal(this.items);
  }
};
</script>

<style></style>
