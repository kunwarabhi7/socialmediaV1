import React from 'react'
 import { Link, useNavigate } from 'react-router-dom'
 import { getAuth, signOut } from "firebase/auth";


const Header = () => {
  const navigate= useNavigate()

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

  const signOutUser = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      localStorage.removeItem('userAbhishek')
navigate('/login')    }).catch((error) => {
 alert(error.message);
    });
    
  }

  return (
    <div>
    
      <div className='flex space-x-10 justify-end p-2 mr-4 items-center sm:flex-col  bg-black'>
        {navBar.map((nav,index)=>{
          return <Link key={index} className='hover:bg-black text-white hover:text-gray-200 p-2 font-medium text-2xl ' to={nav.path}>{nav.name}</Link>
        })}
        <h1 onClick={signOutUser} className='hover:bg-black cursor-pointer text-white hover:text-gray-200 p-1 font-medium text-2xl' >LogOut</h1>
      </div>
    </div>
  )
}

export default Header
