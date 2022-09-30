<template>
  <nav class="navbar navbar-expand-lg bg-warning menu-bar px-3 elevation-4 ">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex align-items-center">
        <img src="https://cdn-icons-png.flaticon.com/512/2115/2115955.png" alt="" width="50" height="50">
        <img src="https://r70.cooltext.com/rendered/cooltext420495850276005.png" alt="" >
     
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div>
      
    </div>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
       
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <!-- <Login />
      //TODO search bar here -->
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
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


.menu-bar{
  /* background-image:  linear-gradient(-90deg, #d38312, #a83279); */
 
    background: linear-gradient(40deg, #45cafc, #303f9f) !important;

}

.text-shadow{
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem
  
  /* Second Color  in text-shadow is the blur */
}
</style>
