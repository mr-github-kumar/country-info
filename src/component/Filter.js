import React from 'react';

//Component
import DropdownMenu from './DropdownMenu';
import SearchBar from './SearchBar';

function Filter() {
    return (
        <main className="fixed z-10 w-full bg-white dark:bg-dark-1 max-w-6xl flex flex-col items-center sm:flex-row sm:justify-between py-4 gap-4">
            <SearchBar/>
            <DropdownMenu/>            
        </main>
    )
}

export default Filter
