import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom'
import Dropzone from '../Dropzone'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

export default function UpdateProduct() {
    const Navigate = useNavigate(); 
    const Selector = useSelector((data)=> data.Reducer1)
    const [data1 , setData1] = useState("")
    const [data2 , setData2] = useState("")
    const [data3 , setData3] = useState("")
    const [data4 , setData4] = useState("")
    const [data5 , setData5] = useState("")
    const [data6 , setData6] = useState("")
    const [data7 , setData7] = useState("")
    const [img, setImg] = useState("")
    const [data, setData]=useState([])
    const [cdata, setCdata]=useState([])
    const Sdata = data.map((a,i)=>{
      return <option value={a.name} key={i}>{a.name}</option>
    })
    const Cdata = cdata.map((a,i)=>{
      return <option value={a.name} key={i}>{a.name}</option>
    })
    const param = useParams();
    const id = param.id;
    async function fetchData(){
        await axios.get(`http://localhost:5000/admin-panel/products/update/${id}`, {
            headers: {
              authorization: Selector
            }
        }).then((success) => {
           const a= success.data.data;
           setData1(a.name)
           setData2(a.details)
           setData3(a.price)
           setData4(a.discount)
           setData5(a.weight)
           setData6(a.brandName)
           setData7(a.categoryName)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    function getValue(x) {
        setImg(x)
    }
    function formHandler(event){
              const name = event.target.name.value;
              const details = event.target.details.value;
              const price = event.target.price.value;
              const discount = event.target.discount.value;
              const weight = event.target.weight.value;
              const dataS = new FormData();
              dataS.append("name", name)
              dataS.append("details", details)
              dataS.append("price", price)
              dataS.append("discount", discount)
              dataS.append("weigth", weight)
              dataS.append("image", img)
              axios.put(`http://localhost:5000/admin-panel/products/update/${id}`,
              dataS,
              {
                  headers: {
                      authorization: Selector
                  }
              }).then((success)=>{
                //console.log(success)
                swal({
                  title: "Success",
                  text: success.data.msg,
                  icon: "success",
                  button: "ok",
                });
              Navigate("/admin-panel/products/view")
            }).catch((error) => {
                console.log(error)
            })
              event.preventDefault();
          }
          const selectData = async() =>{
            await axios.get("http://localhost:5000/admin-panel/brand/view",{
              headers: {
                authorization: Selector
              }
            })
            .then((success)=>{
              setData(success.data.data)
            }).catch((error)=>{
              console.log(error)
            })
            await axios.get("http://localhost:5000/admin-panel/category/view",{
              headers: {
                authorization: Selector
              }
            })
            .then((success)=>{
              setCdata(success.data.data)
            }).catch((error)=>{
              console.log(error)
            })
          }
        
         useEffect(()=>{
           selectData()
         },[])
         
         return (
          <>
          <div className=' flex border-b-2 justify-between px-4 py-2'> 
          <div className=' h-14 text-2xl flex items-center justify-center text-gray-700 '> Update Products</div>  
           </div>   

      <div className='border-2 mt-10 mb-16 mx-10 px-12 py-8  '>
        <form onSubmit={formHandler}>
          <table className='table-auto w-full '>
            <tbody>
              <tr className='h-16'>
                <td>Product Name</td>
                <td><input value={data1} onChange={(event)=>{setData1(event.target.value)}} type="text" name='name' className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" required/> </td>
              </tr>
              <tr className='h-16'>
                <td className='flex items-start'>Description</td>
                <td><textarea value={data2} onChange={(event)=>{setData2(event.target.value)}} type="text" name='details' className="border border-slate-400  w-96 h-24 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" required/></td>
              </tr>
              <tr className='h-14'>
                <td>Price</td>
                <td><input value={data3} onChange={(event)=>{setData3(event.target.value)}} type="number" name='price' className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" required/></td>
              </tr>
              <tr className='h-14'>
                <td>Discount</td>
                <td><input value={data4} onChange={(event)=>{setData4(event.target.value)}} type="number" name='discount' className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" required /></td>
              </tr>
              <tr className='h-14'>
                <td>weight</td>
                <td><input value={data5} onChange={(event)=>{setData5(event.target.value)}}  type="number" name='weight' className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" /></td>
              </tr>
              <tr className='h-28'>
                <td> 
                  <select value={data6} onSelect={(event)=>{setData6(event.target.value)}} name='brand' className="w-56 h-8 text-center rounded-md border text-black">
                    <option>Select Brand</option>
                    {Sdata}
                  </select>
                </td>
                <td>
                  <select value={data7} onSelect={(event)=>{setData7(event.target.value)}} name='category' className="w-56 h-8 text-center rounded-md border ">
                    <option>Select Category</option>
                    {Cdata}
                  </select>
                </td>
              </tr>
              <tr className='h-26 border-b-2'>
                <td className='flex items-start mt-4'>Upload Images</td>
                <td className=' mt-6 pt-4 pb-20'><Dropzone event={getValue}/></td>
              </tr>
              <tr>
                <td className='h-44 text-end' colSpan={2} >
                <input type={"submit"} value="Submit" className='bg-[#009432] text-white  mt-16 px-10 py-1.5 rounded-2xl cursor-pointer' />
                <input type="reset" value="Reset" className='bg-[#009432] text-white ml-8 px-10 py-1.5 rounded-2xl cursor-pointer' />
                </td>
              </tr>
            </tbody>
          </table>   
        </form>  
      </div> 
      </>
  )
}
