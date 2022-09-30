<template>
  <!-- <div class="cover-img" :style="{backgroundImage: `url(${profile.coverImg})`}">
  </div> -->

  <div class="bg-light elevation-3 m-1 elevation-3 mt-5">
    <div class="cover-img">
      <img :src="profile.coverImg" :alt="profile.picture" class="cover-img" />
    </div>

    <div class="d-flex justify-content-between align-items-center">
      <div>
        <img
          :src="profile.picture"
          alt=""
          class="rounded-circle forcedImg border border-3 border-warning"
        />
      </div>
      <div class="me-3">
        <i class="mdi mdi-github fs-2"></i>
        <i class="mdi mdi-linkedin fs-2"></i>
        <i class="mdi mdi-github fs-2"></i>
      </div>
    
    </div>
      <div class="mx-3 mt-3">
       <p>   {{profile.class}}</p>
       <h5>{{profile.name}}</h5>
       <div>
        <p>{{profile.bio}}</p>
       </div>
       <div class="d-flex justify-content-end">
<button class="btn ">Edit</button>
       </div>
      </div>
  </div>


  <!-- ---------------------------------------------- -->
  <div>
  
  </div>
  <!-- ---------------------------------------------- -->
</template>

<!-- 
   this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
    this.bio=data.bio
    this.coverImg=data.coverImg
    this.github=data.github
    this.linkedin=data.linkedin
    this.resume=data.resume
    this.class=data.class
    this.graduated=data.graduated
    this.subs=data.subs //array -->
<script>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Account } from '../models/Account.js';
import Pop from '../utils/Pop.js';
import CreatePost from "./CreatePost.vue";

export default {
    props: {
        profile: { type: Account, required: true },
    },
    setup(props) {
        return {};
    },
    components: { CreatePost }
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
  height: 120px;
  width: 120px;
  object-fit: cover;
}

.cover-img {
  height: 20vh;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
