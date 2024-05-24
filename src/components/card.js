import React from 'react';

const CountryCard = ({ countryData }) => {
    if (countryData) {
        const { name, capital } = countryData;
        return (
            <div className="w-full mx-auto bg-white rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name?.common}</div>
                    <div className="text-gray-700 text-base">
                        <p>Official Name: {name?.official}</p>
                        <p>Capital: {capital[0]}</p>
                     </div>
                </div>
            </div>
        );
    }
};

export default CountryCard;
