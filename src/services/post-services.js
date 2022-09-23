import axios from 'axios'

export class PostsServices {


  getPosts=()=>{
    return axios.get("http://localhost:3000/posts")
  }

  postPost =(title,author)=>{

    return axios.post("http://localhost:3000/posts",
      {
        "title": title,
        "author": author
      })
  }

  deletePost=(postId)=>{
    return axios.delete("http://localhost:3000/posts/"+postId)
  }

  putPost=(postId,title,author)=>{
    return axios.put("http://localhost:3000/posts/"+postId,
      {
        "title": title,
        "author": author
      })
  }


}

