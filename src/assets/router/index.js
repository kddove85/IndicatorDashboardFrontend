import {createRouter,createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Economics from "../views/Economics.vue";
import Earnings from "../views/Earnings.vue";
import Climate from "../views/Climate.vue";
import Immigration from "../views/Immigration.vue";
import Politics from "../views/Politics.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/economics",
    name: "Economics",
    component: Economics
  },
  {
    path: "/earnings",
    name: "Earnings",
    component: Earnings
  },
  {
    path: "/climate",
    name: "Climate",
    component: Climate
  },
  {
    path: "/immigration",
    name: "Immigration",
    component: Immigration
  },
  {
    path: "/politics",
    name: "Politics",
    component: Politics
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});
export default router;
