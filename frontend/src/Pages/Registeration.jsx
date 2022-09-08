import { Link } from 'react-router-dom'
import axios from "axios"
import Reg from '../Images/Reg.png'
import swal from 'sweetalert';

export default function Registeration() {

  const formHandler = (event) => {
    const name = event.target.name.value
    const contact = event.target.contact.value
    const email = event.target.email.value
    const password = event.target.password.value
    axios.post("http://localhost:5000/user/register",
      { 
        Name: name,
        Contact: contact,
        Email: email,
        Password: password
      }).then((success) => { 
        console.log(success)
        swal({
          title: "Success",
          text: success.data.msg ,
          icon: "success",
          button: "ok",
        })
      }).catch((error) => {
        console.log(error)
      })
    event.preventDefault()
  }
  return (
    <>

      <div className="flex min-h-full   items-center justify-center py-5 px-4 ">
        <div className="w-full shadow md:shadow-black shadow-black max-w-md">
          <div className=''>
            <img
              className="md:mx-auto  md:w-[150px]  md:h-[150px] m-auto "
              src={Reg}
              alt=""
            />
            <h2 className="  text-center text-lg font-bold  text-gray-900">
              Register your account
            </h2>

          </div>
          {/* form start */}
          <form className="  " onSubmit={formHandler}>
            <input required type="hidden" name="remember" defaultValue="true" />
            <div className=" p-5  ">
              <div className='mt-0' >
                <label className="block" >Name</label>
                <input required type="text" placeholder="Name" name='name'
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
              <div className="mt-2">
                <label className="block">Contact</label>
                <input required type="number" placeholder="Contact" name='contact'
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
              <div className="  mt-2">
                <label className="block">Email</label>
                <input required type="text" placeholder="Email" name='email'
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
              <div className="mt-2">
                <label className="block">Password</label>
                <input required type="password" placeholder="Password" name='password'
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
              {/* <span className="text-xs text-red-400">Password must be same!</span> */}
            </div>


            <div className="text-sm flex justify-center">
              <Link to="/" className="font-medium mb-2 text-indigo-600 hover:text-indigo-500">
                Go to Home page
              </Link>
            </div>
            <div className='flex' >
              <button
                type="submit"
                className=" w-[300px] m-auto mb-1 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Create Account
              </button>
            </div>
          </form>
          {/* form end */}
        </div>
      </div>
    </>
  )
}
