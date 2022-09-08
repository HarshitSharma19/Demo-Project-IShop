import React from 'react'
import Container from '../Components/Container'
import Banner from "../Components/Banner.jsx"
import Card from "../Components/Card.jsx"
import axios from "axios";
import { useState,useEffect } from "react";
export default function Offers() {
  const [data , setData] = useState([]);
  const [url , setUrl] = useState("")
  let Data,filterData;
  try{
    filterData = data.filter((a)=>{
      return a.offers == true
    })
    Data = filterData.map((a, i)=>{
      return <Card id={a._id} home={a.homepage} status={a.status} key={i} sno={i} name={a.name} image={a.image} url={url} price={a.price} details={a.details} weight={a.weight} discount={a.discount}/>
      }) 
    }catch(error){
    Data="NO DATA FOUND"
  } 
  
  const fetchData = async() => {
    await axios.get("http://localhost:5000/user/products/alldata", { 
    }).then((success) => {
      setUrl(success.data.imgBaseUrl)
      setData(success.data.data);
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])
return (
<>
  <Banner />
  <Container>
    <h1 className=' text-center text-2xl font-bold my-3'>OFFERS</h1>
    <div className='w-full flex flex-wrap justify-center mt-10'>
      <Card />
      </div>

  </Container>
</>
)
}