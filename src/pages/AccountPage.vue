<template>
 


<div>
 <ProfileDetail :profile="account" />
</div>

  <div class="col-md-8">
    <AccountForm/>
  </div>
</template>

<script>
import { computed, onMounted} from 'vue';
import { useRoute } from "vue-router";
import { AppState } from '../AppState';
import AccountForm from '../components/AccountForm.vue';
import ProfileDetail from "../components/ProfileDetail.vue";
import Pop from "../utils/Pop.js";

export default {
  
    setup() {
     

    async function getProfileById() {
      try {
        await profilesService.getProfileById();
      } catch (error) {
        Pop.error(error);
      }
    }
    onMounted(()=>{
      // getProfileById()
    })

        return {
            account: computed(() => AppState.account),
             posts: computed(() => AppState.posts),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),
        };
    },
    components: { AccountForm, ProfileDetail }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
