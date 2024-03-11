/* eslint-disable react/prop-types */

import { useState } from "react";

const Country = ({country,handleSingleVisitCountry}) => {
   const {name,region,altSpellings} = country;
    // console.log(country)
    const [visit,setVisit] = useState(false)
    const handleVisit = () => {
        setVisit(!visit)
    }
    return (
        <div>
            <div className=" bg-slate-100/70 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
            {/* Card Image */}
                <img className=" h-[190px] bg-gray-400 rounded-2xl" src={country.flags.png} alt="card navigate ui" />
                {/* Card Heading */}
                <div className="space-y-2">
                    <p>{altSpellings[2]}</p>
                    <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">Country Name : <span className="text-blue-600">{name.common}</span></h2>
                    <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">Religion is  : <span className="text-blue-600">{region}</span></h2>
                    {/* rating  */}
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => (
                            <svg key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1E293B" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        ))}
                    </div>
                </div>
                {/* Price and action button */}
                <div className="mt-5 flex justify-between items-center font-medium">
                    <button onClick={handleVisit} className="bg-red-500 font-bold p-3 rounded-xl text-white">{visit ? 'visited' : 'visit'}</button>
                    <button onClick={()=>handleSingleVisitCountry(country)} className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">Mark As visit</button>
                </div>
                <div>
                    <p className="bg-orange-300 p-2 font-bold">{visit ? 'I visit this country pls next one' : 'I want to visit this country'}</p>
                </div>
            </div>
        </div>
    );
};

export default Country;