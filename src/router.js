import { createRouter, createWebHistory } from "vue-router";


import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Product from "./components/Product.vue";
import Comment from "./components/Comment.vue";
import Post from "./components/Post.vue";
import NewComment from "./components/Comment.new.vue"
import NewPost from "./components/Post.new.vue"

//Routes
const routes = [
  { path: '/', component: Home },
  { path: '/product', component: Product },
  { path: '/comment', component: Comment },
  { path: '/post', component: Post },
  { path: '/newcomment', component: NewComment },
  { path: '/newpost', component: NewPost }
]
const history = createWebHistory();
const router = createRouter({
    history,
    routes
  }
)

export default router
