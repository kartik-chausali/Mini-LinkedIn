/* eslint-disable no-unused-vars */

import Avatar from 'react-avatar';
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar({name , u_id}){

    const navigate = useNavigate();
   
    function handleLogout(){
        localStorage.removeItem('token');
        navigate('/signin');
    }

    function handleClick(){
        navigate('/profile', {state: {u_id}} );
    }
    return <nav className="bg-white border-gray-200">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg width="32" height="32" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="blue" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">LinkedIn</span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
           <Avatar name={name.charAt(0)} size='40' round={true} color='#3b9ef5'/>
            <div className='flex flex-col items-start justify-center'>
                <h3 className='text-black'>Hey, {name} 👋</h3>
                <button className="text-sm  text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onClick={handleClick}>View Profile</button>
            </div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogout}>
            <svg width="15" height="15" viewBox="0 0 15 15" className='mr-1' fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            Logout
            </button>
        </div>
    </div>
</nav>
}