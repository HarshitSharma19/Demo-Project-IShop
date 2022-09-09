
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import Container from '../Components/Container'
import Banner from "../Components/Banner.jsx"
import OfferBanner from "../Components/OfferBanner.jsx"
import Card from "../Components/Card.jsx"
export default function MainPage() {
  const [data , setData] = useState([]);

  const [url , setUrl] = useState("") 

  
  let Data,filterData;
  try{

    filterData = data.filter((a)=>{
    return a.homepage === true   
    })
    Data = filterData.map((a, i)=>{
      return <Card id={a._id} home={a.homepage} status={a.status} key={i} sno={i} name={a.name} image={a.image} url={url} price={a.price} details={a.details} weight={a.weight} discount={a.discount}/>
      })
  
    }catch(error){
    Data="NO DATA FOUND"
  } 
  const fetchData = async() => {
    await axios.get("http://localhost:5000/user/products/alldata").then((success) => {
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
    <Banner/>
    <Container>
    <h1 className=' text-center text-2xl font-bold my-5'>BEST SELLER</h1>
            <div>
                <ul className='flex justify-center'>
                    <li className='px-5 font-bold'>All</li>
                    <li className='px-5 font-bold '>Mac</li>
                    <li className='px-5 font-bold'>iPhone</li>
                    <li className='px-5 font-bold'>iPad</li>
                    <li className='px-5 font-bold'>Accessories</li>
                </ul>
            </div>
            <div className='w-full flex flex-wrap justify-center mt-10'>
     {Data}
</div>
    <div className='mt-10 text-center h-20 w-100 cursor-pointer'> <Link to="/store"> <span className='text-blue-600'>Load More</span> </Link></div>
    </Container>
    <OfferBanner/>
    <Container>
    </Container>
    </>
    )
  }

  