import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import './SearchBox.scss'

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
            <FaLocationDot id='location-icon'/>
            <input value={props.searchValue} onChange={(e) => props.setSearchValue(e.target.value)} autoFocus type="text" placeholder='Search...' />
            {/* <FaSearch  id='search-icon' /> */}
        </form>
    </div>
  )
}

export default SearchBox