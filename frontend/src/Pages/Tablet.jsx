import Container from "../Components/Container.jsx";
import SideNav from "../Components/SideNav.jsx";
import Card from "../Components/Card.jsx"
import Banner from "../Components/Banner.jsx"
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Tablet() {
  const [data, setData]= useState([])
  const [url, setUrl]= useState("");
  let Data, filterData;
  try{
    filterData = data.filter((a)=>{
      return a.categoryName == "Tablet"
    })
    Data = filterData.map((a, i)=>{
      return <Card id={a._id}  status={a.status} key={i} sno={i} name={a.name} image={a.image} url={url} price={a.price} details={a.details} weight={a.weight} discount={a.discount}/>
    })
  }catch(error){
    Data = "DATA NOT FOUND"
  }
  const getData = async()=>{
    await axios.get("http://localhost:5000/user/products/alldata").then((success)=>{
      setData(success.data.data)
      setUrl(success.data.imgBaseUrl)
    }).catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    getData();
  },[])

return (
<Container>
  <div className="flex">
    <div className="mt-5">
      <SideNav />
    </div>
    <div className="p-5 mt-10" style={{width:"1360px"}}>
      <Banner />
      <h1 className=' text-center text-2xl font-bold my-5'>Tablet</h1>
      <hr />  
      <div className='w-full flex flex-wrap justify-start mt-10'>
      {Data}
      </div>
    </div>
  </div>
</Container>
)
}