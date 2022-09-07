import {useLocation} from "react-router-dom"
import React from "react"

import AdminApp from "./Admin/AdminApp"
import Home from "./Home.jsx"





  export default function App() {
     let { pathname } =useLocation();
    // console.log(pathname)
    const name = pathname.split("/")
    return (

      <>
  
        {name.includes("admin-panel") === true ? (
          <>
            <AdminApp/>
          </>
        ) : (
          <>
          <Home/>
        </>
        )}
    </>
  
  );
}
