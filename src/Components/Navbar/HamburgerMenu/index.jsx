import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  ChevronDown,
  LayoutGrid,
  Smartphone,
  Code2,
  Brain,
  GitBranch,
  Trophy,
  Monitor,
  Palette,
  MonitorPlay,
  BadgeCheck,
  Building2,
  Store,
  Rocket
} from 'lucide-react'

import '../Navbar.css'

export default function HamburgerMenu({ openMenu, closeMenu }) {
  const [activeSubMenu, setActiveSubMenu] = useState(null)

  const listMenu = [
    { name: 'Work', link: '/' },
    {
      name: 'Services',
      link: '/',
      items: [
        { name: 'All Services', icon: <LayoutGrid /> },
        { name: 'Product', icon: <Smartphone /> },
        { name: 'Engineering', icon: <Code2 /> },
        { name: 'AI Transformation', icon: <Brain /> },
        { name: 'Strategy', icon: <GitBranch /> },
        { name: 'Branding', icon: <Trophy /> },
        { name: 'Web', icon: <Monitor /> },
        { name: 'Illustration', icon: <Palette /> },
        { name: 'Animation', icon: <MonitorPlay /> },
        { name: 'QA', icon: <BadgeCheck /> },
      ],
    },
    {
      name: 'Solutions',
      link: '/',
      items: [
        { name: 'All Solutions', icon: <LayoutGrid /> },
        { name: 'Enterprise', icon: <Building2 /> },
        { name: 'Small Business', icon: <Store /> },
        { name: 'Startup', icon: <Rocket /> },
      ],
    },
    { name: 'About', link: '/' },
  ]

  const hamburger = listMenu.map((e) => {
    const isOpen = activeSubMenu === e.name

    return (
      <li key={e.name} className="border-b border-white/20 py-5">

        {e.items ? (
          <>
            <button
              onClick={() => setActiveSubMenu(isOpen ? null : e.name)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between text-left text-2xl font-medium text-white"
            >
              {e.name}

              <ChevronDown
                className={`size-6 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Accordion */}
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <ul className="flex flex-col gap-5 pt-5 pl-3">
                  {e.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center gap-3 text-lg text-gray-300 transition-colors duration-200 hover:text-yellow-300"
                      >
                        <span className="text-yellow-300">
                          {item.icon}
                        </span>

                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <Link
            to={e.link}
            onClick={closeMenu}
            className="block text-2xl font-medium text-white"
          >
            {e.name}
          </Link>
        )}

      </li>
    )
  })

  return (
    <div
      className={`mobile-menu-reveal ${openMenu ? 'is-open' : ''}`}
      aria-hidden={!openMenu}
    >
      <nav className="mobile-menu-content">

        <ul className="flex flex-col text-white">
          {hamburger}
        </ul>

        <button className="mobile-chat-btn w-full rounded-xl bg-yellow-300 py-4 text-2xl text-black transition-colors hover:bg-yellow-400">
          Let's Chat
        </button>

      </nav>
    </div>
  )
}
