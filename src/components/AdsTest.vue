<template>

  <div class="ads-cards">
     <!-- <vs-tooltip color="primary" :text="ad.title" position="left">
   <img :src="ad.tall" alt="" class="img-fluid elevation-4 mt-2 rounded" >
    </vs-tooltip> -->
   
    
    
    <n-carousel autoplay>
      <img :src="ad.tall" alt="" class="img-fluid elevation-4 mt-2 rounded" >
   
      
  </n-carousel>

  </div>
</template>

<script>
 import { defineComponent } from 'vue'
  import { NButton , NCard, NCarousel, } from 'naive-ui'
import { Ad } from "../models/Ad.js";
  export default defineComponent({
    components: {
      NButton, NCard, NCarousel
    },
      props: {
ad:{type: Ad, required:true}
  },

   setup(){
      return{
        
      }
    }
  })
</script>

<style lang="scss" scoped>

.text-shadow{
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem
  /* Second Color  in text-shadow is the blur */
}
.forcedImg{
 
  width: auto;
  object-fit: contain;
}


</style>

 import { defineComponent } from 'vue'
  import { NButton , NCard, NCarousel ,N} from 'naive-ui'
import { Ad } from "../models/Ad.js";
  export default defineComponent({
    components: {
      NButton, NCard, NCarousel
    }
  })
  // note to use this in a template you just need to
  // npm i -D naive-ui  
  // they look like <n-button></n-button>
//to use the ones you want go into import and 
//type N and you will see a list of option
  props: {
ad:{type: Ad, required:true}
  },
