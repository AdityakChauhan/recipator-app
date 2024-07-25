import React from 'react'

export default function Hero() {
    return (
        <div className='w-full h-screen bg-[#d8f1a0] flex flex-col justify-center items-center'>
            <h1 className='uppercase max-w-sm text-4xl sm:text-5xl sm:max-w-sm md:max-w-md lg:max-w-lg md:text-6xl lg:text-7xl inline-block text-transparent bg-gradient-to-r from-[#783c81] to-[#6d114b] bg-clip-text'>
                Recipator
            </h1>
            <p className='capitalize pb-10 mb-10 text-md sm:text-md md:text-lg lg:text-xl text-[#2B2B2B] text-center'>
                Be ready for the absolute <span className='text-[#00a854f6]'>annihilation</span> of your tastebuds!
            </p>
            <button className='bg-orange-400 text-yellow-50 rounded-md w-auto h-auto px-5 py-2 text-md sm:text-md md:text-lg lg:text-xl shadow-lg shadow-[#ffb042] hover:bg-orange-600 hover:opacity-75 hover:-translate-y-1/4 duration-200'>
                Begin
            </button>
        </div>
    )
}
