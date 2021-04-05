import React from 'react';
import { useGlobalContext } from '../context';

function SearchBar() {
    const {setSearchCountry } = useGlobalContext();
    const searchValue = React.useRef('');

    const search = () => {
      setSearchCountry(searchValue.current.value)
    }
    
    return (
        <main className="search relative w-full px-2 sm:w-3/5">
          <span className="fa fa-search absolute text-dark-2 dark:text-light top-1/3 left-4"></span>
          <input placeholder="Search for a country..." type="text" name="search" className="text-base  text-dark-2  placeholder-dark-2 dark:placeholder-light dark:text-light h-12 w-full bg-light dark:bg-dark-2 rounded-md shadow-md pl-12" onChange={search} ref={searchValue}/>
        </main>
    )
}

export default SearchBar
