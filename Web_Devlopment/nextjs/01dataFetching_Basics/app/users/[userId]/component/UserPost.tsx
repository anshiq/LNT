import React from 'react'
type Props = {
  promise: Promise<Posts[]>
}

export default async function UserPost({promise}:Props) {
  const posts = await promise
  const content =  posts.map(post=>(<>
    <article key={post.id}><h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
      <br/>
    </>))
  return content
}
