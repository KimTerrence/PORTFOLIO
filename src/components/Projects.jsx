import MiniProject from "./MiniProject"

function Proj(){
    return(
        <div id='Projects' className="w-full flex px-10 xl:px-56 xl:py-10 xl:pt-10 flex-col font-jura bg-zinc-100 text-black" >
            <p className="text-4xl font-bold py-10">My Recent Projects</p>
            <div className="flex flex-col gap-5">
                <div className="h-60 w-100 md:h-big w-100 bg-slate-300 rounded-xl">
                    
                </div>
                <div className="flex flex-col gap-5"> 
                   <div className="flex flex-col md:flex-row justify-between gap-5">
                     
                        <MiniProject 
                        url="/assets/error404.png"
                        title="Error404"
                        subtitle="Project Comming Soon"
                        github=""
                        link=""
                        />

                        <MiniProject 
                        url="/assets/error404.png"
                        title="Error404"
                        subtitle="Project Comming Soon"
                        github=""
                        link=""
                        />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-5">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Proj