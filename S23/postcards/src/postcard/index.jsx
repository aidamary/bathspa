import React from 'react'
import Image from '../image'
import Text from '../text'
import './index.css';

const Postcard = ({text, url}) => {
  return (
    <div className='postcard-wrapper'>
        <Image url={url} />
        <Text>{text}</Text>
    </div>
  )
}

export default Postcard