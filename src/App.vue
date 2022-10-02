<template>
  <header class="">
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row ">
      <div class="col-md-2 bg-dark text-light sideNav rounded-end elevation-2 border border-secondary border-1 profile-Banner d-none d-md-block" >
        <div class="mt-3">
          <Login />
        </div>

    
      </div>
   
      <div class="col-md-8 main-content">
        <router-view />
      </div>

      <div class="col-md-2 d-none d-md-block ">
        <span class="d-flex justify-content-center"> <h6 class="sponsor text-light text-shadow"> Sponsors: </h6> </span>
        <div v-for="a in ads" class="d-flex  ms-5  ad-Banner ">
          <vs-tooltip :title="a.title" text="You should click me" position="left" color="primary">

            <Ads :ad="a" />
          </vs-tooltip>
        </div>
      </div>
      

      <!--  -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
     
      <div class="modal-body modal1" :style="{backgroundImage: `url(${activeImg})`}">
        <!-- <img :src="activeImg" alt="" class=" img-fluid"> -->
      </div>
     
    </div>
  </div>
</div>
      <!--  -->
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
      activeImg: computed(() => AppState.activeImage)
    };
  },
  components: { Navbar, Ads, SideBar },
};
</script>
<style lang="scss">
@import './assets/scss/main.scss';
main{
  // background-color: #f8fcfb;
    background-image: url(https://wallpapercave.com/wp/wp2682130.png);
background-position: center;
background-size: cover;
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

 transition: all 1.3s ease;
}

.profile-Banner:hover{
  transform: scale(1.01);
  filter: brightness(110%);
  
  transition: all 1.3s ease
}


.modal1{
  background-image: url(https://i.imgflip.com/6vhwc1.jpg);
  height: 80vh;
  background-position: center;
  background-size: cover;
  border: 4px dashed aliceblue;
}

.adColumn{
 height: 10vh;
}

.sponsor{
  font-size:  large;
  font-weight: 700;
  margin-top: 0.5rem;

}
.ad-Banner:hover{
  transform: translateX(-40px);
transition: all 0.5s ease;
}
.ad-Banner{
 
transition: all 0.5s ease;
}


.text-shadow{
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px rgb(58, 56, 55);
  font-weight: bold;
  letter-spacing: 0.08rem
  

}
</style>

//https://i.pinimg.com/564x/71/a7/56/71a756556c485cb45b955b328acca89c.jpg