import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import  Singleplayer from "@/components/singleplayer";
import  Collection from "@/components/collection"
import Playlist from "@/components/playlist"
import Payment from "@/components/payment"
import Hot100 from '@/components/hot100'
import Recentlyadded from '@/components/recentlyadded'





Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/singleplayer",
      name: "Singleplayer",
      component: Singleplayer

    },
    {
      path: "/collection",
      name: "Collection",
      component: Collection

    },
    {
      path: "/playlist",
      name: "Playlist",
      component: Playlist
    },
    {
      path: "/recentlyadded",
      name: "Recentlyadded",
      component: Recentlyadded

    },

    {
      path: "/hot100",
      name: "Hot100",
      component: Hot100

    },

    {
      path: "/payment",
      name: "Payment",
      component: Payment
    }
  ]
});

