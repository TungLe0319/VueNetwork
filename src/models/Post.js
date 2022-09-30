import { Account } from "./Account.js"

export class Post{


  constructor(data) {
    this.id = data.id 
this.body = data.body
this.imgUrl = data.imgUrl
this.creator =  new Account(data.creator)
this.likeIds= data.likeIds //array as res.data
  }

 
}