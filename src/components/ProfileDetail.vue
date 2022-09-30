<template>
  

  <div class="bg-light elevation-3 m-1 elevation-3 mt-5 cover-img" :style="{backgroundImage: `url(${profile.coverImg})`}">
  

    <div class="d-flex justify-content-between align-items-center">
      <div class="m-2" >
        <img
          :src="profile.picture"
          alt=""
          class="rounded-circle forcedImg border border-3 border-warning"
        />
      </div>
      <div class="me-3 text-shadow  d-flex flex-column">
        <span>

          <i :class="profile.github? '' : 'text-dark opacity-50' " class="mdi mdi-github fs-2"></i>{{profile.github}}
        </span>
        <span>

          <i :class="profile.linkedIn? '' : 'text-dark opacity-50' " class="mdi mdi-linkedin fs-2"></i>{{profile.linkedIn}}
        </span>
        <span>

          <i :class="profile.resume? '' : 'text-dark opacity-50' " class="mdi mdi-text-box fs-2"></i>{{profile.resume}}
        </span>
      </div>
    
    </div>
      <div class="mx-3 mt-3 text-shadow">
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
  text-shadow: 1px 1px black, 0px 0px 5px rgb(162, 217, 239);
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
  height: 50vh;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
