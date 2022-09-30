<template>
  <div class="post-card">
 <div class="card   elevation-3 mx-4 my-2 "  >
  <div class="d-flex">
   <PostCreator  :creator="post.creator" />
  </div>
  <div>
    
  </div>
           
              <img :src="post.imgUrl" alt=""
                class="img-fluid  mt-2 elevation-2 forcedImg ">
               <div class="card-body ">
              <div class="">
                <p>{{post.body}}</p>
              </div>
            
            </div>
          </div>
    
  </div>
</template>

<script>
import { Post } from "../models/Post.js";
import PostCreator from "./PostCreator.vue";


export default {
    props: {
        post: { type: Post, required: true },
    },
    setup(props) {
        return {};
    },
    components: { PostCreator }
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
  height: 400px;
  width:auto;
  object-fit: cover;
 
}

.accountPicture{
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 4px;
}

.post-card:hover{
transform: scale(1.01);
transition: all 0.3s ease-out;

img  {

 overflow: hidden;
 transition: all 1s  ease;
 border-radius: 4px;

}
}

</style>
