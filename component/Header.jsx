import { Nav } from "./Nav"
import HiremeButton from "./HiremeButton"
import Link from "next/link"
import MobileNav from "./MobileNav"

export default function Header  ()  {
  return (
    <header className=" xl:py-5text-white  p-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Prathm's <span className="text-green-300"> .</span></h1>
        </Link>
        {/* Dekstop NAV */}
        <div className="hidden xl:flex item-center gap-8">
          <Nav />
          <Link href="/contact">
            <HiremeButton /> </Link>
        </div>
        {/* Mobile View */}
      <div className="xl:hidden"><MobileNav/></div>
      </div>
    </header>
  )

}


