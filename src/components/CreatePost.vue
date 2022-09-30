<template>
  <div class="post-card">
    <div class="card elevation-3 mx-4 my-2">
      <div class="d-flex">
        <div>
         
        </div>
      </div>
     
     

    
  
  
    </div>
  </div>
</template>

<script>
import { Account } from "../models/Account.js";
import { postService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';

export default {
  props: {
    account:{type: Account, required: true}
  },

  setup(props) {
    return {
      async createPost() {
        try {
          await postService.createPost();
        } catch (error) {
          Pop.error(error, ['']);
        }
      },
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
  height: 300px;
  width: 300px;
  object-fit: cover;
}
</style>
