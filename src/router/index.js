import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import  Singleplayer from "@/components/singleplayer";
<<<<<<< HEAD
import Playlist from "@/components/playlist";
import Payment from "@/components/payment";
import Hot100 from "@/components/hot100";
import Recentlyadded from "@/components/recentlyadded";
import Login from "@/components/login";
import Signup from "@/components/signup"
=======
import  Collection from "@/components/collection"
import Playlist from "@/components/playlist"
import Payment from "@/components/payment"
import Hot100 from '@/components/hot100'
import Recentlyadded from '@/components/recentlyadded'




>>>>>>> c24bdb0cc847d19df8db6cd9346720948cf9d1fa

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
<<<<<<< HEAD
    
=======
    {
      path: "/collection",
      name: "Collection",
      component: Collection

    },
>>>>>>> c24bdb0cc847d19df8db6cd9346720948cf9d1fa
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
<<<<<<< HEAD
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
=======
>>>>>>> c24bdb0cc847d19df8db6cd9346720948cf9d1fa
    }
  ]
});

