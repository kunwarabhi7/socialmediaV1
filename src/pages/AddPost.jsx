import React, { useState } from 'react'
import DefaultLayout from '../Components/Layout/DefaultLayout'
const AddPost = () => {
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

  return (
    <DefaultLayout><div>

<h1 className='text-3xl font-bold text-red-700 text-center pt-4'>Add New Post</h1>
<div>
<textarea name="" id="" cols="50" rows="5" className='ml-[40%] mt-4 border border-gray-500 '></textarea>
<input type="file" />
</div>
    </div>
    </DefaultLayout>
  )
}

export default AddPost