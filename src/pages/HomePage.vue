
<template>
 <div class="container-fluid">
  <div class="row  ">
<div class="col-md-7" v-for="p in posts" :key="p"  >
 <PostCard  :post="p" :account="p" />

</div>

  </div>
 </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import { postService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import PostCard from "../components/PostCard.vue";


export default {



    setup() {
        async function getPosts() {
            try {
                await postService.getPosts();
            }
            catch (error) {
                Pop.error(error, ["getPosts"]);
            }
        }
        onMounted(() => {
            getPosts();
        });
        return {

            posts: computed(() => AppState.posts)
        };
    },
    components: { PostCard }
}
</script>

<style scoped lang="scss">

</style>
