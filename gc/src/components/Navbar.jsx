/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";
import Sidebar from "./cards/Sidebar";

function Navbar() {
 const[showSidebar,setSidebar]=useState(false)
  return (
    <>
   
      <div className="contener" >
      {
      showSidebar && <Sidebar/>
    }
        <div className="contener_left">
          <ul>
           <li onClick={()=>setSidebar(!showSidebar)}>
              <div className="svg_color">
                <svg width="25" height="25" viewBox="0 0 24 24">
                  <path
                    className="svg_color"
                    fill="#000"
                    fill-rule="nonzero"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  ></path>
                </svg>
                 
              
               </div>
            </li>
            
            <li>
              <a href="#"></a>
              <img
                src="https://logodix.com/logo/661491.jpg"
                alt=""
                height={35}
                width={100}
              />
            </li>
            <li>
            
              <input type="text" placeholder="Serch Artists,Song,Albums" />
            </li>
           
          </ul>
        </div>
        <div className="contener_right">
              <ul>
                  <li><a
                    href="https://gaana.com/subscribe/buy-gaana-plus?udf=dw_topbar_GetGaanaPlus "
                    target="_blank"
                    className="raj"
                  >
                    Get Gaana Plus
                  </a></li>
                  <li>
                  <a href="#">
                    <img src="/raj.png" height={20} width={20} />
                  </a>
                </li>
                <li>
                  
                  <button className="btn">
                    <img src="/nm.png" height={15} width={15} />
                  </button>
                </li>

                <li>
                  
                <Link to="/login">
                    <button className="user">Log In </button> <br />
                  </Link><Link to="/Singup">
                    <button className="user"> Sign Up</button>
                  </Link>

                </li>
               
             
                
                  
                
              </ul>
            </div>
      </div>
    </>
  );
}

export default Navbar;
// style={{backgroundColor: color}}
// onClick={()=> setColor("green")}  