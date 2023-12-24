import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import './SearchBox.scss'

const icon_size = 30

const SearchBox = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        if(props.searchValue) {
          props.fetchWeather(props.searchValue)
        }
    }

  return (
    <div className='search-box'>
        <form onSubmit={handleSubmit} action="">
            <FaLocationDot size={icon_size} id='location-icon'/>
            <input value={props.searchValue} onChange={(e) => props.setSearchValue(e.target.value)} autoFocus type="text" placeholder='Search...' />
            <FaSearch size={icon_size} id='search-icon' />
        </form>
    </div>
  )
}

export default SearchBox