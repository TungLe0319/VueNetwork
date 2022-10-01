<template>
 


<!--   
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasForm" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>

<div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasForm" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Edit Profile</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   <div class="Account-form">
   <form @submit.prevent="handleSubmit">
      <div class="form-group">
           <label for="name">name</label>
           <input
             type="text"
           v-model="editable.name"
             placeholder="name"
           
             class="form-control"
           />
         </div>
      <div class="form-group">
           <label for="email">email</label>
           <input
             type="text"
           v-model="editable.email"
             placeholder="name"
           
             class="form-control"
           />
         </div>

      <div class="form-group">
        <label for="picture">picture</label>
        <input
          type="url"
          v-model="editable.picture"
          placeholder="url..."
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="coverImg">coverImage</label>
        <input
          type="url"
          v-model="editable.coverImg"
          placeholder="Image url..."
          
          class="form-control"
       
        />
      </div>

      




      <div class="form-group">
        <label for="github">Github</label>
        <input
          type="text"
          v-model="editable.github"
          placeholder="url..."
          
          class="form-control"
          min="0"
        />
      </div>
      <div class="form-group">
        <label for="linkedIn">linkedIn</label>
        <input
          type="text"
          v-model="editable.linkedIn"
          placeholder="url..."
          
          class="form-control"
          min="0"
        />
      </div>
      <div class="form-group">
        <label for="resume">resume</label>
        <input
          type="text"
          v-model="editable.resume"
          placeholder="url..."
          
          class="form-control"
          min="0"
        />
      </div>

      <div class="form-group">
        <label for="bio">Bio:</label>
        <textarea
          v-model="editable.bio"
          placeholder="bio."
          class="form-control"
          rows="4"
        ></textarea>
      </div>

      <div class="my-3">
        <button class="btn btn-success selectable" type="submit">Submit</button>
      </div>
    </form>
 </div>
    
  </div>
</div> -->


<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body FORM">
        <!-- -------------------SECTION FORM----------------------------------- -->
     <form @submit.prevent="handleSubmit">
<div class="row">
<div class="col-md-6">
  
</div>

</div>

      <div class="form-group">
           <label for="name">name</label>
           <input
             type="text"
           v-model="editable.name"
             placeholder="name"
           
             class="form-control"
           />
         </div>
      <div class="form-group">
           <label for="email">email</label>
           <input
             type="text"
           v-model="editable.email"
             placeholder="name"
           
             class="form-control"
           />
         </div>

      <div class="form-group">
        <label for="picture">picture</label>
        <input
          type="url"
          v-model="editable.picture"
          placeholder="url..."
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="coverImg">coverImage</label>
        <input
          type="url"
          v-model="editable.coverImg"
          placeholder="Image url..."
          
          class="form-control"
       
        />
      </div>

      




      <div class="form-group">
        <label for="github">Github</label>
        <input
          type="text"
          v-model="editable.github"
          placeholder="url..."
          
          class="form-control"
          min="0"
        />
      </div>
      <div class="form-group">
        <label for="linkedIn">linkedIn</label>
        <input
          type="text"
          v-model="editable.linkedIn"
          placeholder="url..."
          
          class="form-control"
          min="0"
        />
      </div>
      <div class="form-group">
        <label for="resume">resume</label>
        <input
          type="text"
          v-model="editable.resume"
          placeholder="url..."
          
          class="form-control"
          min="0"
        />
      </div>

      <div class="form-group">
        <label for="bio">Bio:</label>
        <textarea
          v-model="editable.bio"
          placeholder="bio."
          class="form-control"
          rows="4"
        ></textarea>
      </div>

      <div class="my-3">
        <button class="btn btn-success selectable" type="submit">Submit</button>
      </div>
    </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
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
img {
  max-width: 100px;
}
</style>