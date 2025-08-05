/* eslint-disable no-unused-vars */
import { useRef, useState } from "react"
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "./animation/Loader";
export default function StartPost({authorName , setPosts }){

    const inputRef = useRef(null);
    const [loading , setLoading] = useState(false);

    async function handlePost(){

        if(inputRef.current?.value.trim() == ""){
            toast.error("Post can't be empty");
            return;
        }
        setLoading(true);
        try{    
            
            const token = localStorage.getItem('token');
            const payload = {
                authorName,
                text: inputRef.current.value
            }
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/posts/submit` , payload , {
                headers:{
                    Authorization: token
                }
            });

            toast.success("Posted Successfully");
            inputRef.current.value = "";
             const formattedDate = new Date(response.data.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    });
            const newItem = {
                authorName: response.data.author_name,
                text: response.data.text,
                createdAt: formattedDate
            }
            setPosts(prev => [ newItem , ...prev])
            setLoading(false);

        }catch(err){
            toast.error(`${err.response.data.msg}`);
            setLoading(false);
        }



    }
    return <div className="flex flex-col p-2 border border-gray-400 rounded-md w-1/2 items-center bg-white">

        <label  className="block mb-2 text-sm font-semibold text-black pt-4">Write a Post</label>
        <input  ref={inputRef} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start a Post" required />
        <button type="button"  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 m-2 w-1/2 " onClick={handlePost}>{loading ? <Loader/> : "Post"}</button>
    </div>
}