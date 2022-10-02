<template>
  <div class="d-flex text-end">
    <a href="https://tungle0319.github.io/DimensionMiner/" target="_blank">
      <img
        :src="ad.tall"
        :alt="ad.title"
        class="img-fluid elevation-4 w-75 mt-2 rounded box-shadow filter1"
      />
    </a>
  </div>
</template>

<script>
import { Ad } from '../models/Ad.js';

export default {
  props: {
    ad: { type: Ad, required: true },
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

.filter1:hover {
  filter: brightness(90%);
  filter: sepia(30%);
  transition: all 0.4s ease;
}
.filter1 {
  transition: all 0.4s ease;
}

.box-shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

import { defineComponent } from 'vue' import { NButton , NCard, NCarousel ,N}
from 'naive-ui' import { Ad } from "../models/Ad.js"; export default
defineComponent({ components: { NButton, NCard, NCarousel } }) // note to use
this in a template you just need to // npm i -D naive-ui // they look like
<n-button></n-button>
//to use the ones you want go into import and //type N and you will see a list
of option props: { ad:{type: Ad, required:true} },
