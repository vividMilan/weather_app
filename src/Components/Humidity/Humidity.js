import React from 'react'
import humidityIcon from '../../Assets/Weather-Icons/humidity.png'


const Humidity = ({humidity}) => {
  return (
    <div className={!humidity ? 'hide' : "col"}>
            <img src={humidityIcon} alt="" />
            <div className='col-description'>
                <span id='data'>{humidity}%</span>
                <span id='heading'>Humidity</span>
            </div>
    </div>
  )
}

export default Humidity