<template>
  <div class="mx-2" v-if="creator.picture">
    <router-link :to="{ name: 'Profile', params: { id: creator.id } }">
      <img
        :src="creator.picture"
        class="accountPicture elevation-4 mt-2 rounded-circle forcedImg "
        :alt="creator.name"
      />
    </router-link>
  </div>
  

  <div class="d-flex align-items-center mt-4">


       <router-link :to="{ name: 'Profile', params: { id: creator.id } }">

      
        <h6 class="text-primary">{{ creator.name }}</h6>
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
    return {};
  },
};
</script>

<style lang="scss" scoped>
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
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
</style>
