'use client';

import { FiDownload } from "react-icons/fi";

export default function CvButton() {
  return (
    <button
      className="
        px-3 py-2
        text-[12px] 
        uppercase 
        tracking-[2.5px] 
        font-lg
        font-bold
        pointer-cursor
        text-black 
        bg-white 
        rounded-full 
        shadow-[0px_8px_15px_rgba(0,0,0,0.1)] 
        transition 
        duration-300 
        ease-in-out 
        hover:bg-[#23c483] 
        hover:shadow-[0px_15px_20px_rgba(46,229,157,0.4)] 
        hover:text-white 
        hover:-translate-y-[7px] 
        active:translate-y-[-1px] 
        focus:outline-none
      "
    >
   <span className="flex gap-2 ">  Download CV <FiDownload className="mt-0.5 text-lg"/></span>
     
    </button>
  );
}
