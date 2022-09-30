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
        class="dropdown-toggle selectable"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id="authDropdown"
      >
        <div v-if="account.picture || user.picture" class="d-flex justify-content-center mt-5">
          <img
            :src="account.picture || user.picture"
            alt="account photo"
            height="120"
            class="rounded-circle"
          />
        
        </div>
        <!-- <div>
            <span class=" text-success lighten-30">{{ account.name || user.name }}</span>
        </div> -->
      </div>
      <div class="dropdown-menu p-0 list-group w-100" aria-labelledby="authDropdown">
        <router-link :to="{ name: 'Account' }">
          <div class="list-group-item list-group-item-action hoverable">
            Manage Account
          </div>
        </router-link>
        <div class="list-group-item list-group-item-action hoverable text-danger" @click="logout">
          <i class="mdi mdi-logout"></i>
          logout
        </div>
      </div>
    </div>
<!-- --------------------------------- -->

<div class="mt-2 d-flex flex-column ">
  <div>
    <span>
      <small>summer 2018</small>
    </span>
    <span>
      <h6>CocoBeans</h6>
    </span>
  </div>
<div class="d-flex align-items-center">

  <i class="mdi mdi-github fs-3 me-2"></i> cocobeans999
</div>
<div class="d-flex align-items-center">

  <i class="mdi mdi-linkedin fs-3 me-2"></i> cocobeans999
</div>
<div class="d-flex align-items-center">

  <i class="mdi mdi-github fs-3 me-2"></i> cocobeans999
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
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}

.dropdown-menu.show {
  transform: scale(1);
}

.hoverable {
  cursor: pointer;
}
</style>
