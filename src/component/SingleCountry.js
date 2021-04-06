import React, { useEffect, useState } from 'react';
import Loading from '../component/Loading';
import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import NumberFormat from 'react-number-format';

const url = 'https://restcountries.eu/rest/v2/alpha/';

const SingleCountry = () =>  {
    const { alpha3Code } = useParams();
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState(null);

    const { countries } = useGlobalContext();
    const borderFullName = countries.map(({name, alpha3Code}) => ({name,alpha3Code}));
    
    useEffect(() => {
        setLoading(true);
        async function getCountry(){
            try {
                const response =  await fetch (`${url}${alpha3Code}`)
                const data = await response.json()
                if(data){
                    setCountry(data);
                } else {
                    setCountry(null);
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getCountry();
    },[alpha3Code])

    if(loading){
        return <Loading/>
    }
    if(!country){
        return <h2>No country to display.</h2>
    }   

    return (
        <main className="relative top-20 bg-white dark:bg-dark-1 w-full h-screen p-4 flex flex-col items-center sm:justify-start">
            <div className="w-full h-full max-w-6xl flex flex-col gap-y-4">
                <div className="back-button sm:h-1/5 flex justify-start items-center">
                    <Link to="/country-info">
                        <button className="h-10 w-24 bg-light dark:bg-dark-2 text-dark-2 dark:text-light p-2 flex items-center justify-around rounded-sm shadow-md cursor-pointer hover:bg-gray-2 dark:hover:bg-gray-1">
                            <i className="fas fa-arrow-left"></i>
                            Back
                        </button>
                    </Link>
                </div>
                <div className="country w-full flex flex-col gap-y-4 sm:gap-y-2 sm:flex-row sm:gap-12">
                    <img src= {country.flag} alt={country.name} className="sm:w-1/2 sm:h-96 m-0 shadow-lg"/>
                    <div className="country-disc w-full sm:w-1/2 text-dark-2 dark:text-light flex flex-col sm:justify-between sm:py-8 gap-y-4">
                        <h2 className="name font-semibold text-3xl hover:text-gray">{country.name}</h2>
                        <div className="main flex flex-col gap-y-4 sm:flex-row w-full sm:justify-between">
                            <div className="main-left w-full sm:w-1/2 flex flex-col sm:gap-2">
                                <span className="hover:text-gray"><strong>Native Name:</strong> {country.nativeName}</span>
                                <span className="hover:text-gray"><strong>Population:</strong> 
                                <NumberFormat className="px-2 hover:text-gray" value={country.population} displayType={'text'} thousandSeparator={true}/>
                                </span>
                                <span className="hover:text-gray"><strong>Region</strong>: {country.region}</span>
                                <span className="hover:text-gray"><strong>Sub-region:</strong> {country.subregion}</span>
                                <span className="hover:text-gray"><strong>Capital:</strong> {country.capital}</span>
                            </div>
                            <div className="main-right sm:w-1/2 flex flex-col sm:gap-2">
                                <span className="hover:text-gray"><strong>Top Level Domain:</strong> {country.topLevelDomain}</span>
                                <span className="hover:text-gray"><strong>Currencies:</strong> {country.currencies[0].name}</span>
                                <span className="hover:text-gray"><strong>Languages:</strong> {country.languages[0].name}</span>
                            </div>
                        </div>
                        <div className="border-countries">
                            <h1 className="hover:text-gray"><strong>Border Countries:</strong></h1>
                            
                            {
                            country.borders.length !== 0  ?
                                country.borders.map((border) => { 
                                    return <span className="hover:text-gray gap-y-2 sm:p-2 flex flex-col sm:flex-row">{borderFullName.map(fullName=> {
                                        return fullName.alpha3Code === border ?
                                        fullName.name : null
                                    })}</span>; 
                            }) : <span className="">No Borders</span>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SingleCountry
