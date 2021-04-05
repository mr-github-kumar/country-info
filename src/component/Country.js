import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({name, capital, region, population, flag, alpha3Code}) => {
    return (
        <Link to={`/country/${alpha3Code}`}>
        <div className="bg-light dark:bg-dark-2 w-64 h-80 shadow-md rounded-md flex flex-col justify-between cursor-pointer" key={name}>
            <img src={flag} alt={name} className="rounded-md rounded-b-none w-full object-cover h-40"/>
            <div className="p-4 flex flex-col text-dark-2 dark:text-light gap-2 w-fulls">
              <span className="mb-2 font-bold text-lg truncate hover:text-2xl">{name}</span>
              <span className="text-base"><strong>Population:</strong> {population}</span>
              <span className="text-base"><strong>Region:</strong> {region}</span>
              <span className="text-base"><strong>Capital:</strong> {capital}</span>
            </div>
        </div>
        </Link>
    )
}

export default Country;
