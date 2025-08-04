import NavBar from "../components/NavBar";
import StartPost from "../components/StartPost";

export default function Feed(){

    return <>
    <NavBar/>
    <div className="flex flex-col justify-center items-center">
        <StartPost/>
    </div>
    </>
}