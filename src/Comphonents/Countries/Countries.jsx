
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
    const [showCountry,setShowCountry] = useState([]);
    ////   handle visited country show in the browser
    const [countryS,setCountry] = useState([]);

    const handleSingleVisitCountry = (country) => {
        const singleCountry = [...countryS,country]
        setCountry(singleCountry)
        console.log(singleCountry)
    }
console.log(showCountry)
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setShowCountry(data))
    },[])
    return (
    <div>
        <p className="text-center font-bold text-red-600 text-3xl">visited country : {countryS.length}</p>
        <p className="text-center font-bold text-blue-600">{
            countryS.map(s => <li key={s.ccn3}>Name of visited country : {s.name.common}</li>)
            }</p>
            <div className="grid md:grid-cols-4 gap-3">
            {
                showCountry.map(country => <Country  
                key={country.ccn3}
                country={country}
                handleSingleVisitCountry={handleSingleVisitCountry}
                >
                </Country>)
            }
        </div>
    </div>
    );
};

export default Countries;