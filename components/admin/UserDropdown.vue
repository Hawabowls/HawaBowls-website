<template>
  <div>
    <a
      class="text-blueGray-500 block"
      href="#pablo"
      v-on:click="toggleDropdown($event)"
      ref="btnDropdownRef"
    >
      <div class="items-center flex">
        <span
          class="
            w-12
            h-12
            text-sm text-white
            bg-blueGray-200
            inline-flex
            items-center
            justify-center
            rounded-full
          "
        >
          <img
            v-if="staff.avatar"
            alt="..."
            class="w-full rounded-full align-middle border-none shadow-lg"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          />
          <svg
            v-if="!staff.avatar"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 shadow-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </div>
    </a>
    <div
      ref="popoverDropdownRef"
      class="
        bg-white
        text-base
        z-50
        float-left
        py-2
        list-none
        text-left
        rounded
        shadow-lg
        mt-1
      "
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
      style="min-width: 12rem"
    >
      <div class="flex items-center px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
        <a
          href="#pablo"
          class="
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
          "
        >
          Parametre
        </a>
      </div>

      <div class="h-0 my-2 border border-solid border-gray-100" />

      <div class="flex items-center px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <a
          href="#pablo"
          class="
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
          "
        >
          Deconnexion
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";
export default {
  data() {
    return {
      dropdownPopoverShow: false,
      staff: {},
    };
  },
  computed: {
    staff() {
      return this.$store.getters["admin/getStaff"];
    },
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-end",
        });
      }
    },
  },
};
</script>
