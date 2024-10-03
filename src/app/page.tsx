import Image from "next/image";
import round from "../../image/purple-round.gif"

export default function Home() {
  return (
  <div className="sm:flex md:flex-row justify-between bg-black py-6
  w-[99.9%] h-screen bg-gradient-to-r from-blue-100 to-purple-100">
     <div>
      <Image className="mr-10"
      src = {round}
      alt= "machine"
      height={700}
      width={700}/>
    </div>
    
 
<div  className=  "hover:text-2x sm:mr-2 md:mr-56 lg:mr-56 sm:my-2 md:my-36 lg:my-36 w-72 sm:pl-2">
     
      <p className="text-center sm:text-xl md:text-2xl lg:text-2xl sm:hover:text-2xl md:hover:text-3xl  lg:hover:text-3xl 

ease-linear h-12 sm:pt-0 md:pt-20 lg:pt-20 pl-10 ">Transforming
      your ideas into 
       immersive  digital Experiences</p>
    </div>
    {/* <div>
      <Image className="mr-20"
      src = {round}
      alt= "machine"
      height={600}
      width={600}/>
    </div> */}
  </div>

  );
}

