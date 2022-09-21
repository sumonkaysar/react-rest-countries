import React from 'react';
import "./Country.css";

const Country = ({country}) => {
  const {name, population, area, region, flags} = country;
  return (
    <div className='country'>
      <h3>Country Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p><small>Area: {area}</small></p>
      <p><small>Region: {region}</small></p>
    </div>
  );
}

export default Country;
