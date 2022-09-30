<template>
  <header>
    <Navbar />
  </header>
   <main class="container-fluid">
    <div class="row">
      <div class="col-md-2 d-none d-md-block bg-dark text-light sidebar">
        
        <div class="mt-3  ">

          <Login />
        </div>

        <div class=" mt-2 ">
          <button class="btn mt-3 text-success lighten-30 selectable text-uppercase">
            <router-link
              :to="{ name: 'Home' }"
              class="text-success lighten-30  text-uppercase"
            >
              Home
            </router-link>
          </button>
        </div>
<div v-for="a in ads">
   <Ads :ad="a"  />
</div>

      </div>
      <div class="col-md-10 main-content">
        <router-view />
      </div>
    </div>
  </main>

  
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Ads from "./components/Ads.vue"
import Pop from "./utils/Pop.js"
import { adsService } from "./services/AdsService.js"

export default {
  setup() {
async function getAds(){
  try {
      await  adsService.getAds()
    } catch (error) {
      Pop.error(error,[''])
    }
}
onMounted(()=>{getAds()})
    
    return {
      appState: computed(() => AppState),
      ads : computed(()=> AppState.ads)
    }
  },
  components: { Navbar, Ads }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.sideNav{
  height: 100vh;
}
</style>
