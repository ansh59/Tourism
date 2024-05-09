

import React from 'react'

const nav = () => {
  return (
    <div className='absolute w-full flex justify-between'>
    <div className='border h-10 w-28 text-white'>
      logo
    </div>
    <div className='navtxt p-2 h-10 w-5/12 flex justify-between text-lg'>
      <a className='mx-2 underline' href=''>Home</a>
      <a className='mx-2 underline' href=''>Accomodation</a>
      <a className='mx-2 underline' href=''>Destination</a>
      <a className='mx-2 underline' href=''>Treaking</a>
    </div>
    </div>
  )
}

export default nav