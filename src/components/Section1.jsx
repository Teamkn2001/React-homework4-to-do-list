import React from 'react'

const Section1 = () => {
  return (
    <div className='flex justify-between items-center px-14 bg-red-500 min-h-[70px]'>
        <h1 className='text-4xl font-bold '>Navbar</h1>
      
            <nav className='flex gap-4 font-bold text-white'>
                <p>Home</p>
                <p>About</p>
                <p>Login</p>
            </nav>
    </div>
  )
}

export default Section1