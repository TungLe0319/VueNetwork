<template>
  <span class="navbar-text">
    <button
      class="btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0"
      @click="login"
      v-if="!user.isAuthenticated"
    >
      Login
    </button>

    <div class="dropdown my-2 my-lg-0" v-else>
      <div
       
      >
        <div
          v-if="account.picture  "
          class="d-flex justify-content-center mt-5"
        >
          <img
            :src="account.picture "
            alt="account photo"
            height="120"
            class="rounded-circle"
          />
        </div>
        <div v-else>
          <div class="spinner-border text-primary p-4" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        </div>
       
        <!-- <div>
            <span class=" text-success lighten-30">{{ account.name || user.name }}</span>
        </div> -->
      </div>
      <!-- <div
        class="dropdown-menu p-0 list-group w-100 "
        aria-labelledby="authDropdown"
      > -->
        <router-link :to="{ name: 'Account' }">
          <div class="hoverable mt-2">
            Manage Account
          </div>
        </router-link>
        <div
          class=" hoverable text-danger my-2"
          @click="logout"
        >
          <i class="mdi mdi-logout"></i>
          logout
     
      </div>
    </div>
    <!-- --------------------------------- -->

    <div class="mt-2 d-flex flex-column">
      <div>
        <span>
          <small>{{account.class}}</small>
        </span>
        <span>
          <h6>{{account.name}}</h6>
        </span>
      </div>
      <!-- --------------------------------------------------------- -->
      <div class="d-flex align-items-center">
        <vs-tooltip :text="account.github" position="right">
          <i class="mdi mdi-github fs-3 me-2"></i>
        </vs-tooltip>

        <i class="mdi mdi-github fs-3 me-2"></i>
        <small>{{ account.github }}</small>
      </div>
      <!-- -------------------------------------------------------------- -->
      <div class="d-flex align-items-center " v-if="account.linkedin">
        <i class="mdi mdi-linkedin fs-3 me-2"></i>
        <small>{{ account.linkedin }}</small>
      </div>
      <!-- ---------------------------------------------------------------- -->
      <div class="d-flex align-items-center resume  " v-if="account.resume">
        <i class="mdi mdi-github fs-3 me-2"></i
        ><small>{{ account.resume }}</small>
      </div>
    </div>
  </span>
</template>

<!-- 
  this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
  
    this.bio=data.bio
    this.coverImg=data.coverImg
    this.github=data.github
    this.linkedin=data.linkedin
    this.resume=data.resume
    this.class=data.class
    this.graduated=data.graduated
    this.subs=data.subs //array -->
<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import { AuthService } from '../services/AuthService';
import Pop from "../utils/Pop.js";
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
       const yes = await Pop.confirm('Are You Sure?','Click Confirm to Logout','Log Out','question')
          if (!yes) { return }

        AuthService.logout({ returnTo: window.location.origin });
      },
    };
  },
};
</script>

<style lang="scss" scoped>

  div{
       color: aliceblue;
    text-shadow: 1px 1px black, 0px 0px 5px rgb(191, 202, 229);
    font-weight: bold;
    letter-spacing: 0.08rem
  }
  
  .text-shadow{
 
    
    /* Second Color  in text-shadow is the blur */
  }
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}

.dropdown-menu.show {
  transform: scale(1);
}

.resume {
  overflow-x: auto;
}

.resume:hover{

  overflow-x: visible;
}
.hoverable {
  cursor: pointer;
}
</style>
