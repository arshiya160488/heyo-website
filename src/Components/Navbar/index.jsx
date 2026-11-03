
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem'
import HamburgerMenu from './HamburgerMenu'
import { TextAlignJustify, X } from 'lucide-react'

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleopen = () => setOpenMenu(prev => !prev)

  const closeMenu = () => {
    setOpenMenu(false)
  }

  return (
    <>
      {/* Mobile Menu */}
      <HamburgerMenu
        openMenu={openMenu}
        closeMenu={closeMenu}
      />

      {/* Navbar */}
      <header className="relative z-50 mx-auto w-full px-4 lg:max-w-[1328px]">
        <div className="flex h-[107px] items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <div className="w-[100px]">
              <img
                className={openMenu ? 'brightness-0 invert' : ''}
                src="/icon/heyo-logo-header.svg"
                alt="Heyo"
                title="Heyo"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <MenuItem />
          </div>

          {/* Buttons */}
          <div>
            <button className="hidden cursor-pointer rounded-xl bg-yellow-300 px-3 py-2.5 hover:bg-yellow-500 md:flex">
              Let's Chat
            </button>

            <button
              onClick={handleopen}
              aria-label={openMenu ? 'Close menu' : 'Open menu'}
              aria-expanded={openMenu}
              className={`flex cursor-pointer md:hidden ${
                openMenu ? 'text-white' : 'text-black'
              }`}
            >
              {openMenu ? (
                <X className="size-8" />
              ) : (
                <TextAlignJustify className="size-7" />
              )}
            </button>
          </div>

        </div>
      </header>
    </>
  )
}
