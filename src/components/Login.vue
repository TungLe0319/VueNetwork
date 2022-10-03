<template>
  <button
    class="btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0"
    @click="login"
    v-if="!user.isAuthenticated"
  >
    Login
  </button>

  <div class="my-2 my-lg-0" v-else>
    <div v-if="account.picture" class="d-flex my-4 position-relative">
      <img
        :src="account.picture"
        alt="account photo"
        height="120"
        class="rounded-circle loginImg"
      />
      <span class="graduated" v-if="account.graduated">
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732475.png"
          alt=""
          width="30 "
          height="30"
          class="text-shadow schoolIcon"
        />
      </span>
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
    <div class="hoverable mt-2 d-flex">
      <h5 class="loginText p-1 rounded">Manage Account</h5>
    </div>
  </router-link>
  <div class="hoverable text-danger d-flex logOutText" @click="logout">
    <i class="mdi mdi-logout"></i>
    <h5 class="">Logout</h5>
  </div>
  <!-- --------------------------------- -->

  <div class="mt-2 d-flex flex-column">
    <div>
      <span>
        <h2>{{ account.name }}</h2>
      </span>
    </div>
    <!-- --------------------------------------------------------- -->
    <div class="align-items-center">
      <a
        :href="account.github"
        v-if="account.github"
        class="text-light"
        target="_blank"
      >
        <i class="mdi mdi-github fs-1 me-2"></i>
      </a>

      <a
        :href="account.linkedin"
        v-if="account.linkedin"
        class="text-light"
        target="_blank"
      >
        <i class="mdi mdi-linkedin fs-1 me-2"></i>
      </a>

      <a
        :href="account.resume"
        v-if="account.resume"
        class="text-light"
        target="_blank"
      >
        <i class="mdi mdi-account fs-1 me-2"></i>
      </a>
    </div>
    <div></div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import { AuthService } from '../services/AuthService';
import Pop from '../utils/Pop.js';
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        const yes = await Pop.confirm(
          'Are You Sure?',
          'Click Confirm to Logout',
          'Log Out',
          'question'
        );
        if (!yes) {
          return;
        }

        AuthService.logout({ returnTo: window.location.origin });
      },
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px rgb(191, 202, 229);
  font-weight: bold;
  letter-spacing: 0.08rem;
}

.loginImg {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.5s ease;
}
.loginImg:hover {
  transform: scale(1.02);
  transition: all 0.5s ease;
  filter: brightness(120%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(142, 238, 228, 0.756);
}

.smallerText {
  font-size: 12pt;
}

.loginText {
  font-weight: 700;
  transition: all 0.5s ease;
}
.loginText:hover {
  background-color: rgba(151, 218, 232, 0.536);
  padding: 2px 2px 2px 2px;
  border-radius: 5px;

  transition: all 0.5s ease;
}
.logOutText {
  font-weight: 700;
  transition: all 0.5s ease;
}

.logOutText:hover {
  background-color: rgba(255, 0, 0, 0.348);
  padding: 2px 2px 2px 2px;
  border-radius: 5px;

  transition: all 0.5s ease;
}

.hoverable {
  cursor: pointer;
}

.schoolIcon{
  position: absolute;
  left: 0;
}
</style>
