import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";


function Contact(){
    return(
        <div  id='Contact' className="w-full h-screen flex px-10 xl:px-56 justify-center flex-col md:flex-row items-center font-jura gap-5">
                <div className="w-full flex flex-col gap-5">
                    <p className="text-4xl text-center md:text-left md:text-6xl">Lets Colaborate</p>
                    <p className="md:text-xl">
                    "It is better to collaborate than having a competition!
                    
                    Let's brainstorm ideas and make it into a reality"
                    </p>
                    <div className="flex items-center gap-10">
                        <a href="https://github.com/KimTerrence"><FaGithub className="h-10 w-10" /></a>
                        <a href="https://web.facebook.com/profile.php?id=100085099320590"><FaFacebook className="h-10 w-10"/></a>
                        <a href=""><IoMail className="h-12 w-12"/></a>
                    </div>
                </div>
   
                <form action="" className=" h-96 w-full bg-zinc-50   flex flex-col justify-center items-center p-10 rounded-xl gap-5 shadow-lg shadow-gray-400">
                    <input type="text" placeholder="Name : " className="w-full p-2 rounded-lg" />
                    <input type="text" placeholder="Email : "  className="w-full p-2 rounded-lg"/>
                    <textarea name="" id="" placeholder="Subject : "  className="w-full p-2 rounded-lg h-40">

                    </textarea>
                    <button className="py-1 px-5 border-2  shadow-sm p-5 shadow-gray-400 bg-white rounded-xl font-semibold">Send</button>
                </form>
        </div>
    )
}
export default Contact  