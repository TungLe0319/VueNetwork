<template>
  <div class="post-card">
    <div class="card elevation-3 mx-4 my-2">
      <div class="d-flex align-items-center ms-4">
        <div class="me-2">
          <img :src="acc.picture" alt="" class="forcedImg rounded-circle" />
        </div>

        <div>
          <form @submit="handleSubmit">
            <div class="form-group mb-2">
              <label for="bio"></label>
              <textarea
              v-model="editable.body"
                placeholder="Share whats happening"
                class="form-control"
                rows="4"
                required
              ></textarea>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <div>

                <vs-tooltip color="warning" text="Image/Video" position="right">
                <i class="mdi mdi-image fs-2 text-primary "></i>
                </vs-tooltip>

              </div>
             

              <div class="d-flex justify-content-end">
                <vs-tooltip color="warning" text="Post" position="left">
                  <button  type="submit"  class="btn px-1 py-0"
                    ><i class="mdi mdi-cube-send fs-2 text-primary "></i
                   ></button>
                </vs-tooltip>
              </div>
            </div>
            <div class="form-floating mb-3">
 <input type="url" for="imgUrl" v-model="editable.imgUrl">
  
</div>
           
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {  ref} from 'vue'
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Account } from '../models/Account.js';
import { postService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';

export default {
  props: {
    account: { type: Account, required: true },
  },

  setup(props) {
const editable = ref({})

    return {
      editable,
      acc: computed(() => AppState.account),

      async handleSubmit() {
        try {
          await postService.createPost(editable.value);
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
  height: 100px;
  width: 100px;
  object-fit: cover;
}
</style>
