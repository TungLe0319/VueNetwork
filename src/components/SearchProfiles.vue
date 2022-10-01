<template>
<form @submit.prevent="handleSubmit()">
 <div class="d-flex" >
      <input @input="handleSubmit()" type="text" class="form-control"  placeholder="search Profiles.." name="search" 
        v-model="editable.term" >
      <label for="search" class="visually-hidden">Search</label>
  
    </div>

</form>



</template>

<script>
import { ref } from "vue";
import { postService } from "../services/PostsService.js";
import { profilesService } from "../services/ProfilesService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {

  },

  setup(props) {
const editable = ref({})
    return {
editable,
async handleSubmit(){
  try {
      await profilesService.getProfilesBySearchTerm(editable.value.term)
    } catch (error) {

    }
}
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

input[type=text] {
  width: 130px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

/* When the input field gets focus, change its width to 100% */
input[type=text]:focus {
  width: 80%;
}

</style>
