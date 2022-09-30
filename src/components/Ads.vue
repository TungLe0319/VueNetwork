<template>

  <div class="ads-cards">
     <vs-tooltip color="warning" :text="ad.title" position="right">
   <img :src="ad.tall" alt="" class="forcedImg elevation-4">
    </vs-tooltip>
   

  </div>
</template>

<script>
import { Ad } from "../models/Ad.js";

export default {
  props: {
ad:{type: Ad, required:true}
  },

  setup(props) {

    return {

    };
  },
};
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
