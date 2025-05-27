import { animate, motion } from "framer-motion"


const stairsVariants={
    inital:{
        top: "0%",
    },
    animate:{
        top:"100%"
    },
    exit:{
        top:["100%","0%"],
    }
}

const reveseIndex= (index)=>{
    const totalSteps= 6;
    return totalSteps-index-1;
}
const Stairs = () => {
  return (
    <>
    {[...Array(6)].map((_,index)=>{
        return (<motion.div key={index} variants={stairsVariants}  initial="initial"
        animate="animate" exit="exit" transition={{
            duration:0.2,
            ease:"easeOut",
            delay:reveseIndex(index)*0.1,
        }}
        className="w-full h-full bg-white relative"
        />
    )
    })}
    </>
  )
}

export default Stairs
