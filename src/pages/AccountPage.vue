<template>
  <!-- <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
    <p>{{ account.github }}</p>
    <p>{{ account.linkedin}}</p>
    <p>{{ account.resume }}</p>
    <p>{{ account.class }}</p>
    <p> graduated : {{ account.graduated }}</p>
    <p>{{ account.bio }}</p>
  </div> -->


<div>
  <ProfileDetail :profile="account" />
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
