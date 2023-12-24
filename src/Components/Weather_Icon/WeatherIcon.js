import React from 'react'
import './WeatherIcon.scss'

import clear_night from '../../Assets/Weather-Icons/clear-night.png'
import clear_day from '../../Assets/Weather-Icons/clear-day.png'

import cloudy_day from '../../Assets/Weather-Icons/cloudy-day.png'
import cloudy_night from '../../Assets/Weather-Icons/cloudy-night.png'

import thuder_storm from '../../Assets/Weather-Icons/thunder-storm.png'

import mist from '../../Assets/Weather-Icons/mist.png'

import snow_day from '../../Assets/Weather-Icons/snow-day.png'
import snow_night from '../../Assets/Weather-Icons/snow-night.png'

import rain_day from '../../Assets/Weather-Icons/rain-day.png'
import rain_night from '../../Assets/Weather-Icons/rain-night.png'

const WeatherIcon = (props) => {

  let imgSrc = null

  if (props.icon === '01d') {
    imgSrc = clear_day
  } else if (props.icon === '01n') {
    imgSrc = clear_night
  } else if (props.icon === '02d' || props.icon === '03d' || props.icon === '04d') {
    imgSrc = cloudy_day
  } else if (props.icon === '02n' || props.icon === '03n' || props.icon === '04n') {
    imgSrc = cloudy_night
  } else if (props.icon === '09d' || props.icon === '10d') {
    imgSrc = rain_day
  } else if (props.icon === '09n' || props.icon === '10n') {
    imgSrc = rain_night
  } else if (props.icon === '11d' || props.icon === '11n') {
    imgSrc = thuder_storm
  } else if (props.icon === '13d') {
    imgSrc = snow_day
  } else if (props.icon === '13n') {
    imgSrc = snow_night
  } else if (props.icon === '50d' || props.icon === '50n') {
    imgSrc = mist
  }

  return (
    <div className="icon-container">
        <img src={imgSrc} alt="" />
        <span>{props.weather}</span>
    </div>
  )
}

export default WeatherIcon