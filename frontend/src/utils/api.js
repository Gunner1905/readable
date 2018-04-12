import axios from 'axios'
import uuidV1 from 'uuid/v1'

const headers = {
  'Accept': 'application/json',
  'Authorization': 'ReadableAhmet'
}

export async function getAllCategories() {
  const res = await axios.get(`localhost:3001/api/categories`, { headers })
  return res.data.categories
}

export async function getPostsByCategory(category) {
  const res = await axios.get(`localhost:3001/api/${category}/posts`, { headers })
  return res.data
}

export async function addPost({ category, title, body, author }) {
  const id = uuidV1()
  const timestamp = Date.now()
  const res = await axios.post(`localhost:3001/api/posts`, {
    id, timestamp, title, body, author, category
  }, { headers })

  return res.data
}

export async function deletePost(id) {
  const res = await axios.delete(`localhost:3001/api/posts/${id}`, { headers })

  return res.data
}

export async function getPostById(id) {
  const res = await axios.get(`localhost:3001/api/posts/${id}`, { headers })

  return res.data
}

export async function editPostById({ id, title, body }) {
  const res = await axios.put(`localhost:3001/api/posts/${id}`, {
    title, body
  }, { headers })

  return res.data
}

export async function upVotePost(id) {
  const res = await axios.post(`localhost:3001/api/posts/${id}`, {
    option: "upVote"
  }, { headers })

  return res.data
}

export async function downVotePost(id) {
  const res = await axios.post(`localhost:3001/api/posts/${id}`, {
    option: "downVote"
  }, { headers })

  return res.data
}



export async function getAllCommentsById(id) {
  const res = await axios.get(`localhost:3001/api/posts/${id}/comments`, {
    headers
  })

  return res.data
}

export async function deleteComment(id) {
  const res = await axios.delete(`localhost:3001/api/comments/${id}`, { headers })

  return res.data
}

export async function addComment({body, author, parentId}) {
  const id = uuidV1()
  const timestamp = Date.now()
  const res = await axios.post(`localhost:3001/api/comments`, {
    id, timestamp, body, author, parentId
  }, { headers })

  return res.data
}

export async function editComment({id, body}) {
  const timestamp = Date.now()
  const res = await axios.put(`localhost:3001/api/comments/${id}`, {
    body, timestamp
  }, { headers })

  return res.data
}
export async function upVoteComment(id) {
  const res = await axios.post(`localhost:3001/api/comments/${id}`, {
    option: "upVote"
  }, { headers })

  return res.data
}

export async function downVoteComment(id) {
  const res = await axios.post(`localhost:3001/api/comments/${id}`, {
    option: "downVote"
  }, { headers })

  return res.data
}



