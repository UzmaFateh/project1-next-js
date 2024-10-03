import Image from "next/image";
import red from "../../../image/red-round.webp"
import Link from "next/link";

const Navbar = () => {
    return (

        <div
            className="flex flex-col justify-between  md:flex-row lg:flex-row  :my-10 md:my-9 lg:my-0 px-4 border border-blue-200 py-3 bg-white "
            style={{
                boxShadow: " 1px,1px 20px 20px blue)",

            }}>
            <div className="text-center text-5xl ">
                <div className="flex ">
                    <Image className="mr-10"
                        src={red}
                        alt="machine"
                        height={100}
                        width={100} />
                    <h4 className="-ml-12 mt-3">Portfolio</h4>
                </div>

            </div>
            <div>
                <div className="flex flex-col justify-between text-center md:flex-row lg:flex-row p-10 sm:p-20 md:p-0 lg:p-0 ">
                    <button className="p-3  sm:my-1 text-xl bg-white hover:bg-blue-200 rounded-md"><Link href="/">Home</Link></button>
                    <button className="p-3 sm:my-1 text-xl  bg-white hover:bg-blue-200 rounded-md"><Link href="/project">Projects</Link></button>
                    <button className="p-3 sm:my-1 text-xl  bg-white hover:bg-blue-200 rounded-md"><Link href="/about">About</Link></button>
                    <button className="p-3 sm:my-1 text-xl  bg-white hover:bg-blue-200 rounded-md"><Link href="/contact">Contact</Link></button>

                </div>
            </div>
        </div>

    );
}
export default Navbar