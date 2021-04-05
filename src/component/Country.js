import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

const Country = ({name, capital, region, population, flag, alpha3Code}) => {
    return (
        <Link to={`/country/${alpha3Code}`}>
        <div className="group bg-light dark:bg-dark-2 w-64 h-80 shadow-md rounded-md flex flex-col justify-between cursor-pointer" key={name}>
            <img src={flag} alt={name} className="rounded-md rounded-b-none w-full object-cover h-40"/>
            <div className="group-hover:bg-gray-2 dark:group-hover:bg-gray-1 p-4 flex flex-col text-dark-2 dark:text-light gap-2 w-fulls">
              <span className="mb-2 font-bold text-lg truncate">{name}</span>
              <span className="text-base">
                  <strong>Population:</strong> 
                  <NumberFormat className="px-2" value={population} displayType={'text'} thousandSeparator={true}/>
                </span>
              <span className="text-base"><strong>Region:</strong> {region}</span>
              <span className="text-base"><strong>Capital:</strong> {capital}</span>
            </div>
        </div>
        </Link>
    )
}

export default Country;
