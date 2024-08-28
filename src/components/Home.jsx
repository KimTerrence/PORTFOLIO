import { animate, easeIn, easeInOut, motion } from "framer-motion";
import { useState } from "react"

const Home = () => {
    
    const [text, changeText] = useState(false); 

        var name = "KIM TERRENCE"
        var nameChange = "FULLSTACKDEV"

    return(
        <> 
        <div className="h-screen w-full" id="Home">
            <div className="h-full w-full bg-zinc-100 text-gray-300 flex flex-col justify-center items-center font-oswald font-bold" >
                <motion.p 
                    animate={{
                        WebkitTextStroke:[ 0, 0,"1px rgb(37 99 235)", "1px rgb(37 99 235)", 0, 0],
                        color: ["rgb(209 213 219)", "rgb(209 213 219)", "rgb(209 213 219)", "rgb(244 244 245)", 0, 0],
                    }}
                    transition={{
                        duration:1,
                        repeat:Infinity,
                    }}
                    className="text-6xl md:text-8xl lg:text-10xl leading-none ">
                        {text ? nameChange : name}
                </motion.p>

                <p className="text-6xl md:text-8xl lg:text-10xl leading-none text-blue-600">
                    {text ? nameChange : name}</p>

                <motion.p 
                     animate={{
                        WebkitTextStroke:[ 0, 0,"1px rgb(37 99 235)", "1px rgb(37 99 235)", 0, 0],
                        color: ["rgb(209 213 219)", "rgb(209 213 219)", "rgb(209 213 219)", "rgb(244 244 245)", 0, 0]
                    }}
                    transition={{
                        duration:1,
                        repeat:Infinity,
                    }}
                    className="text-6xl md:text-8xl lg:text-10xl leading-none">
                    {text ? nameChange : name}
                </motion.p>
            </div>
            <div className="h-full w-full flex items-center justify-center absolute top-5 lg:top-10" >
                <img src="/assets/giyu.png" alt="" className="h-96 md:h-96 lg:h-big" />
            </div>
            <div className="h-full w-full flex items-center justify-center absolute top-20 lg:top-40 overflow-x-hidden md:gap-10 lg:gap-20" >
                <motion.img
                    animate={{
                        y: [0,-10,8,0],
                        x:[0,20,0]
                    }}
                    transition={{
                        duration:5,
                        repeat: Infinity
                    }}
                    src="/assets/wave.png" alt="" className="absolute h-36 md:h-40 lg:h-60 z-10" 
                    onMouseOver={() => changeText(!text)} onMouseOut={() => changeText(!text)}/>
              
                <motion.img
                    animate={{
                        y: [0,20,0],
                        x:[0,0,0]
                    }}
                    transition={{
                        duration:5,
                        repeat: Infinity
                    }}
                    src="/assets/wave.png" alt="" className="h-32  md:h-40 lg:h-60"/>

                <motion.img
                    animate={{
                        y: [0,30,0],
                        x:[0,0,0]
                    }}
                    transition={{
                            duration:5,
                            repeat: Infinity
                    }}
                    src="/assets/wave.png" alt="" className="h-32 md:h-40 lg:h-60"/>              
            </div>
        </div>         
        </>
    )
}

export default Home