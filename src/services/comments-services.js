import axios from 'axios'

export class CommentsServices {


  getComments=()=>{
    return axios.get("http://localhost:3000/comments")
  }

  postComment =(body,postId)=>{
    return axios.post("http://localhost:3000/comments",
      {
        "body": body,
        "postId":postId
      })
  }

  deleteComment=(commentId)=>{
    return axios.delete("http://localhost:3000/comments/"+commentId)
  }

  putComment=(commentId,body,postId)=>{
    return axios.put("http://localhost:3000/comments/"+commentId,
      {
        "body": body,
        "postId":postId
      })
  }

}

