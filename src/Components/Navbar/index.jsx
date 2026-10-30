
import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem'
import { Hamburger, HamburgerIcon, TextAlignJustify  } from 'lucide-react'

export default function Navbar() {



  return (
    <>
<div className="w-full lg:max-w-[1328px] px-6  mx-auto">
        <div className="flex h-[107px] items-center justify-between">

          <div>
            {/* lego site  */}
            <Link to={'/'}>
              <div className='w-25'>
                <img src="../../../public/icon/heyo-logo-header.svg" alt="lego" title='lego' />
              </div>
            </Link>
          </div>




          <div className="hidden md:flex">
            <MenuItem />
          </div>





          <div>
            <button className=' bg-yellow-300 px-3 py-2.5 rounded-xl hover:bg-yellow-500 hover: cursor-pointer hidden md:flex'>Let's Chat</button>
            <TextAlignJustify  className='xs:flex md:hidden size-7 cursor-pointer' />
          </div>

        </div >
      </div >
    </>
  )
}
