<template>
  <div class="card elevation-3 mx-4 my-2">
    <div class="d-flex justify-content-around ms-4">
      <div class="me-2 mt-4" v-if="acc.picture">
        <img :src="acc.picture" alt="" class="forcedImg rounded-circle" />
      </div>
      <div v-else>
        <div class="spinner-border text-primary p-4 mt-4" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div class="postComment">
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
          <div class="form-group d-flex" >
            <vs-tooltip color="warning" text="Image/Video" position="right">
              <i class="mdi mdi-image fs-2 text-primary "></i>
            </vs-tooltip>

            <input
              type="url"
              v-model="editable.imgUrl"
              placeholder="Image url..."
              class="form-control"
              min="0"
            />
          </div>

          <div class="d-flex justify-content-end mb-2">
            <div class="d-flex justify-content-end">
              <vs-tooltip color="warning" text="Post" position="left">
                <button type="submit" class="btn px-1 py-0">
                  <i class="mdi mdi-cube-send fs-2 text-primary"></i>
                </button>
              </vs-tooltip>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Account } from '../models/Account.js';
import { postService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';

export default {


  setup(props) {
    const editable = ref({});

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

.forcedImg:hover {
  filter: opacity(90%);
  transform: scale(1.5);
  transition: all 0.5s ease-out;
  box-shadow: 1px 1px black, 0px 0px 5px rgb(182, 222, 246);
}
.postComment {
  width: 450px;
}


</style>
