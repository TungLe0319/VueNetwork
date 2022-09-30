<template>
  

    <div class="mx-2">
<router-link :to="{name: 'Profile', params:{ id:  creator.id}}"> 
  <img  :src="creator?.picture"  class="accountPicture elevation-4  mt-2 rounded-circle forcedImg" >

</router-link>

    </div>
    
   
    <div class=" d-flex align-items-center  mt-4 ">
      <h6> {{creator.name}}</h6>
      <span v-if="creator.graduated">  <i class="mdi mdi-school fs-2"></i>   </span>
    </div>
    
 

     
  
</template>

<script>
import { Account } from "../models/Account.js";

export default {
  props: {
creator:{type: Account, required:true}
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
  height: 50px;
  width: 50px;
  object-fit: cover;
}


</style>
