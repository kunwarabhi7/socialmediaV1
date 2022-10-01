import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc } from 'firebase/firestore';
import { auth } from '../utils/firebase';
import { userRef } from '../utils/firebase';


const Register = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')


    const formSubmitHandler = async(e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
         const userData = {
            email : user.email,
            displayName : user.displayName,
            profilePicUrl : '/',
            bio: 'Hey I m creating this app'
         }
          addDoc(userRef,userData)
          console.log(user)
          console.log(userData)
        })
        .catch((error) => {
          console.log(error.message)
        });
        
    }

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <form onSubmit={formSubmitHandler}>
                    
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            value={displayName}
                            onChange={e => setDisplayName(e.target.value)}
                            placeholder="Display Name" />

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email" />
    
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            value={password}
                            onChange={e=>{setPassword(e.target.value)}}
                            placeholder="Password" />

                            <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={e=>setconfirmPassword(e.target.value)} />
                        <button onClick={formSubmitHandler}
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
                        <Link className="no-underline border-b border-blue text-blue" to="/login/">
                            Log in
                        </Link>.
                    </div>
                </div>
            </div>
  )
}

export default Register
