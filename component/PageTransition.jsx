"use client"
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransiton({ children }) {
  const Pathname = usePathname();
  return (
    <AnimatePresence>

      <div key={Pathname}>
        <motion.div initial={{ opacity: 1 }}
          animate={{
            opacity: 0, transition:
              { delay: 1, duration: 0.2, ease: 'easeOut' }
          }}
          className="h-screen w-screen fixed bg-black top-0 pointer-events-none"
        />

        {children}</div>
    </AnimatePresence>

  )
}

