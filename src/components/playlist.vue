<template>
<div>
<!--  Top 100 songs title component -->
 <section class=" section-head rounded-b-lg">
     <h1 class="text-white text-center p-5">
         🎧 Playlists
     </h1>

 </section>
 <!-- cards with songs -->
<section>
     <div class="inline-block w-64 m-2" >
          <div class="w-full h-48 bg-red mb-2 rounded shadow"
            :style="{ 'background-image': `url(https://source.unsplash.com/random/400x400?t=${Math.random()})`, 'background-size': 'cover' }"
          ></div>
        </div>

        
         <div class="inline-block w-64 m-2" >
          <div class="w-full h-48 bg-red mb-2 rounded shadow"
            :style="{ 'background-image': `url(https://source.unsplash.com/random/400x400?t=${Math.random()})`, 'background-size': 'cover' }"
          ></div>
        </div>

         <div class="inline-block w-64 m-2" >
          <div class="w-full h-48 bg-red mb-2 rounded shadow"
            :style="{ 'background-image': `url(https://source.unsplash.com/random/400x400?t=${Math.random()})`, 'background-size': 'cover' }"
          ></div>
        </div>

    <div class="inline-block w-64 m-2" >
          <div class="w-full h-48 bg-red mb-2 rounded shadow"
            :style="{ 'background-image': `url(https://source.unsplash.com/random/400x400?t=${Math.random()})`, 'background-size': 'cover' }"
          ></div>
        </div>


   

</section>


    </div>
</template>

<script>
export default {};
</script>

<style>
.section-head {
  background: linear-gradient(125deg, rgb(230, 8, 45), orangered);
}

/* custom utility */
.whitespace-nowrap {
  white-space: nowrap;
}
</style>