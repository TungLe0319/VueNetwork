<template>
  <div class="post-card position-relative">
    <div
      class="card elevation-3 mx-4 my-2 card-Shadow borderimg3"
      :class="post.creator.id == account.id ? 'accountImages' : ''"
    >
      <div class="d-flex customBg pb-2 m-1 rounded">
        <PostCreator :creator="post.creator" />
      </div>

      <!-- POST DOWN BELOW -->
      <div class="p-2 lineSpacing">
        <p class="ms-2">{{ post.body }}</p>
      </div>

      <img
        v-if="post.imgUrl"
        :src="post?.imgUrl"
        :alt="post.creator.name"
        class="img-fluid mt-2 elevation-2 forcedImg"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="setActivePicture()"
        @error="altImgUrl"
      />

      <div
        class="card-footer customBg d-flex justify-content-between align-items-center"
      >
        <!-- Delete Post Button -->
        <div
          class="position-absolute top-0 end-0 "
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
        
        <div  v-if="user.isAuthenticated">
          <div class="d-flex justify-content-start" v-if="post.thumbUp == true">
            <p class="postLikeLength hoverable">{{ post.likeIds.length }}</p>

            <vs-tooltip>
              <i
                :disabled="!user.isAuthenticated"
                @click="likePost()"
                class="mdi mdi-star fs-2 text-warning text-shadow rounded hoverableThumb"
              ></i>
            </vs-tooltip>
          </div>
          <div class="d-flex justify-content-start" v-else-if="post.thumbUp == false">
            <p class="postLikeLength hoverable">{{ post.likeIds.length }}</p>
            <vs-tooltip>
              <i
                @click="likePost()"
                :class="post.likeIds.length"
                class="mdi mdi-star-outline fs-2 text-warning text-shadow hoverableThumb rounded"
              ></i>
            </vs-tooltip>
          </div>
          <div>
          </div>
          <!-- <div v-else>
            <p class="postLikeLength">{{ post.likeIds.length }}</p>
            <i
              :disabled="!user.isAuthenticated"
              @click="likePost()"
              class="mdi mdi-thumb-down"
            ></i>
          </div> -->
        </div>

        <!-- -==---------=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- -->

        <div>
          <vs-tooltip
            :text="new Date(post.createdAt).toLocaleString('en-Us')"
            position="left"
            color="primary"
          >
            <h6 class="timeText hoverable">    {{testTime}}</h6>
          </vs-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format, render, cancel, register } from 'timeago.js';
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
function test5(){
  
   props.post.likes.forEach((m) => {
      console.log(m.name);
      AppState.likeNamesList = m.name
    });

}
test5()
    let time = format(Date.now());
    let testTime = format(props.post.createdAt);
    return {
     
      time,
      testTime,
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      myLike: computed(() => AppState.myLike),
LikeListName: computed(() => AppState.likeNamesList),
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

      altImgUrl(event) {
        event.target.src = 'https://i.imgflip.com/6vhwc1.jpg';
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
  transition: all 0.3s ease;
}
.forcedImg:hover {
  filter: brightness(90%);
  transition: all 0.3s ease;
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
}
.accountPicture {
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 4px;
}
.card-Shadow {
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
  background-color: #a4cddfb7;
}
p {
  font-weight: 700;
}

.accountImages {
  border: 4px double rgb(145, 155, 212);
}

.timeStamp{
  font-weight: bold;
}
.timeText {
  font-weight: 1000;
  letter-spacing: 0.04em;
}
.hoverable {
  cursor: pointer;
  transition: all 0.5s ease;
}
.hoverableThumb:hover {
  cursor: pointer;
  color: rgb(226, 187, 13);
  transition: all 0.5s ease;
}
.hoverableThumb {
  cursor: pointer;

  transition: all 0.5s ease;
}
.postLikeLength {
  font-weight: bold;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

@media only screen and  (max-width: 650px){
.deleteImg{
  width: 30px;
  height: 30px;
  filter: hue-rotate(180deg);
}
.forcedImg {
  height: 150px;
  width: auto;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s ease;

}


}
</style>
