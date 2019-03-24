import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import  Singleplayer from "@/components/singleplayer";
import Playlist from "@/components/playlist";
import Payment from "@/components/payment";
import Hot100 from "@/components/hot100";
import Recentlyadded from "@/components/recentlyadded";
import Login from "@/components/login";
import Signup from "@/components/signup"

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
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
    ,
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    }
  ]
});

