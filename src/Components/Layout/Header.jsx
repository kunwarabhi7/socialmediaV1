import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const navBar = [
    {
      name: 'Home',
      path:'/'
    },
    {
      name: 'Add Post',
      path:'/addpost'
    },
    {
      name: 'Shares',
      path:'/shares'
    },
    {
      name: 'Profile',
      path:'/profile'
    },
  ]

  return (
    <div>
      <div className='flex space-x-10 justify-end p-2 mr-4 items-center sm:flex-col bg-black'>
        {navBar.map((nav,index)=>{
          return <Link key={index} className='hover:bg-black text-white hover:text-gray-200 p-2 font-medium text-2xl ' to={nav.path}>{nav.name}</Link>
        })}
      </div>
    </div>
  )
}

export default Header
