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
      <div className='flex space-x-10 justify-end p-2'>
        {navBar.map((nav)=>{
          return <Link to={nav.path}>{nav.name}</Link>
        })}
      </div>
    </div>
  )
}

export default Header
