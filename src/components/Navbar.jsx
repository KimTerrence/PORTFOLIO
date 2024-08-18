function Navbar(){
    return(
        <header className='w-full font-jura h-14 px-40 flex justify-between items-center fixed bg-white '>
        <p>Kim Terrence</p>
        <nav id='Nav'>
          <ul className='flex items-center justify-center gap-10 font-bold text-1xl'>
            <li><a href="#Home" className='p-3  hover:bg-black hover:text-white hover:rounded-lg hover:duration-500'>Home</a></li>
            <li><a href="#About" className='p-3  hover:bg-black hover:text-white hover:rounded-lg hover:duration-500'>About</a></li>
            <li><a href="#Projects" className='p-3  hover:bg-black hover:text-white hover:rounded-lg hover:duration-500'>Projects</a></li>
            <li><a href="#Contact" className='p-3  hover:bg-black hover:text-white hover:rounded-lg hover:duration-500'>Contact</a></li>
          </ul>
        </nav>
      </header>
    )
}
export default Navbar