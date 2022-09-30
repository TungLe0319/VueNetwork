<template>
  <div class="cover-img" :style="{backgroundImage: `url(${profile.coverImg})`}">



  </div>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { Account } from "../models/Account.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
profile:{type: Account, required: true}
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
  height: 300px;
  width: 300px;
  object-fit: cover;
}

  .cover-img{
    height: 50vh;
    padding: 3rem;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }

</style>
