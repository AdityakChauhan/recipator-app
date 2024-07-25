import React from 'react'

const Button = (props) => {
    const {children} = props;
  return (
    <button className='bg-[#00A878] shadow-md w-40 h-8 mb-4 mx-4 rounded-lg text-orange-100 hover:border-solid hover:border-[2.8px] hover:border-orange-100'>{children}</button>
  )
}

export default Button