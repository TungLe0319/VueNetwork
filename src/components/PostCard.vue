<template>
  <div class="post-card position-relative ">
    <div
      class="card elevation-3 mx-4 my-2 card-Shadow  borderimg3"
      :class="post.creator.id == account.id ? 'accountImages' : ''"
    >
      <div class="d-flex">
        <PostCreator :creator="post.creator" />
      </div>

      <!-- POST DOWN BELOW -->
      <div class="p-2 lineSpacing">
        <p class="ms-2">{{ post.body }}</p>
      </div>

      <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> -->
      <img
        v-if="post.imgUrl"
        :src="post?.imgUrl"
        alt=""
        class="img-fluid mt-2 elevation-2 forcedImg"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="setActivePicture()"
      />

      <div
        class="card-footer customBg d-flex justify-content-between align-items-center"
      >
        <!-- Delete Post Button -->
        <div
          class="position-absolute top-0 end-0"
          v-if="post.creator.id == account.id"
        >
          <button @click.stop="$emit('deletePost')" class="btn">
            <img
              src="https://cdn-icons-png.flaticon.com/512/458/458594.png"
              alt=""
              class="deleteImg"
            />
          </button>
        </div>
        <div class="d-flex" v-if="user.isAuthenticated">
          <div v-if="post.thumbUp==true">

            <p>{{ post.likeIds.length }}</p>
            <i
              :disabled="!user.isAuthenticated"
              @click="likePost()"
              
              
              class="mdi mdi-thumb-up"
            ></i>
          </div>
          <div v-else-if="post.thumbUp==false">
  <p>{{ post.likeIds.length }}</p>
            <i
              :disabled="!user.isAuthenticated"
              @click="likePost()"
              
              
              class="mdi mdi-thumb-down"
            ></i>
          </div>
        </div>
        <div class="d-flex" v-else>
          <p>{{ post.likeIds.length }}</p>
          <i
            :class="post.likeIds.length"
            class="mdi mdi-thumb-up fs-2 text-warning text-shadow rounded"
          ></i>
        </div>
        <!-- -==---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- -->
        <i @click="toggleLike()" class="mdi mdi-thumb-up" id="Testing1"></i>
        <div>
          <p class="text-shadow">
            {{
              new Date(post.createdAt).toLocaleString('en-Us', {
                hour: 'numeric',
                day: '2-digit',
                weekday: 'short',
              })
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';

import { AppState } from '../AppState.js';
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
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      myLike: computed(() => AppState.myLike),
   
      async likePost() {
        try {
          await postService.likePost(props.post.id);
              //  postService.toggleLike(props.post.id);
        } catch (error) {
          Pop.error(error, '[likePost]');
        }
      },

      deletePost() {
        emit('deletePost');
      },

      setActivePicture() {
        AppState.activeImage = props.post.imgUrl;
        console.log(AppState.activeImage);
      },

     toggleLike() {
   
        postService.toggleLike(props.post.id);
   
      },
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
    cursor: pointer;
      transition: all 0.3s ease
}
.forcedImg:hover {
  filter: brightness(90%);
  transition: all 0.3s ease
  ;

}
.deleteImg {
  height: 50px;
  width: 50px;
  object-fit: cover;
    transition: all 1s ease;
}
.deleteImg:hover {
  filter: brightness(120%);
  transform: rotate(180deg);
  transition: all 1s ease;
  filter: hue-rotate(180deg);
}
.accountPicture {
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 4px;
}
.card-Shadow{
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
.post-card:hover {
  transform: scale(1.01);
  transition: all 0.3s ease-out;

}
.post-card {
  transform: scale(1);
  transition: all 0.8s ease-out;
}

.lineSpacing {
  letter-spacing: 0.05rem;
}
.customBg {
  background-color: #c2e4f32f;
}
p {
  font-weight: 700;
}

.accountImages {
  border: 4px double rgb(145, 155, 212);
 
}


// .borderimg3 {
//   border: 10px solid transparent;
//   padding: 15px;
//   border-image: url(https://www.w3schools.com/css/border.png) 30% round;

// }
</style>
