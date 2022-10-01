<template>

  <div class="col-md-6" v-for="p in profiles" :key="p">
        <ProfileCards :profile="p" />
      </div>
  <n-carousel :slides-per-view="3" :space-between="20" :loop="false" draggable>
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
       v-for="p in profiles" :key="p"
    >
    
  </n-carousel>



</template>


<script>
 import { defineComponent } from 'vue'
  import { NButton , NCard, NCarousel ,} from 'naive-ui'
import ProfileCards from "./ProfileCards.vue";
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";

  export default defineComponent({
     setup(){
        return{
          profiles:computed(()=>AppState.profiles)
        }
      },
    components: {
    NButton,
    NCard,
    NCarousel,
    ProfileCards
}
  })
</script>


<style lang="scss" scoped>

</style>
 import { defineComponent } from 'vue'
  import { NButton , NCard, NCarousel ,N} from 'naive-ui'

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
