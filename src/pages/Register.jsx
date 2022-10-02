import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {  doc, setDoc } from 'firebase/firestore';
import { auth } from '../utils/firebase';
import { userRef } from '../utils/firebase';
import { toast } from 'react-toastify';
import { useSelector,useDispatch } from 'react-redux';
import Loader from '../Components/Loader';

const Register = () => {
  const {loading} =  useSelector(store=>store)
  const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')


    const formSubmitHandler = async(e) => {
        dispatch({type:'showLoading'})

        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
         const userData = {
            email : user.email,
            profilePicUrl : '/',
            bio: 'Hey I m creating this app'
         }
          setDoc(doc(userRef,user.uid),userData)
          console.log(user)
          console.log(userData)
          dispatch({type:'hideLoading'});
          toast.success('🦄 Wow SignUP successful!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        })
        .catch((error) => {
            dispatch({type:'showLoading'});
            toast.error(`🦄 error ${error.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          console.log(error.message)
          dispatch({type:'hideLoading'})

        });
        
    }

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        {loading && <Loader />}
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <form onSubmit={formSubmitHandler}>
                    
                    
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
