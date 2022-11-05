import React from 'react'
import Image from '../image'
import './index.css';

// This is a component by Aida
const Postcard = ({url, children}) => {
  return (
    <div className='postcard-wrapper'>
        <Image url={url} />
        {children}
    </div>
  )
}

export default Postcard