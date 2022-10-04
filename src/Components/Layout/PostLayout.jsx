import React from 'react'

function PostLayout({post}) {
  return (
    <div>
        <img src={post.imageUrl} alt="image" className='h-40 w-40' />
    </div>
  )
}

export default PostLayout