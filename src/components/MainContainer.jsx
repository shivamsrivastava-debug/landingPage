import React from 'react'

function MainContainer() {
  return (
    <div className=' text-white flex flex-col items-center justify-center pt-24 h-full w-full bg-cover bg-center bg-no-repeat bg-[url("./public/banner-bg.webp")]' >
      <div className=' bg-black border border-#e2e8f0-600 w-[400px] h-11 rounded-full border-gray-700'><p className='text-center pt-2 text-gray-400'>Awarded as the best startup in 2025</p></div>
      <h1 className='text-center mt-8 text-6xl font-semibold text-gray-300'>Earn revenue by selling anything <br /> <span className='text-gray-600'>from the internet on your app</span></h1>
      <p className='mt-6 font-normal'>Gain invaluable predictive analytics and actionable insights empowering</p>
      <div className='flex items-center justify-center gap-6 mt-8'>
        <div className='border border-gray-700 rounded-full h-11 w-[200px] bg-slate-900'><p className='text-center pt-2'>Start 14 Days Free Trial</p></div>
        <div className='border border-gray-700 rounded-full h-11  w-[200px]'><p className='text-center pt-2'>Request</p></div></div>
      <div className='flex items-center justify-center mt-6 gap-3 mr-12'>
        <p>No Credit Card Required</p>
        <div className='bg-gray-600 w-[10px] h-[10px] rounded-full mt-2'></div>
        <p>Cancel Anytime</p>
      </div>
      <div className='flex items-center justify-center w-[1200px] mt-24'>
        <img src="./public/banner.webp" alt="banner" />
      </div>
      <h1 className='mt-20 font-bold text-center font text-2xl text-gray-400'>Trusted by 15,000+ founders & business owners</h1>
    </div>
  )
}

export default MainContainer