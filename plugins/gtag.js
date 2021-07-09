import Vue from "vue";
import VueGtag from "vue-gtag";


let store
Vue.use(VueGtag, {
    config: { id: process.env.GOOGLE_ANALYTICS_ID },
});
