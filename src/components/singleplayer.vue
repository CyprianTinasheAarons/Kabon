<template>
  <div>
    <section  >
      <p>Now  Playing </p>
          <div class="inline-block w-4/5 m-4" >
          <div class="w-full h-64  mb-2  shadow"
            :style="{ 'background-image': `url(https://source.unsplash.com/random/400x400?t=${Math.random()})`, 'background-size': 'cover' }"
          ></div>
          <p>
            Rating:⭐⭐⭐⭐⭐
          </p>

          <p>
            Song:Geza Bus </p>
            <p>
              Artist: Dj Maphorisa
            </p>
           <p>
             Duration
           </p>
          <p>
            Controls
          </p>
        </div>
 
    </section>
    

  </div>
</template>

<style>
.section-head {
  background: linear-gradient(125deg, rgb(230, 8, 45), orangered);
}

</style>
