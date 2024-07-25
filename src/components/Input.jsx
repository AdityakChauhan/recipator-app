import React from 'react'
import Button from './Button'

export default function Input() {
    return (
        <div className='w-full h-screen bg-gradient-to-r from-orange-300 to-orange-600 flex flex-col'>
            <div className='flex flex-col justify-center m-8'>
                <h2 className='m-7'>What is your diet pattern?</h2>
                <div className='grid grid-cols-1 sm:grid-cols-4'>
                    <Button>{'Veg'}</Button>
                    <Button>{'Non-Veg'}</Button>
                    <Button>{'Eggetarian'}</Button>
                    <Button>{'Vegan'}</Button>
                </div>
            </div>
        </div>
    )
}
