import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import StartPost from "../components/StartPost";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Post from "../components/Post";
import { Skeleton } from "../components/animation/Skeleton";
export default function Feed(){

     const location = useLocation();
    const {name , u_id} = location.state;

    const [posts , setPosts] = useState([{
        authorName:"",
        text:"",
        createdAt:""
    }]);
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        (async()=>{
            const token = localStorage.getItem('token')
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/allPosts`, {
                headers: {
                    Authorization: token
                }
            });
            const trimmedPosts = response.data.map(post => {
                const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    });

                return { 
                    authorName: post.author_name,
                    text: post.text,
                    createdAt: formattedDate
            }
            });
            setPosts(trimmedPosts);
            setLoading(false);
        })();
    }, [])

    // console.log("posts", posts)
    if(loading){
        return  <Skeleton/>
    }
    return <>
    <NavBar name={name} u_id={u_id}/>
    <div className="flex flex-col justify-center items-center gap-2">
        <StartPost authorName={name} setPosts={setPosts} />
        {posts.map(post => {
            return <Post authorName={post.authorName} text={post.text} date={post.createdAt}/>
        })}
    </div>
    
    
   

    </>
}