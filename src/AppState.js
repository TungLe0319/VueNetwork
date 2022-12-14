import { reactive } from 'vue';

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Account.js').Account | null} */
  activeProfile: null,

  /** @type {import('./models/Post.js').Post[]} */
  posts: [],

  /** @type {import('./models/Ad.js').Ad[]} */
  ads: [],

  /** @type {import('./models/Account.js').Account[]} */
  profiles: [],

  activeImage: null,

  page: 0,
  lastPage: 0,
  term: '',
  nextPage: null,
  previousPage: null,
  likeNamesList: [],

  /** @type {import('./models/LikeIds.js').LikeIds | null} */
  myLike: null,

  /** @type {import('./models/Account.js').Account[]} */
  likesAccounts: [],
});
