

function Me(){
    return(
         <section id="About" className="w-full flex flex-col px-10 xl:px-56 font-jura pt-10">
            <p className="text-4xl text-left py-10 font-extrabold">Know Me!</p> 
            <div className="flex flex-col items-center lg:flex-row gap-20">
                <img src={"/assets/prof.jpg"} alt="KimQuines" className="w-80 h-80 bg-black rounded-lg shadow-lg shadow-gray-400" />
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl">I'm <span className="font-bold">Kim Terrence Quines</span></h2>
                    <p className=" lg:text-xl text-justify ">
                    An aspiring Full-Stack Developer with a passion for creating innovative and efficient digital solutions. Currently, 
                    I am studying at Cagayan State University, where I am honing my skills in web application development and mobile development.
                    My education and hands-on projects have equipped me with a solid foundation in both front-end and back-end technologies.
                    </p>
                    <div className="flex gap-5">
                        <button  className="border-2 border-solid border-black px-2 py-1 font-semibold rounded-lg hover:bg-neutral-800 hover:text-white duration-500">
                            Contact
                        </button>
                        <button className="border-2 border-solid border-black px-2 py-1 font-semibold rounded-lg bg-black text-white hover:text-black hover:bg-neutral-200 duration-500">
                            View CV
                        </button>

                    </div>
                </div>
            </div>
      </section>
    )
}
export default Me