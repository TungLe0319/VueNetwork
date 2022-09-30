<template>
  <div class="example" v-if="profile">
  <ProfileDetail />
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "../AppState.js";
import {profilesService} from  '../services/ProfilesService.js';
import ProfileDetail from "../components/ProfileDetail.vue";
export default {
    setup(props) {
        const route = useRoute();
        async function getProfileById() {
            try {
                await profilesService.getProfileById(route.params.id);
            }
            catch (error) {
                Pop.error(error, [""]);
            }
        }
        async function getProjectsByCreatorId() {
            try {
            }
            catch (error) {
                Pop.error(error, [""]);
            }
        }
        onMounted(() => {
            getProfileById();
            // getProjectsByCreatorId
        });
        return {
            profile: computed(() => AppState.activeProfile)
        };
    },
    components: { ProfileDetail }
};
</script>

<style lang="scss" scoped>

.text-shadow{
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem
  /* Second Color  in text-shadow is the blur */
}
.forcedImg{
  height: 300px;
  width: 300px;
  object-fit: cover;
}


</style>
