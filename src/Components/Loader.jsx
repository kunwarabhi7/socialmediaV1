import React from 'react'

const Loader = () => {
  return (
    <div className='absolute top-[40%] left-[50%]'>
      <div className='h-40 w-40 border-red-400 border-8 rounded-full  border-t-red-200 animate-spin '></div>
    </div>
  )
}

export default Loader
