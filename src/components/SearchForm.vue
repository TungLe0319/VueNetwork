<template>
<form @submit.prevent="handleSubmit">
 <div class="inputBox" >
   <input @input.prevent="handleSubmit" type="text" @submit.prevent="handleSubmit" name="search" 
   v-model="editable.term" >
   <span>Filter By Characters...</span>
    
    </div>

</form>



</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { postService } from "../services/PostsService.js";
import { profilesService } from "../services/ProfilesService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {

  },

  setup(props) {
    const route = useRouter()
const editable = ref({})
    return {
editable,
async handleSubmit(){
  try {
  // await route.push({name:'SearchResults'})
      await postService.getPostsBySearchTerm(editable.value.term)
      // await profilesService.getProfilesBySearchTerm(editable.value.term)
    } catch (error) {
    // Pop.error(error,[''])
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

// input[type=text] {
//   width: 130px;
//   -webkit-transition: width 0.4s ease-in-out;
//   transition: width 0.4s ease-in-out;
// }

// /* When the input field gets focus, change its width to 100% */
// input[type=text]:focus {
//   width: 100%;
// }

.inputBox input {
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 3px solid #f7eec4;
  border-radius: 5px;
  outline: none;
  color: #fff;
  font-size: 1em;
  background-color: rgba(66, 52, 5, 0.301);
  transition: all 1.5s ease;
  box-shadow:  0.25px 0.25px 10px rgba(243, 236, 236, 0.308);
}
.inputBox span {
  
   padding: 0 10px;
  font-size: 0.95em;
border-radius: 4px;
  font-weight: bold;
   background: #92c5f5;
  border-left: 1px solid #92c5f5;
  border-right: 1px solid #92c5f5;
  letter-spacing: 0.2em;
  transition: all 1s ease;
  bottom: 3em;
 
  pointer-events: none;
  font-size: 1em;
  text-transform: uppercase;
  color: #fff;
  transition: all 1s ease;
}
.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
  color: #27132a;
  transform: translateX(10px) translateY(-7px);
  padding: 0 10px;
  font-size: 0.95em;
border-radius: 4px;
  font-weight: bold;
   background: #f5eb92;
  border-left: 1px solid #92c5f5;
  border-right: 1px solid #92c5f5;
  letter-spacing: 0.2em;
  transition: all 1s ease;
}


</style>
