import React from 'react';

//components
import CountryList from './CountryList';
import Filter from './Filter';

function Main() {
    return (
        <main className="w-full h-full flex justify-center bg-dark-1">
            <div className="w-full h-full flex flex-col max-w-6xl">
                <Filter/>
                <CountryList/>            
            </div>
        </main>
    )
}

export default Main
