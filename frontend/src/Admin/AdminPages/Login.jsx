import React from 'react'
import {useNavigate} from "react-router-dom"
import undraw from '../../Images/undraw_login_re_4vu2.svg'
import axios from 'axios';
import { useDispatch } from "react-redux/es/exports";
import swal from 'sweetalert';
import Actions from '../../React Redux/Action';
export default function Login() {  
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  function formhandler(event){
    const email = event.target.email.value;
    const password = event.target.password.value;
    axios.post("http://localhost:5000/admin-panel/login",
      {
        Email: email,
        Password: password
      }).then((success) => {
        const a = success.data
        if(success.data.status === 1){
          swal({
            title: "Success",
            text: "Login succesfully",
            icon: "success",
            buttons: "ok",
          })
          Dispatch(Actions.adminAuth(a.token))
          Navigate("/admin-panel")
        }else{
          swal({
            title: "please try again",
            text: success.data.msg,
            icon: "warning",
            buttons: "ok",
          })
          event.target.email.value=""
          event.target.password.value=""
        }
      }).catch((error) => {
        console.log(error)
      })
    event.preventDefault()
  }
  return (  
    <div className='grid grid-cols-2 gap-8'> 
        <div className="min-h-screen bg-gray-100 text-gray-800 px-4 py-6 flex flex-col justify-center">
          <div className="relative py-3 w-10/12 px-6 mx-auto text-center ">
            <span className="text-2xl font-light">Admin login</span>
            <div className="relative mt-4 shadow-md text-left ">
              <div className="h-2 bg-indigo-400 rounded-t-md"></div> 
              <div className="py-8  px-8 bg-slate-300  w-full">
                <form onSubmit={formhandler}>
                  <label className="block font-semibold">Username or Email</label>
                  <input type="email" placeholder="Email" name='email' className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
                  <label className="block mt-3 font-semibold">Password </label>
                  <input type="password" placeholder="Password" name='password' className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
                  <div className="flex pt-5 justify-center ">
                  <input type={"submit"} value='Login' className='bg-indigo-500 text-white cursor-pointer  mt-16 px-14 py-1.5 rounded-xl' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <img alt='' src={undraw}/>
        </div>
    </div>
  )
}
