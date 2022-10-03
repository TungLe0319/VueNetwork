<template>
  <div class="container-fluid">
    <div class="row justify-content-center ">
    <div class="col-md-12">
      <SearchForm />
    </div>
    <div class="col-md-12">
      <SearchProfiles />
    </div>
   
        <!-- <ProfileCards  /> -->
            <div  class="text-center col-md-1 m-2"  v-for="p in profiles">
             
             <vs-tooltip :text="p.name">

               <CreatorIcons  :creator="p" />

             </vs-tooltip>
          
 

      </div>
    <div class="border border-bottom border-3 border-dark rounded my-2">
      
    </div>
        <div class="col-md-12" v-for="p in posts" :key="p">
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
import ProfileDetail from '../components/ProfileDetail.vue';
import NaiveTest from '../components/NaiveTest.vue';
import ProfileCards1 from '../components/ProfileCards.vue';
import CreatorIcons from "../components/creatorIcons.vue";
import { useRouter } from "vue-router";
import SearchProfiles from "../components/SearchProfiles.vue";


export default {
  
  setup() {
    // const route = useRouter()
    // async function getPosts() {
    //   try {
    //     await postService.getPosts();
    //   } catch (error) {
    //     Pop.error(error, ['getPosts']);
    //   }
    // }
    onMounted(() => {
   
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
          // await route.push({name:'SearchResults'})
          await postService.getPosts(pageUrl);

          let test1 = pageUrl.slice(-1)
          Pop.toast(` Page:${test1}`,``,"bottom-end")
          Pop.customTung()
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
    SearchProfiles
},
};
</script>

<style scoped lang="scss">
.scrollMe {
  max-height: 100vh;
  overflow: auto;
}

.scrollX{
 height: 100px;
  overflow-x: auto;
}

</style>
