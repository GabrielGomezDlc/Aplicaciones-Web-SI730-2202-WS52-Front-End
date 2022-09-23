<template>
  <router-link to="/newpost">New Post</router-link>


  <pv-datatable :value="posts">
    <pv-column field="id" header="Id"></pv-column>
    <pv-column field="title" header="Title"></pv-column>
    <pv-column field="author" header="Author"></pv-column>
    <pv-column field="Delete" header="Delete">

      <template #body="slotProps">
        <Button @click="deletePost(slotProps.data.id)">Delete Post</Button>
      </template>
    </pv-column>
    <pv-column field="Edit" header="Edit">

      <template #body="slotProps">
        <Button @click="openEdit">Edit Post</Button>


        <pv-dialog v-model:visible="displayEditDialog">
          <template #header>
            <h3>Edit Post</h3>
          </template>

          <div class="field grid">
            <label for="body">Title</label>
            <InputText id="body" v-model="title"/>
          </div>

          <div class="field grid">
            <label for="body">Author</label>
            <InputText id="body" v-model="author"/>
          </div>

          <template #footer>
            <Button label="Save" icon="pi pi-check" autofocus @click="putPost(slotProps.data.id)" />
          </template>
        </pv-dialog>

      </template>
    </pv-column>

  </pv-datatable>


</template>

<script>

import { PostsServices } from "../services/post-services";
export default {
  name: "Post",

  data(){
    return {
      posts: null,
      displayEditDialog: false,
      title:"",
      author:""
    }
  },
  methods:{
    openEdit() {
      this.displayEditDialog = true;
    },
    deletePost:function(id){
      new PostsServices().deletePost(id)
    },
    putPost:function(id){
      new PostsServices().putPost(id,this.title, this.author)
      this.displayEditDialog = false;
    }
  },
  created(){
    new PostsServices().getPosts().then(response => {
      this.posts=response.data
    })
  }
};
</script>

<style scoped>

</style>
