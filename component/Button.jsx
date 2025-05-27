'use client';

import React from 'react';

export const Button = () => {
  return (
    <button
      className="group relative w-24 h-9 font-bold text-[#ddebf0] bg-transparent border-none outline-none text-sm cursor-pointer"
    >
      PLAY

      {/* Decorative Clip Shape */}
      <div
        className="absolute top-0 w-full h-full border-[5px] border-double border-[#2761c3] shadow-[inset_0px_0px_15px_#195480] transition-all duration-200"
        style={{
          clipPath:
            'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
        }}
      >
        {/* Corners */}
        <div className="absolute w-10 h-16 bg-[#2761c3] shadow-[inset_1px_1px_8px_#2781c3] rotate-45 transition-transform duration-200 group-hover:scale-[1.25]" style={{ top: '-1.96em', left: '-3em' }} />
        <div className="absolute  h-16 bg-[#2761c3] shadow-[inset_1px_1px_8px_#2781c3] rotate-45 transition-transform duration-200 group-hover:scale-[1.25]" style={{ top: '-1.98em', left: '91%' }} />
        <div className="absolute w-16 h-16 bg-[#2761c3] shadow-[inset_1px_1px_8px_#2781c3] rotate-45 transition-transform duration-200 group-hover:scale-[1.25]" style={{ top: '2.1em', left: '-2.15em' }} />
        <div className="absolute w-16 h-16 bg-[#2761c3] shadow-[inset_1px_1px_8px_#2781c3] rotate-45 transition-transform duration-200 group-hover:scale-[1.25]" style={{ top: '45%', left: '88%' }} />
      </div>

      {/* Arrows */}
      <span
        className="absolute top-[35%] left-[-13.5%] w-[11%] h-[30%] bg-[#2761c3] transition-all duration-200 group-hover:bg-[#27c39f] animate-leftArrow"
        style={{
          clipPath: 'polygon(100% 0, 100% 100%, 0 50%)',
          animation: 'leftArrowAnim 0.6s ease-in-out both infinite alternate',
        }}
      />
      <span
        className="absolute top-[35%] left-[102%] w-[11%] h-[30%] bg-[#2761c3] transition-all duration-200 group-hover:bg-[#27c39f] animate-rightArrow"
        style={{
          clipPath: 'polygon(100% 49%, 0 0, 0 100%)',
          animation: 'rightArrowAnim 0.6s ease-in-out both infinite alternate',
        }}
      />

      {/* Green Glow Animation */}
      <style jsx>{`
        .group:hover > div {
          animation: greenGlow 0.2s ease-in-out 0.55s both;
          border-color: #27c39f;
          box-shadow: inset 0px 0px 32px #27c39f;
        }

        @keyframes greenGlow {
          to {
            box-shadow: inset 0px 0px 32px #27c39f;
          }
        }

        @keyframes leftArrowAnim {
          from {
            transform: translateX(0px);
          }
          to {
            transform: translateX(10px);
          }
        }

        @keyframes rightArrowAnim {
          from {
            transform: translateX(0px);
          }
          to {
            transform: translateX(-10px);
          }
        }
      `}</style>
    </button>
  );
};


