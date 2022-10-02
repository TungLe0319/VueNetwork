<template>

<!-- Modal -->
<div class="modal  " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content bg-dark">
   
      <div class="modal-body FORM ">
        <!-- -------------------SECTION FORM----------------------------------- -->
     <form @submit.prevent="handleSubmit" class="">
<div class="row">
<div class="col-md-6">
    <div class="form-group mt-1">
           <label for="name">Name</label>
           <input
             type="text"
           v-model="editable.name"
             placeholder="name"
           
             class="form-control mt-2"
           />
         </div>
      <div class="form-group mt-2">
           <label for="email">Email</label>
           <input
             type="text"
           v-model="editable.email"
             placeholder="name"
           
             class="form-control mt-2"
           />
         </div>

      <div class="form-group mt-2">
        <label for="picture">Picture</label>
        <input
          type="url"
          v-model="editable.picture"
          placeholder="url..."
          class="form-control mt-2"
        />
      </div>

    <div class="form-group d-flex align-items-center">
  
        <label class="form-check-label mt-2 me-3" for="graduated">
          <vs-tooltip text="Graduated" position="bottom" color="primary">

            <i class="mdi mdi-school fs-2"></i> 
          </vs-tooltip>
        </label>

   
      <div>


        <input class="form-check-input checkbox"  type="checkbox" name="graduated" v-model="editable.graduated"  >
      </div>

      
</div>
       <div class="form-group mt-2">
        <label for="resume">Class</label>
        <input
          type="text"
          v-model="editable.class"
          placeholder="Class of..."
          
          class="form-control  mt-2"
          min="0"
        />
      </div>
      


</div>

<div class="col-md-6">
  <img :src="account.picture" alt="" class="img-fluid forcedImg">
</div>

<div class="col-md-6">

      <div class="form-group mt-2">
        <label for="github">Github</label>
        <input
          type="text"
          v-model="editable.github"
          placeholder="url..."
          
          class="form-control mt-2"
          min="0"
        />
      </div>
      <div class="form-group mt-2">
        <label for="linkedIn">LinkedIn</label>
        <input
          type="text"
          v-model="editable.linkedIn"
          placeholder="linkedIn url..."
          
          class="form-control mt-2"
          min="0"
        />
      </div>
      <div class="form-group mt-2">
        <label for="resume">Resume</label>
        <input
          type="text"
          v-model="editable.resume"
          placeholder="Resume url..."
          
          class="form-control  mt-2"
          min="0"
        />
      </div>
   
  
</div>
<div class="col-md-6">
  <div>
    <img :src="account.coverImg" alt="" class="forcedImg smallerImg mt-2">
  </div>
  <div class="form-group mt-2">
        <label for="coverImg">CoverImage</label>
        <input
          type="url"
          v-model="editable.coverImg"
          placeholder="Image url..."
          
          class="form-control mt-2"
       
        />
      </div>


</div>
</div>

  



      <div class="form-group mt-2">
        <label class="" for="bio">Bio:</label>
        <textarea
          v-model="editable.bio"
          placeholder="bio."
          class="form-control mt-2"
          rows="4"
        ></textarea>
      </div>

      <div class="my-3 ">
        <button class="btn btn-success selectable" type="submit">Submit</button>
      </div>
    </form>
      </div>
    
        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
      
    </div>
  </div>
</div>
</template>

<script>
import { computed, ref, watchEffect } from 'vue';
import { AppState } from '../AppState';
import { accountService } from '../services/AccountService.js';
import Pop from '../utils/Pop.js';
export default {
  setup() {
    const editable = ref({});
    watchEffect(() => {
      // MUTABLE DATA BAD!!!!! IMMUTABLE DATA GOOD
      //                 v BREAKS THE REFERENCE TO THE ORIGINAL OBJECT
      editable.value = { ...AppState.account };
    });
    return {
      editable,

      account: computed(() => AppState.account),

      async handleSubmit() {
        try {
          await accountService.editProfile(editable.value);
        } catch (error) {
          Pop.error(error, ['']);
        }
      },
    };
  },
};
</script>

<style scoped>
.forcedImg{
border-radius: 4px;
border: dashed 4px rgb(146, 197, 245);
}
.checkbox{
  width: 30px;
  height: 30px;
}

.smallerImg{
  height: 200px;
  width: 375px;
  object-fit: cover;
}

.form-Banner{
  background-image: url(https://i.pinimg.com/564x/ca/db/46/cadb46a6ac190342d8152d4240952333.jpg);
background-position: center;
background-size: cover;

}





</style>