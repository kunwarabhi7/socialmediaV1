import React, { useState } from 'react'
import DefaultLayout from '../Components/Layout/DefaultLayout'
const AddPost = () => {
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    const onImageChange = (e) => { 
      setImage(e.target.files[0])
    }

  return (
    <DefaultLayout><div>

<h1 className='text-3xl font-bold text-red-700 text-center pt-4'>Add New Post</h1>
<div className='flex flex-col'>
<textarea name="" id="" cols="5" rows="5" className='ml-[40%] w-96 h-40 mt-4 border border-gray-500  '></textarea>
<input className='ml-[45%] mt-4' type="file" onChange={e=>onImageChange(e)} />

{image && (
  <img src={URL.createObjectURL(image)} alt='image' className='w-80 h-80 mt-4 ml-[45%]' />
)


}

</div>
    </div>
    </DefaultLayout>
  )
}

export default AddPost