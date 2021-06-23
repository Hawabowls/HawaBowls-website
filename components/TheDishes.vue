<template>
  <section class="bg-gray-600 " id="menu">
    <div class="container px-5 py-24 mx-auto flex flex-wrap ">
      <div
        class="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 justify-items-center"
      >
        <div class="flex md:flex-col items-center p-4">
          <div
            :class="{ ' bg-secondary-400': clicked.step1 }"
            @click="clicked.step1 = !clicked.step1"
            class="p-1 w-12 h-12 border-2 border-secondary-300 rounded-full"
          >
            <svg
              id="Calque_1"
              class="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 595.28 471.09"
            >
              <defs>
                <style>
                  .cls-1 {
                    fill: #fff;
                  }
                </style>
              </defs>
              <path
                class="cls-1"
                d="M257.15,209.28c7.73,0,14-2.05,14-4.58s-6.27-4.58-14-4.58-14,2-14,4.58S249.41,209.28,257.15,209.28Z"
              />
              <path
                class="cls-1"
                d="M303.08,219.64c1.87-1.7-.83-7.72-6-13.44s-10.94-9-12.81-7.29.83,7.72,6,13.45S301.21,221.34,303.08,219.64Z"
              />
              <path
                class="cls-1"
                d="M263,183.88c6.7,3.87,13.15,5.23,14.42,3s-3.14-7.1-9.84-11-13.16-5.23-14.42-3S256.33,180,263,183.88Z"
              />
              <path
                class="cls-1"
                d="M230.39,224c2.47-.55,3.09-7.12,1.39-14.67s-5.08-13.21-7.54-12.66-3.09,7.13-1.4,14.67S227.92,224.52,230.39,224Z"
              />
              <path
                class="cls-1"
                d="M281.33,239.93c-3.7,0-7.35-.11-11-.28a38.74,38.74,0,0,0,5.59-3.43c6.24-4.56,10.09-9.92,8.6-12s-7.76,0-14,4.57c-4.94,3.61-8.37,7.72-8.85,10.29-31.07-2.52-59.08-10.91-80.91-23.29a89.91,89.91,0,0,0-.56,9.76,88.25,88.25,0,0,0,176.49,1.74C334.65,235.32,308.88,239.93,281.33,239.93Z"
              />
            </svg>
          </div>
          <div class=" w-6 md:w-1 md:h-6 h-1 bg-gray-100 roun"></div>
          <div
            :class="{ ' bg-secondary-400': clicked.step2 }"
            @click="clicked.step2 = !clicked.step2"
            class="p-1 w-12  h-12 border-2 border-secondary-300  rounded-full"
          >
            <svg
              class="w-full h-full"
              data-name="Calque 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 595.28 471.09"
            >
              <defs>
                <style>
                  .cls-1 {
                    fill: #fff;
                  }
                </style>
              </defs>
              <path
                class="cls-1"
                d="M266.25,305.05c-6.89-8.76-27-38-20.91-73-33.64,12.61-41-10.51-41-10.51s14.72-14.72,43.1,0c0,0,7.58-23.31,25.76-24.41,5,18.18-4.41,25.34-19.83,34.15-4.1,11.37,3.7,55.91,21.16,66.41,6.9,4.75,5.64,11.6-.91,11.33A10,10,0,0,1,266.25,305.05Z"
              />
              <path
                class="cls-1"
                d="M301.09,185.24c-2.15-7.79-7.27-12.46-11.3-11.75a7.84,7.84,0,0,0-4.58,12.88,6.83,6.83,0,0,1,1.72,5.86,7.77,7.77,0,0,0,.54,4.85,7.89,7.89,0,0,0,8.29,4.51C300.5,200.86,303.39,193.56,301.09,185.24Z"
              />
              <path
                class="cls-1"
                d="M312.88,194.84c4.66,6.59,11.05,9.26,14.61,7.23a7.86,7.86,0,0,0-.05-13.68,6.79,6.79,0,0,1-3.6-4.92,7.83,7.83,0,0,0-11.47-5.82C308.15,179.93,307.9,187.78,312.88,194.84Z"
              />
              <path
                class="cls-1"
                d="M299.62,207.57c-6.24,5.12-8.44,11.68-6.15,15.08a7.83,7.83,0,0,0,13.63-1,6.81,6.81,0,0,1,4.65-3.94,7.79,7.79,0,0,0,4.22-2.46,7.88,7.88,0,0,0,.76-9.41C314.15,201.78,306.3,202.09,299.62,207.57Z"
              />
              <path
                class="cls-1"
                d="M291.32,258.34a61.66,61.66,0,0,1,43.8-23.25,10.83,10.83,0,0,1,11.59,12.41c-2.11,14.63-9.86,28.9-14.64,36.59a10.69,10.69,0,0,1-11.3,4.84A54.64,54.64,0,0,1,292,272.3,10.79,10.79,0,0,1,291.32,258.34Z"
              />
            </svg>
          </div>
          <div class=" w-6 md:w-1 md:h-6 h-1 bg-gray-100"></div>
          <div
            :class="{ ' bg-secondary-400': clicked.step3 }"
            @click="clicked.step3 = !clicked.step3"
            class="p-1 w-12  h-12  border-2 border-secondary-300 rounded-full"
          >
            <svg
              id="Calque_1"
              class="w-16 h-12 text-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 595.28 471.09"
            >
              <defs>
                <style>
                  .cls-1 {
                    fill: #fff;
                  }
                </style>
              </defs>
              <path
                class="cls-1"
                d="M194.84,183.29S176.17,291,280.22,316.78c14.23,3.53,29.83.15,39.57-10.8,11.28-12.69,13.78-32.26-1.3-54.44-23.19-34.12-79.18-33.32-97.57-74.1,27.19-24.8,12-44.79,12-44.79s-24.48,12.41-28.24,36.6c-24.55-23.81-46.14-15.81-46.14-15.81S157.77,172.89,194.84,183.29Z"
              />
            </svg>
          </div>
          <div class="w-6 md:w-1 md:h-6 h-1 bg-gray-100"></div>
          <div
            :class="{ ' bg-secondary-400': clicked.step4 }"
            @click="clicked.step4 = !clicked.step4"
            class="p-1 w-12  h-12 border-2 border-secondary-300 rounded-full"
          >
            <svg
              id="Calque_1"
              data-name="Calque 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 595.28 471.09"
            >
              <defs>
                <style>
                  .cls-1 {
                    fill: #fff;
                  }
                </style>
              </defs>
              <path
                class="cls-1"
                d="M408.46,228.32a7.83,7.83,0,0,0-9.45-5.84L264.3,254.24a43.77,43.77,0,0,0-4.09-15.63,44.32,44.32,0,0,0-3.72-6.31,67,67,0,0,1-14.38,17.24,4.48,4.48,0,0,0,.24-1.37,4.56,4.56,0,1,0-4.56,4.55c.14,0,.28,0,.42,0a78.81,78.81,0,0,1-6.59,4.42,4.54,4.54,0,0,0-7.5,3.45,3.75,3.75,0,0,0,0,.47c-1.55.71-3.11,1.37-4.67,2a4.2,4.2,0,0,0,.07-.62,4.56,4.56,0,1,0-7.86,3.13,73.43,73.43,0,0,1-9.28,1.82c0-.13,0-.26,0-.39a4.56,4.56,0,1,0-9.12,0,4.35,4.35,0,0,0,.11,1,62,62,0,0,1-16.25-2.16,44,44,0,0,0,85.12,5.14l140.29-33.08A7.86,7.86,0,0,0,408.46,228.32Z"
              />
              <circle class="cls-1" cx="193.35" cy="208.92" r="4.56" />
              <circle class="cls-1" cx="193.35" cy="251.44" r="4.56" />
              <circle class="cls-1" cx="225.4" cy="239.05" r="4.56" />
              <circle class="cls-1" cx="213.5" cy="209.18" r="4.56" />
              <circle class="cls-1" cx="219.57" cy="250.71" r="4.56" />
              <path
                class="cls-1"
                d="M238.39,238a4.56,4.56,0,1,0-4.55-4.56A4.56,4.56,0,0,0,238.39,238Z"
              />
              <circle class="cls-1" cx="203.78" cy="234.5" r="4.56" />
              <path
                class="cls-1"
                d="M211.73,229.94a4.56,4.56,0,1,0,4.55-4.55A4.56,4.56,0,0,0,211.73,229.94Z"
              />
              <circle class="cls-1" cx="208.34" cy="246.88" r="4.56" />
            </svg>
          </div>
          <div class="w-6 md:w-1 md:h-6 h-1 bg-gray-100"></div>
          <div
            :class="{ ' bg-secondary-400': clicked.step5 }"
            @click="clicked.step5 = !clicked.step5"
            class="p-1 w-12  h-12 border-2 border-secondary-300 rounded-full"
          >
            <svg
              id="Calque_1"
              data-name="Calque 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 595.28 471.09"
            >
              <defs>
                <style>
                  .cls-1 {
                    fill: #fff;
                  }
                </style>
              </defs>
              <polygon
                class="cls-1"
                points="317.32 194.59 349.13 239.34 332.9 257.06 305.2 287.34 257.82 259.62 317.32 194.59"
              />
              <polygon
                class="cls-1"
                points="230.69 221.99 313.63 184.87 305.6 177.52 232.82 210.74 230.69 221.99"
              />
              <path
                class="cls-1"
                d="M251.62,241s-23.11-7.68-32.43,0,4.33,20.65,16.22,10C240.82,243.65,251.62,241,251.62,241Z"
              />
            </svg>
          </div>
        </div>
        <div class="w-full rounded-2xl md:mt-0 mt-12 bg-primary-200">
          <div class="md:flex">
            <div
              class="w-full md:w-1/2 h-1/2 w md:h-full rounded-t-2xl md:rounded-l-2xl overflow-hidden"
            >
              <img
                class="w-full h-full object-cover"
                src="https://dummyimage.com/600x700"
                alt="step"
              />
            </div>
            <div class="flex flex-col">
              <div class="px-2">
                <h1
                  class="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-800"
                >
                  Po'alima
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      clicked: {
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: false
      },
      dishes: [
        {
          name: "Poa'lua",
          caption: "Base riz, saumon, radis, emame,graine de chia",
          cal: 475
        },
        {
          name: "Poa'lua",
          caption: "Base riz, saumon, radis, emame,graine de chia",
          cal: 475
        },
        {
          name: "Poa'lua",
          caption: "Base riz, saumon, radis, emame,graine de chia",
          cal: 475
        },
        {
          name: "Poa'lua",
          caption: "Base riz, saumon, radis, emame,graine de chia",
          cal: 475
        },

        {
          name: "Poa'lua",
          caption: "Base riz, saumon, radis, emame,graine de chia",
          cal: 475
        }
      ],
      toggleModal: false
    };
  }
};
</script>

<style></style>
