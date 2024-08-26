import { motion, AnimatePresence } from "framer-motion"
import { navbarMenu } from "../mockData/data";

const ResponsiveNavbar = ({open}) => {
    return ( 
        <AnimatePresence mode="wait">
            {
            open && (
            <motion.div
                initial={{opacity : 0, y : - 100}}
                animate={{opacity : 1, y : 0}}
                exit={{opacity : 0, y : 0}}
                className="fixed top-20 left-0 w-full h-screen z-10 bg-black/50 p-5"
            >
                <div className=" text-xl flex items-center  justify-center p-5 h-1/3 w-full bg-zinc-100 rounded-xl text-black border-2">
                    <ul className="text-center flex flex-col gap-5 ">
                    {navbarMenu.map((item) => {
                        return <li key={item.id}> 
                                     <a href={item.link} className="px-5 py-3 rounded-xl hover:text-blue-600 hover:">{item.title}</a>
                                </li>
          })}
                    </ul>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
    )
}
export default ResponsiveNavbar