import React from 'react'
import Image from 'next/image'
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid"
function header() {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50' >
      <div className='flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto'>
        <div className='relative w-24  hidden lg:inline-grid cursor-pointer'>
          <Image src="https://links.papareact.com/ocw"
            layout='fill'
            objectFit='contain'
          ></Image>
        </div>
        <div className='relative w-10  lg:hidden flex-shrink-0 cursor-pointer'>
          <Image src="https://links.papareact.com/jjm"
            layout='fill'
            objectFit='contain'
          ></Image>
        </div>

        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <MagnifyingGlassIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input className='bg-gray-50 block w-full pl-10 sm:text-sm 
          border-gray-300 focus:ring-black focus:border-black
          rounded-md'
              type='text' placeholder='Search' ></input>
          </div>
        </div>


        <div className='flex items-center justify-end '>
          <HomeIcon className='navBtn ml-3'></HomeIcon>
          <Bars3Icon className='h-5 w-5 ml-3 md:hidden' />
          <div className='relative navBtn'>
            <PaperAirplaneIcon className='navBtn -rotate-45 ml-3' />
            <div className='absolute -top-1 -right-2 text-xs w-4 h-4 bg-red-500
            rounded-full flex items-center justify-center animate-pulse text-white'>
              3
            </div>

          </div>
          <PlusCircleIcon className='navBtn ml-3' />
          <UserGroupIcon className='navBtn ml-3' />
          <div className='relative navBtn'>
            <HeartIcon className='navBtn ml-3' />
            <div className='absolute -top-1 -right-2 text-xs w-4 h-4 bg-red-500
            rounded-full flex items-center justify-center animate-pulse text-white'>
              3
            </div>
          </div>
          <img src='https://links.papareact.com/3ke'
            className='h-10  rounded-full cursor-pointer ml-3     
          
          '/>


        </div>



      </div>
    </div>
  )
}

export default header