import Image from "next/image";
import icon from "../../../image/spinning-icon.gif"
export default function Footer() {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-between  md:flex-row lg:flex-row py-10 px-20  border border-blue-200
   bg-white"  >
          <div className=" text-left   flex flex-col -ml-6 ">
            <h1 className="font-bold">Contact us:</h1>
            <p>Email:uzmaKhan876@gmail.com</p>
            <p>Phone No:01234567</p>
            <p>United Arab Emarite</p>
          </div><br /><br />
          <div className="flex flex-col -mt-14 -ml-6">
            <ul  className="flex">
              <ul> 
              <li className="flex"><h1 className="font-bold mt-12">Follow us:</h1></li>
              <li>Facebook</li>
              <li>instagram</li>
              <li>linkedInn</li>
              </ul>
              <ul>
              <li>  <Image className="pt-14"
                src={icon}
                alt="machine"
                height={100}
                width={100} />
              </li>
              </ul>



            </ul>

          </div>

        </div>

        
      </div>
      <h1 className="sm:pl-0 md:pl-40 lg:pl-80
 p-4 pl-8
 bg-black
 text-white">Copyright 2022 Portfolio All Rights Reserved  |  Created By : Uzma Khan</h1>
    </div>
  );

}

