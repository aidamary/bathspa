import React from 'react'
import Image from '../image'
import './index.css';

const Postcard = ({url, children}) => {
  return (
    <div className='postcard-wrapper'>
        <Image url={url} />
        {children}
    </div>
  )
}

export default Postcard