<template>
  <div class="">
 


      <img
        :src="profile.picture"
        alt=""
        class="forcedImg rounded m-1 elevation-4"
      />

  </div>
</template>

<script>
import { Account } from '../models/Account.js';

export default {
  props: {
    profile: { type: Account, required: true },
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
  height: 150px;
  width: 150px;
  object-fit: cover;
}
</style>
