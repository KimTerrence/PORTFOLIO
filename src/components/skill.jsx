import { RxTriangleRight } from "react-icons/rx";

function skill(){
    return(
        <div className="w-full flex flex-col  items-center px-10 xl:px-56 pb-20 gap-5 lg:flex-row bg-zinc-100 text-black">
            <div className="w-full flex flex-col justify-between ">
                <p className="text-3xl py-10">Skills & Achievements</p>
                <div className="w-full flex flex-col  gap-5 ">
                    <p className="lg:text-xl">Here are some technologies I have been working with:</p>
                    <div className="w-full flex gap-20 lg:text-xl justify-center lg:justify-start">
                        <div className="flex justify-start flex-col items-start">
                            <p className="flex justify-center items-center"><RxTriangleRight /> Javascript</p>
                            <p className="flex justify-center items-center"><RxTriangleRight /> Html Css</p>
                            <p className="flex justify-center items-center"><RxTriangleRight /> Java</p>
                            <p className="flex justify-center items-center"><RxTriangleRight /> Python</p>
                        </div>
                        <div className="flex justify-start flex-col items-start">
                            <p className="flex justify-center items-center"><RxTriangleRight /> Mysql</p>
                            <p className="flex justify-center items-center"><RxTriangleRight /> Linux</p>
                            <p className="flex justify-center items-center"><RxTriangleRight /> React.js</p>
                            <p className="flex justify-center items-center"><RxTriangleRight /> Tailwind CSS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full items-center justify-center lg:self-end ">
                <img src={"/assets/certifications/IntroHtml.png"} alt="" className="w-96 h-64 bg-slate-300 rounded-xl"/>
            </div>
        </div>
    )
}
export default skill