import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth, userRef } from '../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Loader from '../Components/Loader';
import { toast } from 'react-toastify';
import { useSelector,useDispatch } from 'react-redux';

const Login = () => {
    const {loading} =  useSelector(store=>store)
    const dispatch = useDispatch()
    
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
   

const signInUser = (e) => {
    dispatch({type:'showLoading'})
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     const user = userCredential.user;
     getDoc(doc(userRef,user.uid)).then((user)=>{
        localStorage.setItem(
            "userAbhishek",
            JSON.stringify({ ...user.data(), id: user.id })
          );
         console.log(user)
     })
     toast.success('🦄 Wow login successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        
        dispatch({type:'hideLoading'})
    })
    .catch((error) => {
        toast.error(`🦄 error ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        
    dispatch({type:'hideLoading'})
});

    }



  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
    {loading &&  <Loader />}
 
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Login</h1>
                    <form onSubmit={signInUser}>

    
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" 
                            value={email}
                            onChange={e=>{setEmail(e.target.value)}}/>
    
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" 
                            value={password}
                            onChange={e=>{setPassword(e.target.value)}}/>
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green bg-black text-white hover:bg-green-dark focus:outline-none my-1"
                            >Log In </button>
                            </form>
    
                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the 
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and 
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
    
                    <div className="text-grey-dark mt-6">
                        New Here ?
                        <Link className="no-underline border-b border-blue text-blue" to="/register">
                            SIgn UP
                        </Link>.
                    </div>
                </div>
            </div>
  )
}

export default Login
