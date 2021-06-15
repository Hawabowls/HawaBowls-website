<template>
  <div>
    <the-sidebar></the-sidebar>
    <div class="relative md:ml-64 bg-gray-50">
      <navbar></navbar>
      <!-- Header -->

      <Nuxt />
    </div>
  </div>
</template>
<script>
import Navbar from "../components/admin/Navbar.vue";
import TheSidebar from "../components/admin/TheSidebar.vue";
import LineChart from "../components/admin/LineChart.vue";
import BarChart from "../components/admin/BarChart.vue";
export default {
  name: "dashboard-page",
  components: {
    Navbar,
    TheSidebar,
    LineChart,
    BarChart
  }
};
</script>
