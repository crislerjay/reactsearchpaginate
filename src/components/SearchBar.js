import React, { useState } from 'react'
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

function SearchBar({placeholder, data}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (e) => {
    const searchWord = e.target.value
    setWordEntered(e.target.value)
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
      console.log(filteredData);
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }


  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type="text" value={wordEntered} placeholder={placeholder} onChange={handleFilter}/>
        <div className='searchIcon'>
          {wordEntered === '' ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className='dataResults'>
        {filteredData.map(value => {
          return (
            <div className='dataItem' key={value.id}>
              <Link to={`/${value.id}`} target="_blank">
                <p>{value.title}</p>
              </Link>
            </div>
          )
        })}
      </div>
      )}
    </div>
  )
}

export default SearchBar