import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Product = () => {
  return (
   
  
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white underline">Our Products Category</h2>
      </div>
  
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        <div className="text-center">
          <Link href="/product"><Image className="rounded-full sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="/indi.png" alt="Image Description" width={1920} height={1280}/></Link>   
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
            Digital Indicator
            </h3>
           
          </div>
        </div>
       
    
        <div className="text-center">
          <Link href="/product"><Image className="rounded-full sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="/smt1.png" alt="Image Description" width={1920} height={1280}/></Link>   
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
              SMT Machines
            </h3>
          
          </div>
        </div>
     
    
        <div className="text-center">
          <Link href="/product"><Image className="rounded-full sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="/air.png" alt="Image Description" width={1920} height={1280}/></Link>   
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
              Air Blower
            </h3>
           
          </div>
        </div>
  

        <div className="text-center">
          <Link href="/product"><Image className="rounded-full sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="/label.png" alt="Image Description" width={1920} height={1280}/></Link>   
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
              Label Dispanser
            </h3>
            
          </div>
        </div>
  
    
        <div className="text-center">
          <Link href="/product"><Image className="rounded-full sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="/esdg.png" alt="Image Description" width={1920} height={1280}/></Link>   
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
             ESD Garments
            </h3>
            
          </div>
          
        </div>
     
    
       <div className="text-center">
          <Link href="/product"><Image className="rounded-full sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="/clean.png" alt="Image Description" width={1920} height={1280}/></Link> 
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
            Clean Room Consumables Items
            </h3>
            
          </div>
        
        </div>   
      </div>
     
    </div>

    
  )
}

export default Product