<template>
  <div v-if="account">
    <div
      class="bg-dark elevation-3 m-1 elevation-3 mt-2 rounded border border-secondary border-1 cover-img"
      :style="{ backgroundImage: `url(${profile?.coverImg})` }"
    >
      <div class="d-flex justify-content-between align-items-center">
        <div class="m-2 position-relative" v-if="profile?.picture">
          <img
            :src="profile?.picture"
            alt=""
            class="rounded-circle forcedImg border border-3 border-warning hoverable profileImg"
            @error="altImgUrl"
          />

          <span v-if="profile?.graduated" class="">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732475.png"
              alt=""
              width="40 "
              height="40"
              class="text-shadow schoolIcon"
            />
          </span>
        </div>
        <div class="me-3 text-shadow d-flex flex-column">
          <span>
            <a
              :href="profile.github"
              class="text-light"
              :disabled="profile.github"
              target="_blank"
            >
              <vs-tooltip text="github" position="left" color="primary">
                <i
                  :class="profile.github ? '' : 'text-dark opacity-50 disabled'"
                  class="mdi mdi-github fs-1 editAccount"
                ></i>
              </vs-tooltip>
            </a>
          </span>
          <span>
            <a
              :href="profile.linkedin"
              class="text-light"
              :disabled="profile.linkedin"
              target="_blank"
            >
              <vs-tooltip text="LinkedIn" position="left" color="primary">
                <i
                  :class="profile.linkedin ? '' : 'text-dark opacity-50 '"
                  class="mdi mdi-linkedin fs-1 editAccount"
                ></i>
              </vs-tooltip>
            </a>
          </span>
          <span>
            <a
              v-if="profile.resume"
              :href="profile.resume"
              class="text-light"
              :disabled="profile.resume"
              target="_blank"
            >
              <vs-tooltip text="resume" position="left" color="primary">
                <i
                  :class="profile.resume ? '' : 'text-dark opacity-50 disabled'"
                  class="mdi mdi-text-box fs-1 editAccount"
                ></i>
              </vs-tooltip>
            </a>
          </span>
        </div>
      </div>
      <div class="mx-3 mt-3 text-shadow">
        <h6 class="">{{profile.email}}</h6>
        <h1>{{ profile.name }}</h1>
        <h5 class="class1" >Class: {{ profile.class }}</h5>
        
        <div v-if="profile.bio">
          <h5><em>Bio:</em></h5>
          <p>{{ profile.bio }}</p>
        </div>
        <div v-else>
          No Profile Bio...
        </div>
        <div v-if="route.fullPath == '/account'">
          <div class=" " v-if="account.id == profile.id">
            <vs-tooltip text="Edit Account" position="left" color="primary">
              <i
                class="mdi mdi-account-edit fs-1 btn text-light editAccount"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              ></i>
            </vs-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ---------------------------------------------- -->
  <div></div>
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
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { AppState } from '../AppState.js';
import { Account } from '../models/Account.js';
import Pop from '../utils/Pop.js';
import CreatePost from './CreatePost.vue';

export default {
  props: {
    profile: { type: Account, required: true },
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    let routePath = router.currentRoute.value;
    console.log(routePath.fullPath);
    return {
      routePath,
      route,
      account: computed(() => AppState.account),
      profileTest: computed(() => AppState.profiles),
      altImgUrl(event) {
        event.target.src =
          'https://i.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.webp';
      },
    };
  },
  components: { CreatePost },
};
</script>

<style lang="scss" scoped>
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px rgb(25, 28, 29);
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}
.forcedImg {
  height: 120px;
  width: 120px;
  object-fit: cover;
}


.schoolIcon {
  position: absolute;
  top: -0.75rem;
  left: -0.5rem;
}

.cover-img {
  height: 70vh;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.customBg {
  background-color: rgba(14, 1, 1, 0.219);
}

.class1 {
  color: rgba(225, 232, 236, 0.925);
}

.hoverable {
  cursor: pointer;
}

.noCursor {
  pointer-events: none;
}

.editAccount:hover{
transition: all 0.3s ease;
filter: brightness(120%);
transform: scale(1.05);
}
.editAccount{
transition: all 0.3s ease;
}

.profileImg {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.5s ease;
}
.profileImg:hover {
  transform: scale(1.01);
  transition: all 0.5s ease;
  filter: brightness(120%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(142, 238, 228, 0.756);
}

.schoolIcon{
  position: absolute;
  left: 0;
}
</style>


