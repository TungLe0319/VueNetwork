<template>
  <div class="mx-2 position-relative" v-if="creator.picture">
    <router-link :to="{ name: 'Profile', params: { id: creator.id } }">
      <img
        :src="creator.picture"
        class="accountPicture elevation-4 mt-2 rounded-circle forcedImg"
        alt="creator.name"
        @error="setAltImg"
      />
    </router-link>
    <div class="" v-if="creator.graduated">
      <img
        src="https://cdn-icons-png.flaticon.com/512/732/732475.png"
        alt=""
        width="20 "
        height="20"
        class="text-shadow schoolIcon"
      />
    </div>
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
      setAltImg(event) {
        event.target.src =
          'https://i.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.webp';
      },
      //https://i.pinimg.com/564x/93/47/3d/93473d632d1e576ca274ceab098d58a8.jpg
      //https://i.pinimg.com/736x/b3/1d/5f/b31d5f818bfacf883496487abe89ee50.jpg
    };
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

.forcedImg:hover {
  filter: brightness(110%);
  box-shadow: 0 4px 8px 0 rgba(6, 125, 223, 0.2),
    0 6px 20px 0 rgba(9, 148, 212, 0.19);
  transition: all 0.4s ease;
}

h6 {
  font-size: large;
  font-weight: 800;
}

.schoolIcon{
  position: absolute;
  left: 0;
  bottom: 10px;
}
</style>
