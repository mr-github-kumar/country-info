import React, { useState, useContext, useEffect } from 'react';

const url1 ='https://restcountries.eu/rest/v2/name/';
const url2 ='https://restcountries.eu/rest/v2/region/';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchCountry, setSearchCountry] = useState('a');
    const [countries, setCountries] = useState([]);
    const [region, setRegion] = useState("Filter by region...");
    const [isActive, setActive] = useState(true);
      
    useEffect(() => {
        const getCountry = async () => {
            setLoading(true);
            try {
                if (region === "Filter by region..." || region === "All"){
                    const response = await fetch(`${url1}${searchCountry}`);
                    const data = await response.json();
                    setCountries(data);
                    setLoading(false);                 
                } else {
                    const response = await fetch(`${url2}${region}`);
                    const data = await response.json();
                    setCountries(data);
                    setLoading(false);                  
                }          
            } 
            catch (error) {
                setLoading(false);
            }
        };
        getCountry();
    }, [searchCountry, region]); 


    return (
        <AppContext.Provider value={{loading,countries,searchCountry,setSearchCountry,region,setRegion,isActive,setActive}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }