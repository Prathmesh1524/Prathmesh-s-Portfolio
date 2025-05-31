"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Image from "next/image"
import WorkSliderBtn from "@/component/WorkSliderBtn"

const projects = [
     {
    num: "01",
    catagory: "Frontend",
    title: "CarbonX",
    desc: "A web ",
    stack: [{ name: "Next.js" }, { name: "Tailwind css" }, { name: "AWS" }, { name: "Prisma" }, { name: "Kafka" }],
    img: "/assets/work/web3.png?height=400&width=600",
    live: "",
    gihub: "",
  },
 
  {
    num: "02",
    catagory: "Full-Stack",
    title: "PayApp",
    desc: "Online Payment Application where money transferd from one user to another. Where wallet is created to add money in the bank.",
    stack: [{ name: "Next.js" }, { name: "Tailwind css" }, { name: "sql" }, { name: "aws" }, { name: "Prisma" }],
    img: "/assets/work/paytm.png?height=400&width=600",
    live: "",
    gihub: "",
  },
  {
    num: "03",
    catagory: "Full-Stack",
    title: "Zapier",
    desc: "An Application where zaps and entire workflow will be created",
    stack: [{ name: "Next.js" }, { name: "Tailwind css" }, { name: "AWS" }, { name: "Prisma" }, { name: "Kafka" }],
    img: "/assets/work/zap.png??height=400&width=600",
    live: "",
    gihub: "",
  },
  {
    num: "04",
    catagory: "Full-Stack",
    title: "Web-gen",
    desc: "A Website that create websites . With the clear promt we can generate the website in one click.",
    stack: [{ name: "Next.js" }, { name: "Tailwind css" }, { name: "AWS" }, { name: "Prisma" }, { name: "Kafka" }],
    img: "/assets/work/web.png??height=400&width=600",
    live: "",
    gihub: "",
  }, {
    num: "05",
    catagory: "Frontend",
    title: "Medium",
    desc: "A Blogging Website, where you can Read,Write,update blogs. ",
    stack: [{ name: "React.js" }, { name: "Tailwind css" }, { name: "Node.js" }, { name: "MongoDB" }],
    img: "/assets/work/medium.png??height=400&width=600",
    live: "",
    gihub: "",
  },
 
]

export default function WorkPage() {
  const [project, setproject] = useState(projects[0])

  const handleslidechange = (swiper) => {
    const cureentIndex = swiper.activeIndex
    setproject(projects[cureentIndex])
  }

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-6 sm:py-8 md:py-12 xl:px-0"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-56">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] gap-8">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="space-y-4 md:space-y-6">
              <div className="text-4xl sm:text-5xl md:text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project catagory */}
              <h2 className="text-xl sm:text-2xl md:text-[32px] font-bold leading-none text-white group-hover:text-green-400 transition-all duration-500 capitlize">
                {project.catagory} Project
              </h2>
              {/* project description */}
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">{project.desc}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-2 sm:gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm sm:text-lg md:text-xl text-green-400">
                      {item.name}
                      {index !== project.stack.length - 1 && <span className="text-white/60">,</span>}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/60 mt-6"></div>
            </div>
          </div>
          <div className="w-full xl:w-[60%] order-1 xl:order-none">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="h-[300px] sm:h-[350px] md:h-[420px] xl:h-[520px] pb-12"
              onSlideChange={handleslidechange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[250px] sm:h-[300px] md:h-[370px] xl:h-[420px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden">
                      {/* overplay */}
                      <div></div>
                      {/* image */}
                      <div className="w-full h-full relative">
                        <Image
                          alt={project.title}
                          src={project.img || "/placeholder.svg"}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSliderBtn
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none px-4 xl:px-0"
                btnStyle="bg-green-600 hover:bg-green-500 text-white text-[18px] sm:text-[22px] w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] flex justify-center items-center transition-all rounded-md"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
