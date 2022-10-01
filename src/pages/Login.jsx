import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth, userRef } from '../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
    const signInUser = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     const user = userCredential.user;
     getDoc(doc(userRef,user.uid)).then((user)=>{
        console.log(user.data());
     })
     console.log(user)
       })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
console.log(errorMessage)
});

    }



  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
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
                            >Create Account</button>
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
                        Already have an account? 
                        <Link className="no-underline border-b border-blue text-blue" to="/register">
                            Log in
                        </Link>.
                    </div>
                </div>
            </div>
  )
}

export default Login
