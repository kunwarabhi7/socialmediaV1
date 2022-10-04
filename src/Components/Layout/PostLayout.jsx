import React from 'react'

const PostLayout = ({post}) => {

    const getUserName = () =>{
        const email = post.user.email;
        const username = email.substring(0, email.length-10)
        return username;
    }

  return (
    <div className=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
        
    <div className="w-full flex justify-between p-3">
      <div className="flex">
        <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
          <img src="https://avatars0.githubusercontent.com/u/38799309?v=4" alt="profilepic" /> 
        </div>
        <span className="pt-1 ml-2 font-bold text-sm">{getUserName()}</span>
      </div>
      <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"><i className="fas fa-ellipsis-h pt-2 text-lg"></i></span>
    </div>
    <img className="w-full h-72 bg-cover p-3 m-2" src={post.imageUrl}  />
    <div className="px-3 pb-2">
      <div className="pt-2">
        <i className="far fa-heart cursor-pointer"></i>
        <span className="text-sm text-gray-400 font-medium">12 likes</span>
      </div>
      <div className="pt-1">
        <div className="mb-2 text-sm">
          <span className="font-medium mr-2">{getUserName()}</span> {post.description}
        </div>
      </div>
      <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">View all 14 comments</div>
      <div className="mb-2">
        <div className="mb-2 text-sm">
          <span className="font-medium mr-2">razzle_dazzle</span> Dude! How cool! I went to New Zealand last summer and had a blast taking the tour! So much to see! Make sure you bring a good camera when you go!
        </div>
      </div>
    </div>
  </div>
  )
}

export default PostLayout