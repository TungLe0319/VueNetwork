<template>
  <div class="example">
      <form @submit.prevent="handleSubmit">
      
          <div class="form-group">
            <label for="coverImg">coverImg</label>
            <input
              type="text"
           
              placeholder="Cover Image Url"
              required
              class="form-control"
            />
          </div>
      
          <div class="form-group">
            <label for="bio">bio</label>
            <input
              type="text"
          
              placeholder="bio"
              class="form-control"
            />
          </div>
    
          <div class="form-group">
            <label for="picture">picture</label>
            <input
              type="url"
             
              placeholder="Picture Url"
              required
              class="form-control"
              min="0"
            />
          </div>
         
          <div class="form-group">
            <label for="bio">Bio:</label>
            <textarea
            
              placeholder="example"
              class="form-control"
              rows="4"
            ></textarea>
          </div>
       
        <div class="my-3" >
          <button class="btn btn-success" type="submit">Submit</button>
        </div>
      </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {

  setup(props) {
const editable = ref({})

    return {
editable,
async handleSubmit(){
  try {
     
    } catch (error) {
      Pop.error(error,[''])
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


</style>
