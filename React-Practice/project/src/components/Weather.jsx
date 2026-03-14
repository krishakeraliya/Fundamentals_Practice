import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Weather() {
  const {city}=useParams()
  const[weather,setWeather]=useState({})
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState(null)
  useEffect(()=>{
  try {
    fetch(`https://wttr.in/${city}?format=j1`)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)
      setWeather(data)
        setLoading(false)
    })
  
  } catch (error) {
    setError(error)
  }
  },[])
  if(loading) return <p>Loading....</p>
  if(error) return <p>Error as been occured!</p>
  return (
   <>
  
    <div>
      <p>{weather.nearest_area[0].areaName[0].value}</p>
      <p>{weather.current_condition[0].temp_C}</p>
      <p>{weather.current_condition[0].weatherDesc[0].value}</p>
      <p>{weather.current_condition[0].humidity}</p>
      <p>{weather.current_condition[0].windspeedKmph}</p>
    </div>
 
   </>
  )
}

export default Weather