import React,{useState,useEffect} from 'react'
import DefaultLayout from '../Components/Layout/DefaultLayout'
import { getDocs,collection } from 'firebase/firestore'
import { db } from '../utils/firebase'
import PostLayout from '../Components/Layout/PostLayout'


const Home = () => {
  const [posts , setPosts] = useState([])
  
  const getPost = async() => { 
    const temp = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => { 
 temp.push({
  ...doc.data() , id:doc.id
 })
 setPosts(temp)
});
  }

  useEffect(()=>{
getPost()
  },[])

    return (
      <DefaultLayout>
    <div className='grid grid-cols-4 md:grid-cols-1'>
        
{posts.map((post)=>{
 return  <PostLayout post={post} />
})}
    </div>
     </DefaultLayout>
  )
}

export default Home
