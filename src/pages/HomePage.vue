<template>
  <div class="container-fluid">
    <div class="row scrollMe justify-content-center">
      <div class="col-md-8" v-if="user.isAuthenticated">
        <CreatePost />
      </div>
      <div
        class="row justify-content-center"
        :class="user.isAuthenticated ? '' : 'mt-2'"
      >
        <!-- <div class="col-md-6">
          <SearchForm />
        </div> -->
        <div class="col-md-12 d-flex justify-content-center position-relative">
          <div class="d-flex justify-content-center mt-2">
            <vs-tooltip color="primary" text="PreviousPage" position="left">
              <vs-button
                v-if="previousPage"
                class="me-2 p-0"
                @click="changePage(previousPage)"
                type="gradient"
                ><i class="mdi mdi-arrow-left fs-2"></i
              ></vs-button>
            </vs-tooltip>
            <vs-tooltip color="warning" text="NextPage" position="right">
              <vs-button
                v-if="nextPage"
                class="p-0"
                @click="changePage(nextPage)"
                color="warning"
                type="gradient"
                ><i class="mdi mdi-arrow-right fs-2"></i
              ></vs-button>
            </vs-tooltip>
          </div>
        </div>
      </div>
      <div class="col-md-8" v-for="p in posts" :key="p">
        <PostCard
          :post="p"
          :creator="p.creator"
          @deletePost="deletePost(p.id)"
        />
      </div>
      <div class="col-md-12 d-flex justify-content-center">
        <div class="d-flex justify-content-center mt-2">
          <vs-tooltip color="primary" text="PreviousPage" position="left">
            <vs-button
              v-if="previousPage"
              class="me-2 p-0"
              @click="changePage(previousPage)"
              type="gradient"
              ><i class="mdi mdi-arrow-left fs-2"></i
            ></vs-button>
          </vs-tooltip>
          <vs-tooltip color="warning" text="NextPage" position="right">
            <vs-button
              v-if="nextPage"
              class="p-0"
              @click="changePage(nextPage)"
              color="warning"
              type="gradient"
              ><i class="mdi mdi-arrow-right fs-2"></i
            ></vs-button>
          </vs-tooltip>
        </div>
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
import ProfileDetail from '../components/ProfileDetail.vue';
import NaiveTest from '../components/NaiveTest.vue';
import ProfileCards1 from '../components/ProfileCards.vue';
import CreatorIcons from '../components/creatorIcons.vue';
import { useRouter } from 'vue-router';

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
      user: computed(() => AppState.user),
      async changePage(pageUrl) {
        try {
          await postService.getPosts(pageUrl);
          let test1 = pageUrl.slice(-1);
          Pop.toast(` Page: ${test1}  `, ``, 'bottom-end');
        } catch (error) {
          Pop.error(error.message);
        }
      },

      async deletePost(id) {
        try {
          const yes = await Pop.confirm('Delete the Post?');
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
  components: {
    PostCard,
    CreatePost,
    SearchForm,
    ProfileCards,
    ProfileDetail,
    NaiveTest,
    ProfileCards1,
    CreatorIcons,
  },
};
</script>

<style scoped lang="scss">
.scrollMe {
  max-height: 100vh;
  overflow: auto;
}

.scrollX {
  height: 100px;
  overflow-x: auto;
}
</style>
// import { defineComponent } from 'vue' // import { NButton , NCard, NCarousel
,N} from 'naive-ui' // export default defineComponent({ // components: { //
NButton, NCard, NCarousel // } // })
