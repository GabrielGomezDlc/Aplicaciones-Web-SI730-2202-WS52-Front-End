<template>
  <router-link to="/comment">Back</router-link>
<form>
  <div class="field grid">
    <label for="body">Body</label>
    <InputText id="body" v-model="body"/>
  </div>


  <div class="field grid">
  <label for="postId">Post Id</label>
    <Dropdown v-model="selectedPost" :options="posts" optionLabel="title" placeholder="Select a post" />
  </div>


    <Button @click="save">Save</Button>
</form>
</template>

<script>
import { CommentsServices } from "../services/comments-services";
import { PostsServices } from "../services/post-services";

export default {

  name: "Comment.new",
  data(){
    return {
      body:"",
      selectedPost:"",
      posts:[]
    }

  },
  created() {
    new PostsServices().getPosts()
      .then(response =>{
        this.posts=response.data;
      })
  },
  methods:{
    save:function(){
      new CommentsServices().postComment(this.body,this.selectedPost.id).then(
      this.$router.push('/comment')
      )
    }
  }
};
</script>

<style scoped>

</style>
