import React from 'react'

const Button = ({data}) => {
  return (
    <button className='px-3 text-sm font-semibold py-2 bg-gray-100 rounded-lg mr-3'>{data}</button>
  )
}

export default Button