import React from 'react'

function NavContainer() {
  return (
    <div className='flex items-center justify-center bg-black'>
      <div className=' border-gray-700 bg-slate-950 border w-[1050px] h-16 mt-6 rounded-full flex items-center justify-center gap-24'>
        <h1 className='text-white pl-5'>Darkrise</h1>
        
          <p className='text-white'>All pages</p>
          <p className='text-white'>Integration</p>
          <p className='text-white'>Pricing</p>
          <p className='text-white'>Contact</p>

        <div className='border-2 border-#e2e8f0-600 w-[200px] h-11 rounded-full border-gray-700'>
        <h1 className='text-center text-white pt-2 pr-4'> Get This Template </h1>
        </div>
      </div>
    </div>
  )
}

export default NavContainer