<template>
  <div class="col-span-1 lg:col-span-6">
    <h4 class="text-3xl text-gray-700 mb-5">Information de payement</h4>
    <form @submit.prevent="handleSubmit">
      <div class="p-10 rounded-md shadow-md bg-white">
        <div class="mb-6">
          <label class="block mb-3 text-gray-600" for=""
            >Nom de la commande</label
          >
          <input
            type="text"
            class="
              border border-gray-500
              rounded-md
              inline-block
              py-2
              px-3
              w-full
              text-gray-600
              tracking-wider
            "
          />
        </div>
        <div class="mb-6">
          <label class="block mb-3 text-gray-600" for="">Telephone</label>
          <input
            type="mobile"
            class="
              border border-gray-500
              rounded-md
              inline-block
              py-2
              px-3
              w-full
              text-gray-600
              tracking-wider
            "
          />
        </div>
        <div class="mb-6">
          <label class="block mb-3 text-gray-600" for=""
            >Carte Information
          </label>
          <div
            class="border border-gray-500 py-2 px-3 rounded-md"
            id="card"
          ></div>
        </div>

        <div class="mb-6 text-right">
          <span class="text-right font-bold"
            >{{ loading ? "Loading..." : `Payer ${total}` }} EUR</span
          >
        </div>
        <div>
          <button
            type="submit"
            :disabled="loading"
            :class="[loading ? 'bg-primary-300' : 'bg-primary-500']"
            class="
              w-full
              text-ceenter
              px-4
              py-3
              hover:bg-primary-700
              rounded-md
              shadow-md
              text-white
              font-semibold
            "
          >
            Confirm payment
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { loadStripe } from "@stripe/stripe-js";
const style = {
  style: {
    base: {
      border: "1px solid",
      iconColor: "#c4f0ff",
      color: "#30377f",
      fontWeight: "500",
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883"
      },
      "::placeholder": {
        color: "#30377f"
      }
    },
    invalid: {
      iconColor: "#FFC7EE",
      color: "red"
    }
  }
};
export default {
  name: "Payment",
  props: {
    total: Number
  },
  data() {
    return {
      elements: null,
      stripe: null,
      loading: true
    };
  },
  methods: {
    finishPayment() {
      this.$emit("change-parent");
    },
    async handleSubmit(event) {
      if (this.loading) return;
      this.loading = true;

      const { name, mobile } = Object.fromEntries(new FormData(event.target));

      const cardElement = this.elements.getElement("card");
      try {
        const response = await this.$axios.post("/api/order/stripe", {
          amount: this.total * 100
        });
        const secret = response.data.secret;
        console.log("secret", secret);
        const billingDetails = {
          name,
          mobile
        };
        const paymentMethodReq = await this.stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: billingDetails
        });
        console.log("error?", paymentMethodReq);
        const { error } = await this.stripe.confirmCardPayment(secret, {
          payment_method: paymentMethodReq.paymentMethod.id
        });
        this.loading = false;
        console.log("error?", error);
        router.push("/success");
      } catch (error) {
        console.log("error", error);
        this.loading = false;
      }
    },
    async loadStripe() {
      const ELEMENT_TYPE = "card";
      console.log(process.env.STRIPE_PK);

      this.stripe = await loadStripe(process.env.STRIPE_PK);
      this.elements = this.stripe.elements();
      const element = this.elements.create(ELEMENT_TYPE, style);
      element.mount("#card");
      this.loading = false;
    }
  },
  mounted() {
    this.loadStripe();
  }
};
</script>
