<template>
  <router-link to="/post">Back</router-link>
  <form>
    <div class="field grid">
      <label for="title">Title</label>
      <InputText id="title" v-model="title"/>
    </div>

    <div class="field grid">
      <label for="author">Author</label>
      <InputText id="author" v-model="author"/>
    </div>

    <Button @click="save">Save</Button>
  </form>
</template>

<script>

import { PostsServices } from "../services/post-services";

export default {

  name: "Post.new",
  data(){
    return {
      title:"",
      author:"",
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
      new PostsServices().postPost(this.title,this.author).then(
        this.$router.push('/post')

      )
    }
  }
};
</script>

<style scoped>

</style>
