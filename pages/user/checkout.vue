<template
  ><section class="bg-gray-100">
    <stripe-checkout
      ref="checkoutRef"
      :pk="pk"
      mode="payment"
      :lineItems="items"
      :successUrl="successUrl"
      :cancelUrl="cancelUrl"
    />
    <button @click="checkout">Checkout</button>
  </section>
</template>

<script>
export default {
  layout: "clean",
  data() {
    this.pk = process.env.STRIPE_PK;
    return {
      items: [
        {
          sku: "prod_JlBSBYK1pU8M6s",
          name: "Po'akahi",
          quantity: 1
        }
      ],
      successUrl: "http://localhost:3000/user/commandes/index",
      cancelUrl: "http://localhost:3000/user/commandes/faillures"
    };
  },
  methods: {
    checkout() {
      this.$refs.checkoutRef.redirectToCheckout();
    }
  }
};
</script>

<style></style>
