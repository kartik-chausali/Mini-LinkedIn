import { useRef } from "react"
import toast from "react-hot-toast";

export default function StartPost(){

    const inputRef = useRef(null);

    function handlePost(){

        if(inputRef.current?.value.trim() == ""){
            toast.error("Post can't be empty");
            return;
        }



        
    }
    return <div className="flex flex-col p-2 border border-gray-400 rounded-md w-1/2 items-center bg-white">

        <label  className="block mb-2 text-sm font-semibold text-black pt-4">Write a Post</label>
        <input  ref={inputRef} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start a Post" required />
        <button type="button"  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 m-2 w-1/2 " onClick={handlePost}>Post</button>
    </div>
}