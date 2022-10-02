<template>
  <div class="mx-2" position="relative" v-if="creator.picture">
    <router-link :to="{ name: 'Profile', params: { id: creator.id } }">
      <img
        :src="creator.picture"
        class="accountPicture elevation-4 mt-2 rounded-circle forcedImg "
        :alt="creator.name"
        @error="setAltImg"
      />
    </router-link>
    <span class="graduated">

      <img src="https://cdn-icons-png.flaticon.com/512/732/732475.png" alt="" width="30 " height="30" class="text-shadow">
    </span>
  </div>
  

  <div class="d-flex align-items-center mt-4">


       <router-link :to="{ name: 'Profile', params: { id: creator.id } }">

      
        <b class="text-dark creatorName">By {{ creator.name }}</b>
    </router-link>
    <span v-if="creator.graduated"> <i class="mdi mdi-school fs-5"></i> </span>
  </div>
</template>

<script>
import { Account } from '../models/Account.js';

export default {
  props: {
    creator: { type: Account, required: true },
  },

  setup(props) {



    return {
      setAltImg(event){
  event.target.src='https://i.pinimg.com/564x/93/47/3d/93473d632d1e576ca274ceab098d58a8.jpg'
 
}
    };
  },
};
</script>

<style lang="scss" scoped>
.text-shadow {
  color: rgb(0, 0, 0);
  text-shadow: 1px 1px black, 0px 0px 5px rgb(165, 152, 150);
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}
.forcedImg {
  height: 80px;
  width: 80px;
  object-fit: cover;
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
       transition: all 0.4s ease;
}

.forcedImg:hover{
  filter: brightness(110%);
   box-shadow: 0 4px 8px 0 rgba(6, 125, 223, 0.2), 0 6px 20px 0 rgba(9, 148, 212, 0.19);
  transition: all 0.4s ease;
}

h6{
  font-size: large;
  font-weight: 800;
  
}

.creatorName{
  font-weight: bold;
  font-style: oblique;

}
.graduated{
  position: absolute;
  left: 35px;
  top: 0;
}
</style>
