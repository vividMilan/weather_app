import React from 'react'
import wind from '../../Assets/Weather-Icons/wind.png'

const WindSpeed = ({windSpeed}) => {
  return (
    <div className={!windSpeed ? "hide" : "col"}>
            <img src={wind} alt="" />
            <div className='col-description'>
                <span id='data'>{windSpeed} Km/H</span>
                <span id='heading'>Wind Speed</span>
            </div>
    </div>
  )
}

export default WindSpeed