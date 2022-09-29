<template>
  <div class="post-card">
 <div class="card   elevation-3 mx-4 my-2 "  >
  <div class="d-flex">
    <img :src="account.picture" alt="" class="accountPicture elevation-4 ms-2 mt-2 rounded-circle">
    <div class=" d-flex align-items-center ms-3 mt-4 flex-column">
      <h6>{{account.name}}</h6>
      <span> <p></p> <i class="mdi mdi-school fs-2"></i>   </span>
    </div>
    
  </div>
  <div>
    
  </div>
            <div class="d-flex justify-content-center">
              <img :src="post.imgUrl" alt=""
                class="img-fluid  mt-2 elevation-2 forcedImg">
            </div>
            <div class="card-body ">
              <div class="">
                <h5>{{post.body}}</h5>
              </div>
            
            </div>
          </div>
    
  </div>
</template>

<script>
import { Post } from "../models/Post.js";
import {Account} from "../models/Account.js"

export default {
  props: {
post:{type: Post, required: true},
account:{type: Account, required:true}
  },

  setup(props) {
const account = props.account.creator
    return {
account
    };
  },
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


</style>
