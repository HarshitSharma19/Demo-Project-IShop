import React from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react'
import BrandList from './BrandList.jsx'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';
export default function ViewBrand() {
  const Selector = useSelector((data)=> data.Reducer1)
  const [data , setData] = useState([]);
  const [url , setUrl] = useState("")
  const [reload , setReload] = useState("")
  let Data;
  try{
    Data = data.map((a, i)=>{
      return <BrandList event={setReload} id={a._id}  created={a.created_at} status={a.status} key={i} sno={i} name={a.name} logo={a.logo} url={url}/>
    })
  }catch(error){
    Data = "NO DATA FOUND"
  }
  

  const fetchData = async() => {
    await axios.get("http://localhost:5000/admin-panel/brand/view", {
      headers: {
        authorization: Selector
      }
    }).then((success) => {
      setUrl(success.data.imgBaseUrl)
      setData(success.data.data);
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchData()
  }, [reload])
  return (
    <>
      <div className='flex border-b-2 justify-between px-4 py-2  ' >
          <div className=' h-14 text-2xl flex items-center justify-center text-gray-700'> View Brand</div>
          <div className='pt-1'>
            <Link to="/admin-panel/category/add">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="#54a0ff" viewBox="0 0 24 24" stroke="white" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </Link>
        </div>
      </div>

      <div className='mb-8'>
        <div className='mt-6 mx-10 '>
          <table className="table-auto text-center w-full ">
            <thead className='border-b-2'>
              <tr className='h-12 text-slate-700 font-semibold text-md'>
                <td className='w-5'>S.No</td>
                <td className='w-[120px]'>Name</td>
                <td className='w-52'>Logo</td>
                <td className='w-28'>Status</td>
                <td className='w-48'>Created_at</td>
                <td className='w-32'>Action</td>
              </tr>
            </thead>
          </table>
        </div>
        {Data}
      </div>
      
     
    </>
  )
}