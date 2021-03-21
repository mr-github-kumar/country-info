import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({name, capital, region, population, flag, alpha3Code}) => {
    return (
        <Link to={`/country/${alpha3Code}`}>
        <div className="bg-dark-2 w-64 h-80 sshadow-md rounded-md flex flex-col justify-between" key={name}>
            <img src={flag} alt={name} className="rounded-md rounded-b-none w-full object-cover h-40"/>
            <div className="p-4 flex flex-col text-white gap-2 w-fulls">
              <span className="mb-2 font-bold text-lg truncate">{name}</span>
              <span className="text-base"><strong>Population:</strong> {population}</span>
              <span className="text-base"><strong>Region:</strong> {region}</span>
              <span className="text-base"><strong>Capital:</strong> {capital}</span>
            </div>
        </div>
        </Link>
    )
}

export default Country;
