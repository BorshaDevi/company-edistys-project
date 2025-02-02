import { IoIosArrowUp } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { BsXLg } from "react-icons/bs";
const Navbar=()=>{
  const [openBar ,setOpenBar]=useState(false)
  console.log(openBar)
    return(
      
     <div className="bg-blue-300 w-full   text-xl font-bold text-white h-16">
       <div className="flex justify-between px-8 lg:px-0  lg:py-1 py-4 lg:justify-around  items-center ">
        <h1 className="flex">AkTECH</h1>
        <div className=" gap-3 items-center hover:cursor-pointer hidden lg:flex ">
        <div className="relative  p-2">
        <p className="flex">Solutions <IoIosArrowUp className="mt-1" /></p>
         <ul className=" bg-white absolute text-black  -mt-3 p-4  w-28 h-20 opacity-0 hover:opacity-100  ">
         <li className="" >AnyCaaS</li>
         <li>AnyBaaS</li>
         <li>AnyPaaS</li>
         </ul>
          </div>
          <p>Services</p>
          <p>About Us</p> 
          <button className="border rounded-r-lg rounded-l-lg p-3 flex"> En <IoIosArrowUp className="mt-1" /></button>
        </div>
        <p className="border border-white p-3 hidden lg:flex ">Contact Us</p>
        <div>
         {
            openBar ? <BsXLg  className="ml-28" onClick={()=>setOpenBar(false)}/>   : <FaBars onClick={()=>setOpenBar(true)} className="lg:hidden flex"/>
          }
          {
            openBar?
            <div className=" bg-sky-500  w-full  mt-5 items-center hover:cursor-pointer  ">
            <div className="relative  p-2">
            <p className="flex">Solutions <IoIosArrowUp className="mt-1" /></p>
             <ul className=" bg-white absolute text-black  -mt-3 p-4  w-28 h-20 opacity-0 hover:opacity-100  ">
             <li className="" >AnyCaaS</li>
             <li>AnyBaaS</li>
             <li>AnyPaaS</li>
             </ul>
              </div>
              <p>Services</p>
              <p>About Us</p> 
              <button className="border rounded-r-lg rounded-l-lg p-3 flex"> En <IoIosArrowUp className="mt-1" /></button>
            </div> : ''
          }
          
        </div>
       </div>
     </div>
      
    )
}
export default Navbar;