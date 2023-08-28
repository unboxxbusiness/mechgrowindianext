import React from 'react'

import Image from 'next/image'
function Team() {
  return (
 
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our leadership</h2>
 </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        <div className="text-center">
          <Image className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="/Ravikant.png" alt="Image Description" width={1920} height={1280}/>
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
             Ravikant Kumar
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
              Co-Founder | Mechgrow <span className='text-green-600'>India</span>
            </p>
          </div>
        </div>
     
    
        <div className="text-center">
          <Image className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="/Abhinetra.png" alt="Image Description" width={1920} height={1280}/>
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
              Abhinetra Singh
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
            Co-Founder | Mechgrow <span className='text-green-600'>India</span>
            </p>
          </div>
        </div>
   
    
        <div className="text-center">
          <Image className="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="/Mantosh.png" alt="Image Description" width={1920} height={1280}/>
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
            Mantosh Kumar
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
            Co-Founder | Mechgrow <span className='text-green-600'>India</span>
            </p>
          </div>
        </div>
      
    
        
      </div>
   
    </div>
 

 
  )
}

export default Team