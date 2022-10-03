<template>
  <div class="bg-light p-2 elevation-3 mx-4 my-2 customBorder">
    <div class="d-flex justify-content-around ms-4">
      <div class="me-2 mt-4" v-if="acc.picture">
        <router-link :to="{ name: 'Profile', params: { id: acc.id } }">
          <vs-tooltip
            text="Go To Profile Page"
            color="primary"
            position="bottom"
          >
            <img :src="acc.picture" alt="" class="forcedImg rounded-circle" />
          </vs-tooltip>
        </router-link>
      </div>
      <div v-else>
        <div class="spinner-border text-primary p-4 mt-4" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div class="postComment">
        <form @submit.prevent="handleSubmit">
          <div class="inputBox mb-2">
            <textarea
              v-model="editable.body"
              placeholder="Share whats happening"
              class="form-control"
              rows="4"
              required
            ></textarea>
          </div>
          <div class="form-group d-flex">
            <vs-tooltip color="warning" text="Image/Video" position="left">
              <i class="mdi mdi-image fs-2 text-primary"></i>
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
          Pop.toast('Posted Successfully', 'success', 'center-end', 1000, true);
          editable.value = {};
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  object-fit: cover;
  transition: all 0.5s ease;
}

.forcedImg:hover {
  filter: opacity(90%);
  transform: scale(1.1);
  transition: all 0.5s ease;
}
.postComment {
  width: 450px;
}

.customBorder {
  border: 4px dashed rgb(32, 138, 236);
  transition: all 0.3s ease;
}

.customBorder:hover {
  border: 4px dashed #0c1b60;
  transform: scale(1.02);
  transition: all 0.3s ease;
}

.inputBox input {
  width: 100%;
  padding: 10px;
  border: 1px solid #92c5f5;
  border-bottom: 3px solid #c4def7;
  border-radius: 5px;
  outline: none;
  color: #fff;
  font-size: 1em;
  background-color: transparent;
  transition: all 1.5s ease;
  box-shadow: 0.25px 0.25px 10px rgba(243, 236, 236, 0.308);
}
.inputBox span {
  position: absolute;
  left: 0;
  bottom: 3em;
  padding: 10px;
  pointer-events: none;
  font-size: 1em;
  text-transform: uppercase;
  color: #f1ecf180;
  transition: all 1s ease;
}
.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
  color: #27132a;
  transform: translateX(10px) translateY(-7px);
  padding: 0 10px;
  font-size: 0.65em;
  border-radius: 4px;
  font-weight: bold;
  background: #92c5f5;
  border-left: 1px solid #92c5f5;
  border-right: 1px solid #92c5f5;
  letter-spacing: 0.2em;
  transition: all 1s ease;
}
</style>
