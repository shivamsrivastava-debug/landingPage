import React from 'react'

function MainCardContainer() {
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <div className=' mt-10 rounded-lg flex flex-col border-2 border-#e2e8f0-600 w-[1200px] h-[700px]'>
            <div className='flex items-center border-2 border-#e2e8f0 h-10 p-5 rounded-t-lg gap-96'>
                <div className='flex gap-3'>
                    <div className='bg-gray-500 w-2 h-2 rounded-full'></div>
                    <div className='bg-gray-500 w-2 h-2 rounded-full'></div>
                    <div className='bg-gray-500 w-2 h-2 rounded-full'></div>
                </div>
                <div className='border-2 border-#e2e8f0-600 w-[400px] h-6 rounded-full'>
                  <p className='text-center'>themefisher.com</p>
                </div>
            </div>
            <div className='p-14'>
                <h1 className='font-bold text-3xl'>Dashbaord</h1>
                <p className='text-xl font-normal' >Today, November 17, 2025</p>
            </div>
            <div className='flex flex-col h-full w-full'>
                <div className='flex items-center justify-center'>
                    <div className='border-2 border-#e2e8f0-600 w-1/2 h-64 rounded-xl'>1</div>
                    <div className='border-2 border-#e2e8f0-600 w-1/2 h-28 rounded-xl'>2</div>
                    <div className='border-2 border-#e2e8f0-600 w-1/3 h-28 rounded-xl'>3</div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainCardContainer