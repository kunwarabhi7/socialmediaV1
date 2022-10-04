import React, { useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytes  } from "firebase/storage";
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../utils/firebase';
import DefaultLayout from '../Components/Layout/DefaultLayout'
const AddPost = () => {

  const addPost = () => {
    const storage = getStorage();
    const storageRef = ref(storage, `/posts/${image.name}`);
    uploadBytes(storageRef, image).then((snapshot) => {
      getDownloadURL(ref(storage, `/posts/${image.name}`))
      .then((url)=>{
    addDoc(collection(db,'posts'),{
      description,
      imageUrl : url,
      likes:[],
      Comments: [],
      user:JSON.parse(localStorage.getItem('userAbhishek'))
    })  
    })

    });
  }


    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    const onImageChange = (e) => { 
      setImage(e.target.files[0])
    }

  return (
    <DefaultLayout><div>

<h1 className='text-3xl font-bold text-red-700 text-center pt-4'>Add New Post</h1>
<div className='flex flex-col'>
<textarea value={description} onChange={e=>setDescription(e.target.value)} cols="5" rows="5" className='ml-[40%] w-96 h-40 mt-4 border border-gray-500  '></textarea>
<input className='ml-[45%] mt-4' type="file" onChange={ e=>onImageChange(e)} />

{image && (
  <img src={URL.createObjectURL(image)} alt='image' className='w-80 h-80 mt-4 ml-[45%]' />
)


}

</div>
    </div>

    {description && image && (
      <button className='bg-black text-white mt-8 w-30 h-10 ml-[55%] hover:bg-red-500 p-2' onClick={addPost} > Add Post</button>

    )}
    </DefaultLayout>
  )
}

export default AddPost