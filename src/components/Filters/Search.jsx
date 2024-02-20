import React, { useCallback, useState } from 'react'
import search from './Search.module.css'
import { debounce } from 'lodash';


const Search = ({searchName , setSearchName}) => {

  const [name , setName] = useState(searchName);

  const debounceName = debounce(setSearchName, 500);

  const handleClick = useCallback((event) => {
    setName(event.target.value);
    debounceName(event.target.value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div>
      <div>
        <h1 className={search.heading}>Characters</h1>
      </div>
      <div className={search.bar}>
        <input value={name} id='searchInput' type='text' placeholder='Search characters by name.....' onChange={handleClick}/>
      </div>
    </div>
  )
}

export default Search;
