export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture =
      data.picture ||
      'https://media.istockphoto.com/vectors/default-placeholder-woman-vector-id844000348?k=6&m=844000348&s=612x612&w=0&h=2QiYy7vaGEt7MlzlMnLPhUSbRNw2FzwoLc6lTXh-3vA=';
    // TODO add additional properties if needed
    this.bio=data.bio
    this.coverImg =
      data.coverImg ||
      'https://wallpapertops.com/walldb/original/e/f/7/7182.jpg';
    this.github=data.github
    this.linkedin=data.linkedin
    this.resume=data.resume
    this.class=data.class
    this.graduated=data.graduated
    this.subs=data.subs //array
  }
}
