import React from 'react'
import countryFacts from "../api/countryData.json"
const About = () => {
  //array.map(function(currentValue,index,arr),thisvalue)
  //currvalue-required-the value of the current element
  //index optional-the array index of the current element
  //arr optional-the array object of the current element belongs to
  return (
    <section className='section-about container'>
     <h2 className='container-title'>
      Here are the Interesting Facts
      <br/>
      we're proud of
     </h2>
     <div className="gradient-cards">
     {countryFacts.map((country)=>{
      const {id,countryName,capital,population,interestingFact}=country;//destructuring
      return (
        <div className="card" key={id}>
        <div className="container-card bg-blue-box">
          <p className='card-title'>{countryName}</p>
          <p>
            <span className='card-description'>Capital:</span>
            {capital}
          </p>
          <p>
            <span className='card-description'>Population:</span>
            {population}
          </p>
          <p>
            <span className='card-description'>Intersting facxt:</span>
            {interestingFact}
          </p>
        </div>
      </div>
      )
     })}
      
     </div>
    </section>
  )
}

export default About
