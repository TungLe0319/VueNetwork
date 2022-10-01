<template>
  <div class="container-fluid">
    <div class="row" >
       <div class="con-example-images">
    <!-- <vs-images>
      <vs-image  :src="p.picture" v-for="(p) in profiles" />
   
    </vs-images> -->
  </div>
      <div class="col-md-6" v-for="p in profiles" :key="p">
        <ProfileDetail :profile="p" />
      </div>
    </div>
    <div class="row scrollMe justify-content-center">
      <div class="col-md-12 d-flex justify-content-center">
        <div class="d-flex justify-content-center mt-2">
          <vs-button
            class="me-2 p-0"
            @click="changePage(previousPage)"
            type="gradient"
            ><i class="mdi mdi-arrow-left fs-2"></i
          ></vs-button>

          <vs-button
            class="p-0"
            @click="changePage(nextPage)"
            color="warning"
            type="gradient"
            ><i class="mdi mdi-arrow-right fs-2"></i
          ></vs-button>
        </div>
      </div>
      <div class="col-md-8">
        <CreatePost  />
      </div>
      <div class="row">
        <SearchForm />
      </div>
      <div class="col-md-8" v-for="p in posts" :key="p">
        <PostCard
          :post="p"
          :creator="p.creator"
          @deletePost="deletePost(p.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { postService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';
import PostCard from '../components/PostCard.vue';
import CreatePost from '../components/CreatePost.vue';
import SearchForm from '../components/SearchForm.vue';
import ProfileCards from '../components/ProfileCards.vue';
import ProfileDetail from "../components/ProfileDetail.vue";

export default {
  setup() {
    async function getPosts() {
      try {
        await postService.getPosts();
      } catch (error) {
        Pop.error(error, ['getPosts']);
      }
    }
    onMounted(() => {
      getPosts();
    });
    return {
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),
      posts: computed(() => AppState.posts),
      page: computed(() => AppState.page),
      lastPage: computed(() => AppState.lastPage),
      profiles: computed(() => AppState.profiles),
      account: computed(() => AppState.account),
      async changePage(pageUrl) {
        try {
          await postService.getPosts(pageUrl);
        } catch (error) {
          Pop.error(error.message);
        }
      },

      async deletePost(id) {
        try {
          const yes = await Pop.confirm('Delete the Listing?');
          if (!yes) {
            return;
          }
          await postService.deletePost(id);
        } catch (error) {
          Pop.error(error, '[Deleting Classified]');
        }
      },
    };
  },
  components: { PostCard, CreatePost, SearchForm, ProfileCards, ProfileDetail },
};
</script>

<style scoped lang="scss">
.scrollMe {
  max-height: 100vh;
  overflow: auto;
}
</style>
