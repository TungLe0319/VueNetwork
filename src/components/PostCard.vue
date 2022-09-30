<template>
  <div class="post-card position-relative">
    <div class="card elevation-3 mx-4 my-2">
      <div class="d-flex">
        <PostCreator :creator="post.creator" />
      </div>
      
<!-- POST DOWN BELOW -->
      <div class="p-2">
        <h6>{{ post.body }}</h6>
      </div>

      <img
        v-if="post.imgUrl"
        :src="post?.imgUrl"
        alt=""
        class="img-fluid mt-2 elevation-2 forcedImg"
      />

      <div
        class="card-footer bg-secondary d-flex justify-content-between align-items-center"
      >
      <!-- Delete Post Button -->
        <div class="position-absolute top-0 end-0">
          <button class="btn"><i class="mdi mdi-minus-box fs-4"></i></button>
        </div>
        <div class="d-flex">
          <h6>{{ post.likeIds.length }}</h6>
          <i class="mdi mdi-star fs-5"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Post } from '../models/Post.js';
import PostCreator from './PostCreator.vue';

export default {
  props: {
    post: { type: Post, required: true },
  },
  setup(props) {
    return {};
  },
  components: { PostCreator },
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
</style>
