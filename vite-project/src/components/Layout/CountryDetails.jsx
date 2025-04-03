import React from 'react'
import {useParams} from "react-router-dom"
import { useTransition,useState,useEffect} from 'react';
import  {getCountryIndData} from '../api/postApi';
const CountryDetails = () => {
  const params=useParams();
  console.log(params)
  const [iPpending,startTransition]=useTransition(); 
 const [country,setCountry]=useState([])
  useEffect(()=>{
    startTransition(async()=>{
      const res=await getCountryIndData(params.id)
      console.log(res)
      setCountry(res.data)
    })
  },[])
  if(isPending) return <h1>Loading...</h1>
  console.log(params)
        return <h1>Hello</h1>
}

export default CountryDetails
