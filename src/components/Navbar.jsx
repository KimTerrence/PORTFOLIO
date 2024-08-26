import { useState } from "react";
import React from "react";
import { navbarMenu } from "../mockData/data";
import { IoIosMenu } from "react-icons/io";
import ResponsiveNavbar from "./ResponsiveNavbar.jsx";
import { IoIosClose } from "react-icons/io";



const Navbar = () => {
  const [open, setOpen] = useState(false)
  return(
    <nav className="font-jura flex items-center justify-between p-10 md:px-40 h-16 w-full fixed bg-zinc-100 text-black z-20 ">
      <div>
        <p className="font-bold">Kim Terrence</p>
      </div>
      <div className="hidden sm:block">
        <ul className="flex gap-5">
          {navbarMenu.map((item) => {
            return <li key={item.id}> 
                      <a href={item.link} className="px-5 py-3 rounded-xl hover:text-blue-600 hover:underline decoration-blue-600 ">{item.title}</a>
                    </li>
          })}
        </ul>
      </div>

{/*------mobile humberger menu-----*/}
    <div className="sm:hidden cursor-pointer" onClick={() => setOpen(!open)}>
     {open ? <IoIosClose size={35} /> : <IoIosMenu size={30}/>  }
    </div>
    <ResponsiveNavbar open={open}/>
    </nav>
  )
}

export default Navbar
