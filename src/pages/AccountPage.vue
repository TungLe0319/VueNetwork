<template>
 


<div>
 
</div>

  <div class="col-md-8">
    <AccountForm/>
  </div>
</template>

<script>
import { computed} from 'vue';
import { AppState } from '../AppState';
import AccountForm from '../components/AccountForm.vue';
import ProfileDetail from "../components/ProfileDetail.vue";

export default {
    setup() {
        return {
            account: computed(() => AppState.account),
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
