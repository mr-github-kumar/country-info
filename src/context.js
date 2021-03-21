import React, { useState, useContext, useEffect } from 'react';

const url ='https://restcountries.eu/rest/v2/name/';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchCountry, setSearchCountry] = useState('a');
    const [countries, setCountries] = useState([]);

    const getCountry = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchCountry}`);
            const data = await response.json();
            setCountries(data);
            setLoading(false);            
        } 
        catch (error) {
            setLoading(false);
        }
    }
      
    useEffect(() => {
        getCountry();
    }, [searchCountry]); 


    return (
        <AppContext.Provider value={{loading,countries,searchCountry,setSearchCountry}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }