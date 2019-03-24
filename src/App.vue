<template>
  <div id="app px-4 relative">
    <nav class="sticky pin-t z-50 w-full bg-white flex items-center justify-between px-4 py-4">
      <button @click="isMenuOpen = !isMenuOpen" class="hamburger-menu"></button>
      <input type="text" class="p-4 bg-grey-lighter rounded-lg w-64 h-5 text-xs" placeholder="Search for music ,podcasts and ....">
      
      <a href="#" class="logo inline-block bg-pink h-6 w-6 rounded-full">&nbsp;</a>
    </nav>

    <aside
      class="fixed z-40 smooth-slide"
      :style="{width: isMenuOpen ? '25%': '0px', opacity: isMenuOpen ? 1 : 0  }"
    >
      <div class="h-screen w-full bg-white py-24 px-4">
<<<<<<< HEAD
        <ul >
          <li class="block py-4 border-b">
            <router-link  to="/"> 🏠 Home</router-link>
            </li>
          <li class="block py-4 border-b">
            <router-link  to="/Hot100">  🔥 Hot 100</router-link>
            </li>
          <li class="block py-4 border-b">
            <router-link to="/Playlist">
            🎧 My playlist
=======
        <ul class="list-reset">
          <li class="block py-4 border-b">
            <router-link class="nav-link" to="/"> 🏠 Home</router-link>
            </li>
          <li class="block py-4 border-b">
            <router-link  to="/Hot100">  🔥 Hot 100</router-link>
          
            </li>
          <li class="block py-4 border-b">
            <router-link to="/Playlist">
🎧 My playlist
>>>>>>> c24bdb0cc847d19df8db6cd9346720948cf9d1fa
            </router-link>
            </li>
             
          <li class="block py-4 border-b">
            <router-link to="/recentlyadded">
            ⏱ Recently added
            </router-link>
            </li>
                    
          <li class="block py-4 border-b">
<<<<<<< HEAD
            <router-link to="/login">
=======
            <router-link to="/">
>>>>>>> c24bdb0cc847d19df8db6cd9346720948cf9d1fa
            🚀 Login
            </router-link>
            </li>
                    
          <li class="block py-4 border-b">
<<<<<<< HEAD
            <router-link to="/signup">
            ⭐ Signup
=======
            <router-link to="/">
            Signup
>>>>>>> c24bdb0cc847d19df8db6cd9346720948cf9d1fa
            </router-link>
            </li>

        </ul>
      </div>
    </aside>
    <router-view class="px-4 pb-24"/>
    <!-- Player -->
    <div class="fixed w-full pin-b flex items-center justify-center py-4 bg-black">
      <!-- Previous -->
      ⏪
      <!-- Play -->
      <button>
        <svg fill="white" class="h-4 w-4 ml-4 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6l8 4-8 4V6z"/></svg>
      </button>
      ⏩
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    isMenuOpen: false
  })
};
</script>

<style>
@import "./assets/app.css";
body {
  font-family: "Roboto", sans-serif;
}

.hamburger-menu {
  position: relative;
  height: 2px;
  @apply w-6  bg-grey-darkest mt-2 mb-2;
}

.hamburger-menu::before {
  content: "";
  position: absolute;
  top: 10px;
  height: 2px;
  @apply w-6 bg-grey-darkest;
}

.hamburger-menu::after {
  content: "";
  position: absolute;
  bottom: 10px;
  height: 2px;
  @apply w-6 bg-grey-darkest;
}

.smooth-slide {
  transition: all 0.2s;
}
</style>
