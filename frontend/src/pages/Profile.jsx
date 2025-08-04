/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Post from "../components/Post";
import Avatar from "react-avatar";
import { Skeleton } from "../components/animation/Skeleton";
import toast from "react-hot-toast";

export default function Profile(){
    const location = useLocation();
    const {u_id} = location.state;

    const [profile , setProfile] = useState({
        name:"",
        email:"",
        password:"",
        bio:"",
        posts:[]
    })
    const [loading , setLoading] = useState(true);
     const inputRef = useRef(null);
     const buttonTextRef = useRef(null)

     useEffect(() => {
        console.log('inside effect')
    async function fetchProfile() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          'http://localhost:3000/users/me',
          { u_id: u_id },
          {
            headers: {
              Authorization: token
            }
          }
        );
        console.log("her",response.data);
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
       toast.error("Failed to fetch profile")
      }
    }

    if (u_id) fetchProfile();
  }, []);

  if(loading){
    return <Skeleton/>
  }
  
     return <div className="w-full text-black">
       <div className="flex justify-center">
            <div className="flex flex-col">
                <div className="flex justify-center items-center p-3 gap-2">
                    <Avatar name={profile?.name} round={true} size="60"/>
                    <div className="flex flex-col justify-center items-start">
                    <h2 className="ml-2 font-bold text-2xl">{profile?.name}</h2>
                    <span className="text-gray-400">Your Bio: {profile.bio}</span>
                    </div>
                </div>
                <div className="mb-6 mt-5">
                    <label  className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500 ">Your registered email</label>
                    <input type="text" id="success" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-green-500" value={profile.email}/>
                </div>
                <div className="mb-6 ">
                    <label  className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500 ">Your password</label>
                    <div className="flex">
                    <input ref={inputRef} type="password" id="success" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-green-500" value={profile.password}/>
                    <button ref={buttonTextRef} className="ml-2 h-7 mt-2 bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer " onClick={()=>{
                            
                           if(inputRef.current?.type == 'text'){
                           inputRef.current.type = 'password'; 
                           if(buttonTextRef.current){
                            buttonTextRef.current.innerText = buttonTextRef.current.innerText == 'Show' ? "Hide" : "Show"
                           }
                           
                        }
                    else {
    
                            if(inputRef.current){
                                inputRef.current.type = 'text';
                            }
                            
                            if(buttonTextRef.current){
                                buttonTextRef.current.innerText = buttonTextRef.current.innerText == 'Show' ? "Hide" : "Show"
                            }
                            
                        }
                    }}>Show</button>
                    </div>
                </div>
            </div>
           </div>
           <div className="text-lg font-semibold ml-5 flex justify-center">
            Your Posts
           </div>
            <div className="flex flex-col items-center justify-center gap-2">
                {profile.posts.map(post => <Post authorName={profile.name} text={post.text} date={post.created_at}/>)}
            </div>
        </div> 
}