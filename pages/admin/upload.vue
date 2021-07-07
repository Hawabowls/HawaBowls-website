<template>
  <div>
    <div class="container mt-10">
      <div class="card bg-white">
        <img :src="image" alt="card_image" />
        <input
          @change="handleImage"
          class="custom-input"
          type="file"
          accept="image/*"
        />
      </div>
    </div></div
></template>

<script>
export default {
  data() {
    return {
      image: "",
      remoteUrl: ""
    };
  },
  methods: {
    handleImage(e) {
      const selectedImage = e.target.files[0]; // get first file
      //compress image resize
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();

      reader.onload = e => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(fileObject);
    },
    getFiles(obj) {
      console.log(obj);
    }
  }
};
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}
body {
  background: #d8dddb;
}
.container {
  display: flex;
  justify-content: center;
}
.mt-10 {
  margin-top: 10rem;
}
.bg-white {
  background: #fff;
}
.card {
  height: 10rem;
  width: 20rem;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}
img {
  width: 17rem;
}
</style>
