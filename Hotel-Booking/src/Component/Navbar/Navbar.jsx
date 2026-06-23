import React from 'react'

function Navbar() {
  return (
    <div className='bg-red-500 py-4 w-full'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0'>
        <h1 className='text-3xl font-bold text-white'>Hotel-booking</h1>
        <nav>
          <ul className='flex flex-col items-center gap-3 text-white md:flex-row md:gap-8'>
            <li>
              <a href='' className=' text-white text-xl'>Home</a>
            </li>
            <li>
              <a href='' className='text-white text-xl'>HotelList</a>
            </li>
            <li>
              <a href='' className='text-white text-xl'>Services</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;