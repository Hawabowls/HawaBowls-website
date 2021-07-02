<template></template>

<script>
export default {
  head() {
    const meta = [
      {
        property: "og:title",
        content: "Condition génerale de vente",
        hid: "og:title"
      },
      {
        property: "og:description",
        content:
          "Condition génerale de vente des produits dans le click n collect",
        hid: "og:description"
      },
      {
        property: "description",
        content:
          "Condition génerale de vente des produits dans le click n collect",
        hid: "description"
      }
    ];
    meta.push({
      property: "og:image",
      content: "www.hawabowls.com/img/Fichier 3.png",
      hid: "og:image"
    });
    return {
      title: this.article.title,
      meta
    };
  }
};
</script>

<style></style>
