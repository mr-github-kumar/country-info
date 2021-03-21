import React from 'react';
import Country from './Country';
import Loading from './Loading';
import { useGlobalContext } from '../context';

function CountryList() {

 const { countries, loading } = useGlobalContext(); 

  if(loading){
    return <Loading/>
  }
  if(countries.length < 1) {
    return (
      <h2 className="text-center text-base font-semibold tracking widest italic">
        No countrie matched your search criteria.
      </h2>
    )
  }
  return (
    <section className="w-full h-full flex flex-col sm:flex-row sm:flex-wrap gap-10 items-center mt-6 justify-start sm:justify-center">
      {countries.map((item) => {
        return <Country key={item.numericCode}{...item}/>
      })}            
    </section>
  )     
}

export default CountryList;
