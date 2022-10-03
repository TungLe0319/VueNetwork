<template>
  <nav
    class="navbar navbar-expand-lg bg-warning menu-bar px-3 elevation-4 justify-content-between"
  >
    <div class="d-flex">
      <vs-tooltip text="Home " position="right" color="warning">
        <vs-button
          color="warning"
          type="gradient"
          class="homeButton"
          :to="{ name: 'Home' }"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2163/2163350.png"
            alt=""
            width="50"
            height="50"
            class=""
        /></vs-button>
      </vs-tooltip>
      <div class="d-flex">
        <img
          src="https://download.logo.wine/logo/Vue.js/Vue.js-Logo.wine.png"
          alt=""
          width="100"
          height="80"
        />
        <!-- <div class="d-flex align-items-center">
          <h4>[̲̅u][̲̅e][̲̅l][̲̅u][̲̅p][̲̅t][̲̅u][̲̅o][̲̅u][̲̅s]</h4>
        </div> -->
      </div>
    </div>

    <!-- -------------------------------- -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li class="d-md-none">
          <Login />
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
    </div>
    <!-- -------------------------------- -->
    <!-- <div>
  <img src="https://i.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.webp" alt="Web-Logo" width="100" height="100">
</div> -->
    <!-- -----------------------7 -->

    <div>
      <vs-tooltip
        text="Search Posts"
        position="left"
        color="warning"
      >
        <vs-button
          color="warning"
          type="gradient"
          class="vs-buttonSearch"
          :to="{ name: 'SearchResults' }"
          ><img
            src="https://cdn-icons-png.flaticon.com/512/200/200941.png"
            alt=""
            width="50"
            height="50"
        /></vs-button>
      </vs-tooltip>
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue';
import SearchProfiles from './SearchProfiles.vue';
import SearchProfiles1 from './SearchProfiles.vue';
export default {
  setup() {
    return {};
  },
  components: { Login, SearchProfiles },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.menu-bar {
  /* background-image:  linear-gradient(-90deg, #d38312, #a83279); */

  background: linear-gradient(40deg, #c1f3ff, #10226e) !important;
}

.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem;

  /* Second Color  in text-shadow is the blur */
}

.homeButton:hover {
  filter: sepia(50%);
  transition: all 0.5s ease;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.homeButton {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.5s ease;
}

.vs-buttonSearch {
  padding-top: 0;
  padding-bottom: 0;
}
.vs-buttonSearch:hover img {
  padding-top: 0;
  padding-bottom: 0;
}

.searchIcon {
}
</style>
