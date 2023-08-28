import React from 'react'
import Link from 'next/link'

const Ann = () => {
  return (
    <div class="bg-green-600 item-center">
<Link className="group  bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md" href="#">
  <p className="mr-2 text-white text-lg md:text-lg text-center">
    <span className='text-amber-400 underline'>Call Us For Order</span> <span className='font-bold'>+91 9310595242 , +91 8404882358, +91 7250363666</span>
  </p>
</Link>
</div>
  )
}

export default Ann