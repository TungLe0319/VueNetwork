<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row ">
      <div class="col-md-2 bg-dark text-light sideNav rounded-end elevation-2 border border-secondary border-1 profile-Banner" >
        <div class="mt-3">
          <Login />
        </div>

        <!-- <div class="mt-2">
          <button
            class="btn mt-3 text-success lighten-30 selectable text-uppercase"
          >
            <router-link
              :to="{ name: 'Home' }"
              class="text-success lighten-30 text-uppercase"
            >
              Home
            </router-link>
          </button>
        </div> -->
      </div>
      <!---------------------------------->
      <!-- <div class="col-md-2 m-0 ">

        <SideBar/>
      </div> -->
      <!---------------------------------->

      <div class="col-md-8 main-content">
        <router-view />
      </div>

      <div class="col-md-2  ">
        
        <div v-for="a in ads" class="d-flex justify-content-center ">
          <Ads :ad="a" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from './AppState';
import Navbar from './components/Navbar.vue';
import Ads from './components/Ads.vue';
import Pop from './utils/Pop.js';
import { adsService } from './services/AdsService.js';
import SideBar from "./components/SideBar.vue";

export default {
  setup() {
    async function getAds() {
      try {
        await adsService.getAds();
      } catch (error) {
        Pop.error(error, ['']);
      }
    }
    onMounted(() => {
      getAds();
    });

    return {
      appState: computed(() => AppState),
      ads: computed(() => AppState.ads),
    };
  },
  components: { Navbar, Ads, SideBar },
};
</script>
<style lang="scss">
@import './assets/scss/main.scss';
main{
  background-color: #f8fcfb;
}

::-webkit-scrollbar {
  display: none;
}

.sideNav {
  height: 60vh;
}

.profile-Banner{
  background-image: url(https://i.pinimg.com/564x/ca/db/46/cadb46a6ac190342d8152d4240952333.jpg);
background-position: center;
background-size: cover;

}

.profile-Banner:hover{
  transform: scale(1.01);
  filter: brightness(110%);
  transition: all 0.3s ease;
}

.ad-Banner{
  height: 80vh;
}
</style>

//https://i.pinimg.com/564x/71/a7/56/71a756556c485cb45b955b328acca89c.jpg