import React, { useEffect, useState } from 'react';
import Loading from '../component/Loading';
import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

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
        <main className="bg-dark-1 w-full h-screen p-4 flex flex-col items-center sm:justify-start">
            <div className="w-full h-full max-w-6xl flex flex-col">
                <div className="back-button sm:h-1/5 flex justify-start items-center">
                    <Link to="/">
                        <button className="h-10 w-24 bg-dark-2 text-white p-2 flex items-center justify-around rounded-sm shadow-md cursor-pointer">
                            <i className="fas fa-arrow-left"></i>
                            Back
                        </button>
                    </Link>
                </div>
                <div className="country w-full flex sm:flex-row sm:gap-12">
                    <img src= {country.flag} alt={country.name} className="sm:w-1/2 sm:h-96 m-0 shadow-lg"/>
                    <div className="country-disc w-full sm:w-1/2 text-white flex flex-col sm:justify-between sm:py-8">
                        <h2 className="name font-semibold text-3xl">{country.name}</h2>
                        <div className="main flex sm:flex-row w-full sm:justify-between">
                            <div className="main-left w-full sm:w-1/2 flex flex-col sm:gap-2">
                                <span className=""><strong>Native Name:</strong> {country.nativeName}</span>
                                <span className=""><strong>Population:</strong> {country.population}</span>
                                <span className=""><strong>Region</strong>: {country.region}</span>
                                <span className=""><strong>Sub-region:</strong> {country.subregion}</span>
                                <span className=""><strong>Capital:</strong> {country.capital}</span>
                            </div>
                            <div className="main-right sm:w-1/2 flex flex-col sm:gap-2">
                                <span className=""><strong>Top Level Domain:</strong> {country.topLevelDomain}</span>
                                <span className=""><strong>Currencies:</strong> {country.currencies[0].name}</span>
                                <span className=""><strong>Languages:</strong> {country.languages[0].name}</span>
                            </div>
                        </div>
                        <div className="border-countries">
                            <h1><strong>Border Countries:</strong></h1>
                            
                            {
                            country.borders.length !== 0  ?
                                country.borders.map((border) => { 
                                    return <span className="p-2">{borderFullName.map(fullName=> {
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
