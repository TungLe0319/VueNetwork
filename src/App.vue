<template>
  <!-- <header>
    <Navbar />
  </header> -->
   <main class="container-fluid">
    <div class="row">
      <div class="col-md-2 d-none d-md-block bg-dark text-light sidebar">
        
        <div class="mt-3 rounded ">

          <Login />
        </div>
<div class="mt-2">
 <span class="text-primary">Sort By Pages</span>

</div>
        <div class="border-top mt-2 ">
          <button class="btn mt-3 text-success lighten-30 selectable text-uppercase">
            <router-link
              :to="{ name: 'Home' }"
              class="text-success lighten-30  text-uppercase"
            >
              Home
            </router-link>
          </button>
        </div>


      </div>
      <div class="col-md-10 main-content">
        <router-view />
      </div>
    </div>
  </main>

  
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.sideNav{
  height: 100vh;
}
</style>
