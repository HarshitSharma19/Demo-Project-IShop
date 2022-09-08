import { Link } from 'react-router-dom'
import LogIn from '../Images/Login.png'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import { useDispatch } from "react-redux/es/exports";
import Actions from '../React Redux/Action';
import axios from 'axios'
export default function Login() {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const formHandler = (event) => {
    const email = event.target.email.value
    const password = event.target.password.value
    axios.post("http://localhost:5000/user/login",
      { 
        Email: email,
        Password: password
      }).then((success) => {
        const a = success.data
        Dispatch(Actions.userAuth(a.token , a.name))
        swal({
          title: "Success",
          text: success.data.msg,
          icon: "success",
          button: "ok",
        })
        if(success.data.status === 1){
          Navigate("/")
        }
      }).catch((error) => {
        console.log(error)
        
      })
    event.preventDefault()
  }
  return (
    <>
 
      <div className="md:flex md:min-h-full  shadow md:shadow-black shadow-black     stroke-fuchsia-600  items-center md:w-[600px] w-[400px] m-auto mt-[20px]   justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:w-full  md:max-w-md  md:space-y-8">
          <div className='mb-[5%]'>
            <img
              className="md:mx-auto w-[100px] m-auto md:h-[150px]  md:w-[150px]"
              src={LogIn}
              alt=""
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>

          </div>
          <form className="mt-8 space-y-6" onSubmit={formHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="md:relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="md:relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div className="text-sm flex justify-center">
              <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                Go to Home page
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-60 m-auto justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
