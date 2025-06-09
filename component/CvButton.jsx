'use client';

import { FiDownload } from "react-icons/fi";

export default function CvButton() {
  return (
    <a
      href="https://drive.google.com/drive/u/0/folders/1ydYbJH22DHoyp1iR-HXOm6LL-pmCa3so"
      target="_blank"
      rel="noopener noreferrer"
    >
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
        <span className="flex gap-2 items-center">
          Download CV <FiDownload className="text-lg" />
        </span>
      </button>
    </a>
  );
}
