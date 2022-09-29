<template>

  <div class="ads-cards">
     <vs-tooltip color="warning" :text="ad.title" position="right">
   <img :src="ad.square" alt="" class="forcedImg">
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
  height: 100px;
  width: 100px;
  object-fit: cover;
}


</style>
