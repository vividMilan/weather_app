import React, { useState } from 'react'
import './WeatherApp.scss'
import SearchBox from '../SearchBox/SearchBox'
import WeatherIcon from '../Weather_Icon/WeatherIcon'
import OtherDescriptions from '../OtherDescriptions/OtherDescriptions'
import Fetch404 from '../404/Fetch404'

const WeatherApp = () => {


  const [searchValue, setSearchValue] = useState('')
  const [weather, setWeather] = useState('')
  const [icon, setIcon] = useState('')
  const [windSpeed, setWindSpeed] = useState('')
  const [temp, setTemp] = useState('')
  const [humidity, setHumidity] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState('')
  const [isMounted, setIsMounted] = useState(false)

  const urlBuilder = (city) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  }

  const updateStates = (data) => {
    setWeather(data.weather[0].main)
    setWindSpeed(Math.floor(data.wind.speed))
    setHumidity(data.main.humidity)
    setIcon(data.weather[0].icon)
    setTemp(Math.floor(data.main.temp))
  }

  const fetchWeather = async () => {
    setIsLoading(true)
    setFetchError('') 
    try {
      const response = await fetch(urlBuilder(searchValue))
      if (!response.ok) {
        throw new Error("Could Not Fetch !")
      }
      const data = await response.json()
      updateStates(data)
    } catch (err) {
      setFetchError(err.message)
    } finally {
      setIsLoading(false)
      setIsMounted(true)
    }
  }



  // const geoFindMe = () => {
  //   if (!navigator.geolocation) {
  //     console.log("fasddfasdf")
  //   } else {
  //     navigator.geolocation.getCurrentPosition(async (position) => {
  //       const latitude = position.coords.latitude
  //       const longitude = position.coords.longitude

  //       const reqUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  //       setIsLoading(true)
  //       try {
  //         const response = await fetch(reqUrl)
  //         if (!response.ok) {
  //           throw new Error("Something Went Wrong !")
  //         }
  //         const data =  await response.json()
  //         updateStates(data)
  //       } catch (err) {
  //         setFetchError(err.message)
  //       } finally {
  //         setIsLoading(false)
  //       }
  //     })
  //   }

  // }

  // useEffect(() => {
  //   geoFindMe()
  // }, [])

  
  if (isMounted) {
    return (
      <div className='container'>
        <SearchBox 
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
          fetchWeather = {fetchWeather}
        />
        {isLoading && 
          <p className='loading'>Loading...</p>
        }
        {!isLoading && !fetchError && (
          <>
            <WeatherIcon 
              icon = {icon}
              weather = {weather}
            />
            <span className={!temp ? "temp hide" : "temp"}>{temp} °C</span>
            <OtherDescriptions
              windSpeed = {windSpeed}
              humidity = {humidity}
            />
          </>
        )}
        {!isLoading && fetchError && (
          <Fetch404 
            fetchError = {fetchError}
          />
        )}
      </div>
    )
  } else {
    return (
      <div className='default'>
          <SearchBox 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
            fetchWeather = {fetchWeather}
          />
      </div>
    )
  }

}

export default WeatherApp