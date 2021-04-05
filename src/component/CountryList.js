import React from 'react';
import Country from './Country';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CountryList = () => {

 const { countries, loading } = useGlobalContext(); 

  if(loading){
    return <Loading/>
  }
  if(!countries.length) {
    return (
      <div className="w-full h-screen text-dark-2 dark:text-light flex flex-col items-center gap-4 sm:flex-row justify-center text-base font-semibold tracking widest italic">
        <span>Sorry!!!!!!!!!! </span> 
        <span><i className="far fa-frown fa-4x px-4 animate-bounce"></i></span>
        <span>No countrie matched your search criteria.</span>        
      </div>
    )
  }
  return (
    <section className="relative top-36 sm:top-20 w-full h-full min-h-screen flex flex-col sm:flex-row sm:flex-wrap gap-10 items-center mt-2 justify-start sm:justify-center sm:items-start">
      {countries.map((item) => {
        return <Country key={item.alpha3Code}{...item}/>
      })}            
    </section>
  )     
}

export default CountryList;
