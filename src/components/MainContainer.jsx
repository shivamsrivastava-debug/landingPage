import React from 'react'

function MainContainer() {
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <div className=' bg-black border-2 border-#e2e8f0-600 w-[400px] h-11 rounded-full'><p className='text-center pt-2 text-gray-400'>Awarded as the best startup in 2025</p></div>
      <h1 className='text-center mt-6 text-6xl font-semibold'>Earn revenue by selling anything <br /> <span>from the internet on your app</span></h1>
      <p className='mt-6 font-normal'>Gain invaluable predictive analytics and actionable insights empowering</p>
      <div className='flex items-center justify-center gap-6 mt-6'>
        <div className='border-2 rounded-full h-11 w-[200px]'><p className='text-center pt-2'>Start 14 Days Free Trial</p></div>
        <div className='border-2 rounded-full h-11  w-[200px]'><p className='text-center pt-2'>Request</p></div></div>
      <div className='flex items-center justify-center mt-6 gap-3 mr-12'>
        <p>No Credit Card Required</p>
        <div className='bg-gray-600 w-[10px] h-[10px] rounded-full mt-2'></div>
        <p>Cancel Anytime</p>
      </div>
    </div>
  )
}

export default MainContainer