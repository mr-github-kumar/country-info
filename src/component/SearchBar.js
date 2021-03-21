import React from 'react';
import { useGlobalContext } from '../context';

function SearchBar() {
    const {countries, setSearchCountry } = useGlobalContext();
    
    const search = (e) => {
      setSearchCountry(e.target.value)
    }
    
    return (
        <main className="search relative w-80">
          <span className="fa fa-search absolute text-white top-1/3 left-4"></span>
          <input placeholder="Search for a country..." type="text" name="search" className="text-base text-white h-12 w-full bg-dark-2 rounded-md shadow-md pl-12" onChange={search} />
        </main>
    )
}

export default SearchBar
