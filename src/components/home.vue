<template>
  <div>
    <!-- Hero section, App name and description -->
    <div class="hero-section py-16 px-6 text-white -mx-4 mb-10">
      
      <h1 class="mb-6">Listen to the best local music and international music on Kabon Stream </h1>
      <p
        class="mb-6"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis earum ducimus.</p>

      <div class="flex items-center justify-between">
        <button class="bg-white text-blue py-3 px-4 rounded shadow mr-4">Play Music</button>
        <button class="bg-white text-blue py-3 px-4 rounded shadow">Listen to podcasts</button>
      </div>
    </div>

    <!-- Hot 100 -->
    <section class="px-4 mb-10">
      <h3 class="flex items-center justify-between mb-4">
        🔥 Hot 100
        <a
          href="/hot100"
          class="text-grey-darker font-normal text-sm no-underline hover:underline"
        >Show More</a>
      </h3>

      <!-- Horizontal scrolling -->
      <div class="whitespace-nowrap overflow-x-scroll overflow-y-hidden relative">
        <div class="inline-block mr-2 w-32" v-for="i in 10" :key="i">
          <a href="/singleplayer">
          <div class="w-full h-32 bg-red mb-2 rounded shadow"
            :style="{ 'background-image': `url(https://source.unsplash.com/random/400x400?t=${Math.random()})`, 'background-size': 'cover' }"
          ></div>
          <h3 class="text-sm mb-2">More than you know</h3>
          <p class="text-xs mb-2">Winky D ft Gemma</p>
          <p class="text-grey">2018</p>
          </a>
        </div>

      </div>
    </section>

    <!-- My Playlist -->
    <section class="px-4 ">
      <h3 class="flex items-center justify-between mb-4">
        🎧 My Playlist
        <a
          href="/playlist"
          class="text-grey-darker font-normal text-sm no-underline hover:underline"
        >Show More</a>
      </h3>

      <!-- Horizontal scrolling -->
      <div class="whitespace-nowrap overflow-x-scroll overflow-y-hidden relative">
        <div class="inline-block mr-2 w-32" v-for="i in 10" :key="i">
          <div class="w-full h-32 bg-red mb-2 rounded"></div>
          <h3 class="text-sm mb-2">More than you know</h3>
          <p class="text-xs mb-2">Winky D ft Gemma</p>
          <p class="text-grey">2018</p>
        </div>
      </div>
    </section>

    <!-- Recently Added -->
    <section class="px-4  ">
      <h3 class="flex items-center justify-between mb-4">
        ⏱ Recently Added
        <a
          href="/recentlyadded"
          class="text-grey-darker font-normal text-sm no-underline hover:underline"
        >Show More</a>
      </h3>

      <!-- Horizontal scrolling -->
      <div class="whitespace-nowrap overflow-x-scroll overflow-y-hidden relative">
        <div class="inline-block mr-2 w-32" v-for="i in 10" :key="i">
          <div class="w-full h-32 bg-red mb-2 rounded"></div>
          <h3 class="text-sm mb-2">More than you know</h3>
          <p class="text-xs mb-2">Winky D ft Gemma</p>
          <p class="text-grey">2018</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hero-section {
  background: linear-gradient(125deg, rgb(230, 8, 45), orangered);
}

/* custom utility */
.whitespace-nowrap {
  white-space: nowrap;
}
</style>
