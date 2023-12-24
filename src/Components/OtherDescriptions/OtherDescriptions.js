import React from 'react'
import './OtherDescriptions.scss'
import WindSpeed from '../WindSpeed/WindSpeed'
import Humidity from '../Humidity/Humidity'

const OtherDescriptions = ({windSpeed, humidity}) => {
  return (
    <div className='other-decription-container'>
        <Humidity 
          humidity = {humidity}
        />
        <WindSpeed 
          windSpeed = {windSpeed}
        />
    </div>
  )
}

export default OtherDescriptions