import Avatar from "react-avatar";

export default function Post({authorName , text , date}){
     return <div class=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
    <div class="w-full flex justify-between p-3">
      <div class="flex flex-row items-center gap-2">
        <div class="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
          <Avatar name={authorName.charAt(0)} size='40' round={true} color='#3b9ef5'/>
        </div>
            <div className="flex flex-col items-start justify-center">
            <span class="pt-1 ml-2 font-bold text-black">{authorName}</span>
            <span className="text-gray-400 text-xs">{date}</span>
            </div>
      </div>
      <span class="px-2 hover:bg-gray-300 cursor-pointer rounded"><i class="fas fa-ellipsis-h pt-2 text-lg"></i></span>
    </div>

    <div class="px-3 pb-2">
      <div class="pt-2">
        <i class="far fa-heart cursor-pointer"></i>
        <span class=" text-gray-400 font-medium">{text}</span>
      </div>
    </div>
  </div>
}