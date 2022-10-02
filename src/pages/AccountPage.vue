<template>
 
<div class="bg-dark rounded mt-2 p-1  text-center">
<span class=""><h1 class="MyAccount">My Account</h1></span>
</div>

<div v-if="account" v-show="account" >
 <ProfileDetail :profile="account" :key="account" />
</div>
<div v-else>
  ...loading
</div>

  <div class="col-md-8">
    <AccountForm/>
  </div>
  <div>
    <PostCard v-for="p in posts" :post="p" :key="p.id" />
  </div>
</template>

<script>
import { computed, onMounted} from 'vue';

import { AppState } from '../AppState';
import AccountForm from '../components/AccountForm.vue';
import ProfileDetail from "../components/ProfileDetail.vue";
import { postService } from "../services/PostsService.js";

import Pop from "../utils/Pop.js";
import PostCard from "../components/PostCard.vue";

export default {
  
    setup() {
 
  
    onMounted(()=>{
  

    })

        return {
            account: computed(() => AppState.account),
             posts: computed(() => AppState.posts),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),
        };
    },
    components: { AccountForm, ProfileDetail, PostCard }
};
</script>

<style scoped>
img {
  max-width: 100px;
}

.MyAccount{
  font-weight: 800;
  letter-spacing: 0.3rem;
}

</style>
