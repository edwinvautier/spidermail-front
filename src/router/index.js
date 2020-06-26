import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
import NewCampaign from "../views/NewCampaign.vue";
import Campaign from "../views/Campaign.vue";
import Registrate from "../views/Registrate.vue";
import NewRecipientList from "../views/NewRecipientList.vue";
import RecipientsLists from "../views/RecipientsLists.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Campaigns",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/registrate",
    name: "Registrate",
    component: Registrate
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  {
    path: "/new-campaign",
    name: "NewCampaign",
    component: NewCampaign
  },
  {
    path: "/campaigns/:id",
    name: "Campaign",
    component: Campaign
  },
  {
    path: "/lists/new",
    name: "NewList",
    component: NewRecipientList
  },
  {
    path: "/lists",
    name: "Lists",
    component: RecipientsLists
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
