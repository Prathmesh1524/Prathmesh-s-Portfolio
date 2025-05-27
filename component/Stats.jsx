"use client"

import CountUp, { countUp } from "react-countup"


const stats = [
    {
        num: 3,
        text: "rd Year of Graduation",
    },
    {
        num: 8,
        text: "Technologies Mastered",
    }, {
        num: 5,
        text: "Project Completed",
    }, {
        num: 20,
        text: "code commits",
    },

]
const Stats = () => {
    return (
        <section className="pb-8 pt-8 xl:pt-0 xl:pb-0">
            <div className="container mx-auto pt-5">
               <div className="flex flex-wrap  max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return <div className="flex-1 flex gap-4  items-center  justify-center xl:justify-center" key={index}>
                            <CountUp 
                            end={item.num}
                             duration={5}
                             delay={2}
                             className="text-xl xl:text-5xl font-extrabold" />
                            <p className={`${item.text.length<60 ? "max-w-[100px]": "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats
Stats