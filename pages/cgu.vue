<template><div></div></template>

<script>
export default {
  head() {
    const meta = [
      {
        property: "og:title",
        content: "Condition génerale d'utilisation",
        hid: "og:title"
      },
      {
        property: "og:description",
        content:
          "Condition génerale d'utilisation du système de le click n collect",
        hid: "og:description"
      },
      {
        property: "description",
        content:
          "Condition génerale d'utilisation du système de le click n collect",
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
