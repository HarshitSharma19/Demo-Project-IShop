import Container from "../Components/Container.jsx";
import SideNav from "../Components/SideNav.jsx";
import Card from "../Components/Card.jsx"
import Banner from "../Components/Banner.jsx"
import React from 'react'
import axios from "axios";
import { useState,useEffect } from "react";
export default function Mobiles() {
  const [data , setData] = useState([]);
  const [url , setUrl] = useState("")
  let Data;
  try{
    Data = data.map((a, i)=>{
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
<Container>
  <div className="flex">
    <div className="mt-5">
      <SideNav />
    </div>
    <div className="p-5 mt-10" style={{width:"1360px"}}>
      <Banner />
      <h1 className=' text-center text-2xl font-bold my-5'>Mobiles</h1>
      <hr />  
      <div className='w-full flex flex-wrap justify-center mt-10'>

      {Data}
      </div>
    </div>
  </div>
</Container>
)
}