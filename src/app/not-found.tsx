
// import Link from "next/link";


export default function NotFound(){
    return (
        <div className="flex bg-red-500 text-white justify-center px-5 items-center
         h-screen"> 
            <div className="spsce-y-2">
            <h1 className="text-6xl text-center">My Fantastic not found page</h1>
            <p className="text-justify text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis at in, eius consequatur iusto ut fugiat dicta eveniet. Sequi quas debitis ullam fugiat iusto, aspernatur sed maiores temporibus eos quasi!
            </p>
            {/* <button className="w-full
            "><Link href={"/"}
            className=" bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 cursor-pointer text-center"
            >Go Home Page</Link></button> */}


</div>

        </div>
    )
}