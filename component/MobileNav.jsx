"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
]

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden relative">
      {/* Toggle Button */}
      <button className="text-2xl p-2 z-50 relative" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 flex items-center justify-center">
          <nav className="flex flex-col space-y-8 text-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-white text-xl hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileNav
