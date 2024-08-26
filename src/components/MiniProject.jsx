import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";


const MiniProject = (props) => {
    return(
        <>
            <div className="relative w-full h-60 md:h-80 bg-slate-300 rounded-xl">
            <   div className="absolute flex flex-col items-center justify-end top-0 text-white w-full h-full p-5 z-10">
                    <p className="font-bold">{props.title}</p>
                    <p >{props.subtitle}</p>
                    <div className="flex gap-5 absolute top-5 right-5 items-center">
                        <a href={props.github}><FaGithub className="h-6 w-6"/></a>
                        <a href={props.link}><FaExternalLinkAlt className="h-5 w-5"/></a>
                    </div>
                </div>
                <img src={props.url} alt="" className="h-full w-full opacity-80 rounded-xl"/>
            </div>
        </>
    )
}
export default MiniProject