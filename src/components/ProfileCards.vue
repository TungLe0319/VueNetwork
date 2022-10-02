<template>
 
 
    <div   v-for="p in profiles">
<CreatorIcons  :creator="p" />
    </div>


</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { Account } from '../models/Account.js';
import PostCreator from "./PostCreator.vue";
import CreatorIcons from "./creatorIcons.vue";

export default {
    setup(props) {
        return {
            profiles: computed(() => AppState.profiles)
        };
    },
    components: { PostCreator, CreatorIcons }
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
