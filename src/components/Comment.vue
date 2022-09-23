<template>
  <router-link to="/newcomment">New Comment</router-link>


  <pv-datatable :value="comments">
    <pv-column field="id" header="Id"></pv-column>
    <pv-column field="body" header="Body"></pv-column>
    <pv-column field="postId" header="Post Id"></pv-column>
    <pv-column field="Delete" header="Delete">

      <template #body="slotProps">
      <Button @click="deleteComment(slotProps.data.id)">Delete Comment</Button>
      </template>
    </pv-column>
    <pv-column field="Edit" header="Edit">

      <template #body="slotProps">
        <Button @click="openEdit">Edit Comment</Button>


        <pv-dialog v-model:visible="displayEditDialog">
          <template #header>
            <h3>Edit Comment</h3>
          </template>

          <div class="field grid">
            <label for="body">Body</label>
            <InputText id="body" v-model="body"/>
          </div>

          <div class="field grid">
            <label for="postId">Post Id</label>
            <Dropdown v-model="selectedPost" :options="posts" optionLabel="title" placeholder="Select a post" />
          </div>

          <template #footer>
            <Button label="Save" icon="pi pi-check" autofocus @click="putComment(slotProps.data.id)" />
          </template>
        </pv-dialog>

      </template>
    </pv-column>

  </pv-datatable>


</template>

<script>
import { CommentsServices } from "../services/comments-services";
import { PostsServices } from "../services/post-services";

export default {
  name: "Comment",
  data(){
    return {
      comments: null,
      displayEditDialog: false,
      body:"",
      selectedPost:"",
      posts:[],
    }
  },
  methods:{
    openEdit() {
      this.displayEditDialog = true;
    },

    deleteComment:function(id){
      new CommentsServices().deleteComment(id)
    },

    putComment:function(id){
      new CommentsServices().putComment(id,this.body,this.selectedPost.id)
      this.displayEditDialog = false;
    }
  },
  created(){
    new CommentsServices().getComments().then(response => {
      this.comments=response.data
    })
    new PostsServices().getPosts()
      .then(response =>{
        this.posts=response.data;
      })
  }
};
</script>

<style scoped>

</style>
