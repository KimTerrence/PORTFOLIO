function Home(){
    return(
        <> 
        <div className="h-screen w-full" id="Home">
            <div className="h-full w-full bg-zinc-100 text-gray-300 flex flex-col justify-center items-center font-oswald font-bold" >
                <p className="text-6xl md:text-8xl lg:text-10xl leading-none ">KIM TERRENCE</p>
                <p className="text-6xl md:text-8xl lg:text-10xl leading-none text-blue-600">KIM TERRENCE</p>
                <p className="text-6xl md:text-8xl lg:text-10xl leading-none">KIM TERRENCE</p>
            </div>
            <div className="h-full w-full flex items-center justify-center absolute top-20">
                <img src="/assets/giyu.png" alt="" className="h-96 md:h-big "/>
            </div>
            <div className="h-full w-full flex items-center justify-center absolute top-40 overflow-x-hidden" >
        
                    <img src="/assets/wave.png" alt="" className="absolute h-60 md:h-96 lg:h-big"/>
                    <img src="/assets/wave.png" alt="" className="h-60  md:h-96 lg:h-big"/>
                    <img src="/assets/wave.png" alt="" className="h-60 md:h-96 lg:h-big"/>
        
                
            </div>

        </div>







        {/*  <div className="h-screen  ">
        <div id="Home" className='w-full h-full flex flex-col sm:text-left align-center justify-center text-white/90 font-jura sm:px-5 lg:px-56 bg-gray-950'>
            <h1 className='text-6xl sm:text-8xl z-10'>Hi! <span className="font-bold">Kim</span> here.</h1>
            <p className="text-2xl sm:text-4xl ">Your FullStack Web Developer</p>
            <p>from Cagayan State University</p>
        </div>
        <div className="absolute h-full w-full flex justify-end items-center top-0 left-0 px-56 z-0 opacity-60">
            <img src={"/assets/intro.gif"} alt="" className="h-1/2 border-2 border-violet-600/50 rounded-xl z-0"/>
        </div>
    </div>*/}
           
        </>
    )
}

export default Home