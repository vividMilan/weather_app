import React from 'react'
import './Fetch404.scss'
import FetchError from '../../Assets/404.png'

const Fetch404 = ({fetchError}) => {
  return (
    <div className='error'>
        <img src={FetchError} alt="" />
        <span>{fetchError}</span>
    </div>
  )
}

export default Fetch404