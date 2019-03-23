<template>
  <div id="app px-4 relative">
    <nav class="sticky pin-t z-50 w-full bg-white flex items-center justify-between px-4 py-4">
      <button @click="isMenuOpen = !isMenuOpen" class="hamburger-menu"></button>
      <input type="text" class="p-4 bg-grey-lighter rounded" placeholder="Search for music">
      <a href="#" class="logo inline-block bg-pink h-6 w-6 rounded-full">&nbsp;</a>
    </nav>

    <aside
      class="fixed z-40 smooth-slide"
      :style="{width: isMenuOpen ? '100%': '0px', opacity: isMenuOpen ? 1 : 0  }"
    >
      <div class="h-screen w-full bg-white py-24 px-4">
        <ul class="list-reset">
          <li class="block py-4 border-b">🔥 Hot 100</li>
          <li class="block py-4 border-b">🎧 My playlist</li>
          <li class="block py-4 border-b">⏱ Recently added</li>
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
  @apply w-6 bg-grey-darkest mt-2 mb-2;
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
