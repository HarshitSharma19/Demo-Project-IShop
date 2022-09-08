import React from 'react';
import Dropzone from '../Dropzone';
import axios from 'axios';
import swal from 'sweetalert';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux/es/exports';
export default function AddBrand() {
  const Selector = useSelector((data)=>data.Reducer1)
  const Navigate = useNavigate();
  const [img, setImg] = useState("")
  function getValue(x) {
    setImg(x)
  }
  const formHandler = (event) => {
    const name = event.target.name.value;
    let data = new FormData();
    data.append("name", name);
    data.append("logo", img)
    axios.post("http://localhost:5000/admin-panel/brand/add",
      data,
      {
        headers: {
          authorization: Selector
        }
      }).then((success) => {
        //console.log(success.data.msg)   
        swal({
          title: "Success",
          text: success.data.msg,
          icon: "success",
          button: "ok",
        });
        Navigate("/admin-panel/brand/view")

      }).catch((error) => {
        console.log(error)
      })
    event.preventDefault()
  }
  return (
    <>
      <div className=' flex border-b-2 justify-between px-4 py-2'>
        <div className=' h-14 text-2xl flex items-center justify-center text-gray-700 '>Add Brand</div>
      </div>
      <div className='border-2 mt-10 mb-16 mx-10 px-12 py-8  '>
        <form onSubmit={formHandler}>
          <table className='table-auto w-full '>
            <tbody>
              <tr className='h-16'>
                <td className='w-48'>Name</td>
                <td>
                  <input type="text" className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" name='name' required />
                </td>
              </tr>
              <tr className='h-26 border-b-2'>
                <td className='flex items-start mt-4'> Logo</td>
                <td className='pt-6 pb-20'><Dropzone event={getValue} /></td>
              </tr>
              <tr>
                <td className='h-28 text-end' colSpan={2} >
                  <input type={"submit"} value='Submit' className='bg-[#009432] text-white cursor-pointer  mt-16 px-10 py-1.5 rounded-2xl' />
                  <input type="reset" value='Reset' className='bg-[#009432] text-white ml-8 px-10 py-1.5 rounded-2xl cursor-pointer' />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}