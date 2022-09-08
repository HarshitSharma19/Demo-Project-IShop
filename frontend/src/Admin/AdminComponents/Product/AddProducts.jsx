import React from 'react'
import Dropzone from "../Dropzone"
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function AddProducts() {
  const Navigate = useNavigate();
  const Selector = useSelector((data)=> data.Reducer1)
  const [img, setImg] = useState("")
  const [data, setData]=useState([])
  const [cdata, setCdata]=useState([])
  const Sdata = data.map((a,i)=>{
    return <option value={a.name} key={i}>{a.name}</option>
  })
  const Cdata = cdata.map((a,i)=>{
    return <option value={a.name} key={i}>{a.name}</option>
  })
  function getValue(x){
    setImg(x)
  }
  const formHandler = (event)=>{
    const name = event.target.name.value;
    const details = event.target.details.value;
    const price = event.target.price.value;
    const discount = event.target.discount.value;
    const weight = event.target.weight.value;
    const brandName = event.target.brand.value;
    const categoryName = event.target.category.value;
    let data = new FormData();
    data.append("name", name);
    data.append("details", details);
    data.append("price", price);
    data.append("discount", discount);
    data.append("weight", weight);
    data.append("image", img);
    data.append("brandName", brandName)
    data.append("categoryName", categoryName);
    
    axios.post("http://localhost:5000/admin-panel/products/add",
      data,
      {
        headers: {
          authorization: Selector
        }
      }).then((success) => {
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
        <div className=' h-14 text-2xl flex items-center justify-center text-gray-700 '> Add Products</div>  
      </div>   

      <div className='border-2 mt-10 mb-16 mx-10 px-12 py-8  '>
        <form onSubmit={formHandler}>
          <table className='table-auto w-full '>
            <tbody>
              <tr className='h-16'>
                <td>Product Name</td>
                <td><input type="text" name='name' className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" required /> </td>
              </tr>
              <tr className='h-16'>
                <td className='flex items-start'>Description</td>
                <td><textarea type="text" name='details' className="border border-slate-400  w-96 h-24 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" required /></td>
              </tr>
              <tr className='h-14'>
                <td>Price</td>
                <td><input type="number" name='price' className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" required /></td>
              </tr>
              <tr className='h-14'>
                <td>Discount</td>
                <td><input type="number" name='discount' className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" required/></td>
              </tr>
              <tr className='h-14'>
                <td>weight</td>
                <td><input type="number" name='weight' className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" required /></td>
              </tr>
              <tr className='h-28'>
                <td> 
                  <select name='brand' className="w-56 h-8 text-center rounded-md border text-black">
                    <option>Select Brand</option>
                    {Sdata}
                  </select>
                </td>
                <td>
                  <select name='category' className="w-56 h-8 text-center rounded-md border ">
                    <option>Select Brand</option>
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
                <input type={"submit"} value="Submit" className='bg-[#009432] text-white  mt-16 px-10 py-1.5 rounded-2xl cursor-pointer'/>
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