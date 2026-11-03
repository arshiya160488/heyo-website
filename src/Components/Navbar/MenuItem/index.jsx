
import React from 'react'
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

export default function MenuItem() {

  const listMenu = [
    {
      name: 'Work',
      link: '/'
    },
    {
      name: 'Services',
      link: '/',
      icon: <ChevronDown className="size-3" />,
      items: [
        {
          name: 'All Services',
          description: 'Comprehensive creative solutions',
          icon: <LayoutGrid />,
        },
        {
          name: 'Product',
          description: 'Comprehensive creative solutions',
          icon: <Smartphone />,
        },
        {
          name: 'Engineering',
          description: 'Scalable tech solutions',
          icon: <Code2 />,
        },
        {
          name: 'AI Transformation',
          description: 'Intelligent automation',
          icon: <Brain />,
        },
        {
          name: 'Strategy',
          description: 'Vision-driven planning',
          icon: <GitBranch />,
        },
        {
          name: 'Branding',
          description: 'Identity and impact',
          icon: <Trophy />,
        },
        {
          name: 'Web',
          description: 'Seamless digital presence',
          icon: <Monitor />,
        },
        {
          name: 'Illustration',
          description: 'Artful visual storytelling',
          icon: <Palette />,
        },
        {
          name: 'Animation',
          description: 'Dynamic motion design',
          icon: <MonitorPlay />,
        },
        {
          name: 'QA',
          description: 'Quality assurance',
          icon: <BadgeCheck />,
        },
      ],
    },
    {
      name: 'Solutions',
      link: '/',
      icon: <ChevronDown className="size-3" />,
      items: [
        {
          name: 'All Solutions',
          description: 'Find the right fit for your team',
          icon: <LayoutGrid />,
        },
        {
          name: 'Enterprise',
          description: 'High-output creative at scale',
          icon: <Building2 />,
        },
        {
          name: 'Small Business',
          description: 'Smarter, sustainable growth',
          icon: <Store />,
        },
        {
          name: 'Startup',
          description: 'Clarity and speed to market',
          icon: <Rocket />,
        },
      ],
    },
    {
      name: 'About',
      link: '/'
    },
  ]

  const mapa = listMenu.map((e, index) => {
    return (
      <li key={e.name} className="relative group">

        <Link to={e.link} className="flex items-center">
          <span className="inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-3 py-3 text-[16px] font-medium hover:bg-gray-100">

            {e.name}

            {e.icon && (
              <span className="transition-transform duration-300 group-hover:rotate-180">
                {e.icon}
              </span>
            )}

          </span>
        </Link>

        {e.items && (
          <div className={`absolute -left-20 top-full z-50 hidden rounded-xl bg-white p-4 shadow-xl group-hover:block
            ${e.name === 'Services'
              ? 'w-[500px] grid-cols-2'
              : 'w-[350px]  grid-cols-1'
            }`}>

            <div className={`grid gap-2.5
              ${e.name === 'Services'
                ? 'grid-cols-2'
                : 'grid-cols-1'
              }`}>

              {e.items.map((item) => (
                <Link
                  key={item.name}
                  to="/"
                  className="flex items-center gap-5 rounded-lg p-3 hover:bg-gray-100"
                >

                  <div className="flex size-6 shrink-0 items-center justify-center">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {item.description}
                    </p>
                  </div>

                </Link>
              ))}

            </div>
          </div>
        )}

      </li>
    )
  })

  return (
    <ul className="flex">
      {mapa}
    </ul>
  )
}
