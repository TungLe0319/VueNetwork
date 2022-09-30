<template>
  <div class="container-fluid">
    <div class="row scrollMe">
      <div class="col-md-12 d-flex justify-content-center">
        <div class="d-flex justify-content-center mt-2">
          <button
            @click="changePage(previousPage)"
           
            class="btn btn-danger me-2"
          
          >
            Previous
          </button>
          <button
            @click="changePage(nextPage)"
           
            :class="`btn btn-danger ${!nextPage ? 'btn-info' : ''}`"
          >
            Next
          </button>
        </div>
      </div>
      <div class="col-md-7" v-for="p in posts" :key="p">
        <PostCard :post="p" />
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

      async changePage(pageUrl) {
        try {
          await postService.getPosts(pageUrl);
        } catch (error) {
          Pop.error(error.message);
        }
      },
    };
  },
  components: { PostCard },
};
</script>

<style scoped lang="scss">
.scrollMe {
  max-height: 100vh;
  overflow: auto;
}
</style>
