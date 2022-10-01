<template>


  <div class="example" v-if="profile">
    <ProfileDetail :profile="profile" />
  </div>
  <!-- ------------- -->
  <div class="d-flex justify-content-center mt-2">
    <vs-button class="me-2" :disabled="!previousPage" @click="changePage(previousPage)" type="gradient"
      >Previous</vs-button
    >

    <vs-button :disabled="!nextPage" @click="changePage(nextPage)" color="warning" type="gradient"
      >warning</vs-button
    >
  </div>
  <!-- -------------- -->
  <div>
    <PostCard v-for="p in posts" :post="p" :key="p.id" />
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { profilesService } from '../services/ProfilesService.js';
import ProfileDetail from '../components/ProfileDetail.vue';
import PostCard from '../components/PostCard.vue';
import CreatePost from '../components/CreatePost.vue';
import { postService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';
export default {
  setup(props) {
    const route = useRoute();

    async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.id);
        document.documentElement.scrollTop = 0
      } catch (error) {
        Pop.error(error, ['']);
      }
    }

    async function getPostsByCreatorId() {
      try {
        await postService.getPostsByCreatorId(route.params.id);
      } catch (error) {
        Pop.error(error, ['[GetPostsByCreatorId]']);
      }
    }
    onMounted(() => {
      getProfileById();
      getPostsByCreatorId();
    });
    return {
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.posts),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),

      
      async changePage(pageUrl) {
        try {
          await postService.getPosts(pageUrl);
        } catch (error) {
          Pop.error(error.message);
        }
      },
    };
  },
  components: { ProfileDetail, PostCard, CreatePost },
};
</script>

<style lang="scss" scoped>
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem;
  /* Second Color  in text-shadow is the blur */
}
.forcedImg {
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.cover-img{
  height: 50vh;
  width: 65.9vw;

}
</style>
