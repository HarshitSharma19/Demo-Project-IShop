import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Dropzone from '../Dropzone'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';

export default function UpdateCategory() {
    const Selector = useSelector((data)=> data.Reducer1)
    const Navigate = useNavigate();
    const [img, setImg] = useState("")
    const param = useParams();
    const id = param.id;
    async function fetchData(){
        await axios.get(`http://localhost:5000/admin-panel/category/update/${id}`, {
            headers: {
              authorization: Selector
            }
        }).then((success) => {
            console.log(success)
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
        const dataS = new FormData();
        dataS.append("name", name)
        dataS.append("image", img)
        axios.put(`http://localhost:5000/admin-panel/category/update/${id}`,
        dataS,
        {
            headers: {
                authorization: Selector
            }
        }).then((success)=>{
            swal({
                title: "Success",
                text: success.data.msg,
                icon: "success",
                button: "ok",
              });
            Navigate("/admin-panel/category/view")
        }).catch((error) => {
            console.log(error)
        })
        event.preventDefault();
    }

  return (
    <>
        <div className=' flex border-b-2 justify-between px-4 py-2'> 
            <div className=' h-14 text-2xl flex items-center justify-center text-gray-700 '> Update Categories</div>
        </div>   

        <div className='border-2 mt-10 mb-16 mx-10 px-12 py-8  '>
            <form onSubmit={formHandler}>
                <table className='table-auto w-full '>
                    <tbody>
                        <tr className='h-16'>
                            <td className='w-48'>Name</td>
                            <td><input type="text" name='name' className="border border-slate-400  w-96 h-8 focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" required /> </td>
                        </tr>
                        <tr className='h-26 border-b-2'>
                            <td className='flex items-start mt-4'>Upload Image</td>
                            <td className=' mt-6 pt-4 pb-20'><Dropzone event={getValue}/></td>
                        </tr>
                        <tr>
                            <td className='h-28 text-end' colSpan={2} >
                                <input type={"submit"} value="Submit" className='bg-[#009432] cursor-pointer text-white  mt-16 px-10 py-1.5 rounded-2xl' />
                                <input type="reset" value="Reset" className='bg-[#009432] cursor-pointer text-white ml-8 px-10 py-1.5 rounded-2xl' />
                            </td>
                        </tr>
                    </tbody>
                </table>   
            </form>  
        </div> 
    </>
  )
}