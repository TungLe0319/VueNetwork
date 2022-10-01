<template>
  <div class="post-card position-relative">
    <div class="card elevation-3 mx-4 my-2">
      <div class="d-flex">
        <PostCreator :creator="post.creator" />
       
      </div>

      <!-- POST DOWN BELOW -->
      <div class="p-2 lineSpacing">
        <p>{{ post.body }}</p>
      </div>

      <img
        v-if="post.imgUrl"
        :src="post?.imgUrl"
        alt=""
        class="img-fluid mt-2 elevation-2 forcedImg"
      />

      <div
        class="card-footer customBg d-flex justify-content-between align-items-center"
      >
        <!-- Delete Post Button -->
        <div class="position-absolute top-0 end-0 " v-if="post.creator.id == account.id" >
          <button @click.stop="$emit('deletePost')" class="btn">
            <i class="mdi mdi-minus-box fs-4"></i>
          </button>
        </div>
        <div class="d-flex" v-if="user.isAuthenticated" >
          
          <p>{{ post.likeIds.length }}</p>
          <i :disabled="!user.isAuthenticated"   @click="likePost()" class="mdi mdi-star fs-2 selectable text-warning text-shadow rounded"></i>
        </div>
        <div class="d-flex" v-else>
            <p>{{ post.likeIds.length }}</p>
            <i  class="mdi mdi-star fs-2  text-warning text-shadow rounded"></i>
        </div>
         <div>
          <p @click="findMyLike()" class="text-shadow">{{new Date(post.createdAt).toLocaleString('en-Us') }}</p> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { hoursToMinutes } from 'date-fns';
import { AppState } from "../AppState.js";
import { Account } from '../models/Account.js';
import { Post } from '../models/Post.js';
import { postService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';
import PostCreator from './PostCreator.vue';

export default {
  props: {
    post: { type: Post, required: true },
  },
  setup(props) {
    return {
      account:computed(()=> AppState.account),
      user:computed(() => AppState.user),
      async likePost() {
        try {
          await postService.likePost(props.post.id);
        } catch (error) {
          Pop.error(error, '[likePost]');
        }
      },

      deletePost() {
        emit('deletePost');
      },

      async findMyLike(){
        try {
            await postService.findMyLike(props.post.likeIds)
          } catch (error) {
            Pop.error(error,[''])
          }
      }
    };
  },
  components: { PostCreator },
};
</script>

<style lang="scss" scoped>
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px rgb(145, 141, 140);
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}
.forcedImg {
  height: 400px;
  width: auto;
  object-fit: cover;
}

.accountPicture {
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 4px;
}

.post-card:hover {
  transform: scale(1.01);
  transition: all 0.3s ease-out;
}

.lineSpacing{
  letter-spacing: 0.05rem;
}
.customBg{
  background-color:#c2e4f32f ;
}
p{
  font-weight: 700;
}
</style>
