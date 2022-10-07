import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'

const PostLayout = ({post}) => {

    const getUserName = () =>{
        const email = post.user.email;
        const username = email.substring(0, email.length-10)
        return username;
    }

  return (
    <div className=" rounded overflow-hidden border w-full  bg-white mx-3 md:mx-0 lg:mx-0">
        
    <div className="w-full flex justify-between p-3">
      <div className="flex">
        <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
          <img src="https://avatars0.githubusercontent.com/u/38799309?v=4" alt="profilepic" /> 
        </div>
        <span className="pt-1 ml-2 font-bold text-sm">{getUserName()}</span>
      </div>
      <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"><i className="fas fa-ellipsis-h pt-2 text-lg"></i></span>
    </div>
    <img className="w-full h-72 bg-cover p-1 pr-3 m-2" src={post.imageUrl}  />
    <div className='flex '>
        <AiFillHeart className='ml-3' size={30}/>
        <FaRegComment className='ml-4' size={30} />
    </div>
    <div className="px-3 pb-2">
      <div className="pt-2">
        <i className="far fa-heart cursor-pointer"></i>
        <span className="text-sm text-gray-400 font-medium">{post.likes.length} likes</span>
      </div>
      <div className="pt-1">
        <div className="mb-2 text-sm">
          <span className="font-medium mr-2">{getUserName()}</span> {post.description}
        </div>
      </div>
      <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">View all {post.Comments.length} comments</div>
      <div className="mb-2">
        <div className="mb-2 text-sm">
          <span className="font-medium mr-2">RANDOM USER</span> your Comment will come here
        </div>
      </div>
    </div>
  </div>
  )
}

export default PostLayout