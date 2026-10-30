import React from 'react'
import { Link } from 'react-router-dom'
// ایمپورت ایکون ها 
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

    // محتوای لیست ها های نوبار
      const listMenu = [
    {
      name: 'Work',
    },
    {
      name: 'Services',
      icon: <ChevronDown className="size-3" />,
      
    //   مگا منو
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
      icon: <ChevronDown className="size-3" />,

    //   مگا منو
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
    },
  ]

// درست کردن مگا منو
const mapa = listMenu.map((e, index) => {
  return (
    <li key={index} className="relative group">

      <Link to="/" className="flex items-center">

        {/* نام عادی */}
        <span className="inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-3 py-3 text-[16px] font-medium hover:bg-gray-100">
          {e.name}


{/* ایکون ها  */}
          {e.icon && (
            <span className="transition-transform duration-300 group-hover:rotate-180">
              {e.icon}
            </span>
          )}

        </span>
      </Link>
{/* مگا منو برای بعضی ها */}
      {e.items && (
        <div className="absolute left-0 top-full z-50 hidden w-[600px] rounded-xl bg-white p-4 shadow-xl group-hover:block">

          <div className="grid grid-cols-2 gap-2.5 cursor-pointer">

            {e.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-100 cursor-pointer">

                <div className="flex size-10 items-center justify-center rounded-lg cursor-pointer">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold cursor-pointer">{item.name}</h3>
                  <p className="text-xs text-gray-500 cursor-pointer" >
                    {item.description}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      )}

    </li>
  )
})
    return (
        <>
            <ul className='flex'>
                {mapa}
            </ul>
        </>
    )
}
