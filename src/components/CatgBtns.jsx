import React from 'react'
import Button from './Button';

const CatgBtns = () => {
    const catgs = ["All", "JavaScript", "Gaming", "SamrtPhone", "Recently uploaded", "Watched", "New to You"];
  return (
    <div className='p-1'>
        {catgs.map((catg, index) => <Button key={index} data={catg} />)}
    </div>
  )
}

export default CatgBtns