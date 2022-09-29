<template>
  <div class="example"></div>
</template>

<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";

export default {
  props: {

  },

  setup(props) {
const route = useRoute()

async function getProfileById(){
  try {
      
    } catch (error) {
      Pop.error(error,[''])
    }
}


async function getProjectsByCreatorId(){
  try {
      
    } catch (error) {
      Pop.error(error,[''])
    }
}

onMounted(()=>{
  // getProfileById()
  // getProjectsByCreatorId
})

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


</style>
