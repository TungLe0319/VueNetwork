<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>

  <div class="col-md-8 ">
   
  </div>
</template>


 <!-- this.id = data.id
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
import { accountService } from "../services/AccountService.js"
import Pop from "../utils/Pop.js"
export default {
  setup() {


    return {

      
      account: computed(() => AppState.account),

      async editProfile(){
try {
    await accountService.editProfile()
  } catch (error) {
    Pop.error(error,[''])
  }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
