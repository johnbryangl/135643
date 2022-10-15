import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApexCharts from "vue3-apexcharts";
import ExportButton from "@/components/ExportButton.vue";
import "nprogress/nprogress.css";

createApp(App)
  .use(store)
  .use(router)
  .use(VueApexCharts)
  .use(ExportButton)
  .mount("#app");
