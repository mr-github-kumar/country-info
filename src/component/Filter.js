import React from 'react';

//Component
import DropdownMenu from './DropdownMenu';
import SearchBar from './SearchBar';

function Filter() {

    return (
        <main className="w-full flex flex-col items-center sm:flex-row sm:justify-between p-4 gap-4">
            <SearchBar/>
            <DropdownMenu/>            
        </main>
    )
}

export default Filter
