import { Link } from "react-router-dom";
import "./sidebar.css"
function Sidebar() {
    return ( <>
    
    <div className="sidebar">
       <div className="signup_login">
       <Link to="/login">
           {/* <li id="s7"><svg width="35" height="35" viewBox="0 0 18 18"><path class="svg_color" fill="#000" d="M14.351 13.545c-.804-1.281-2.036-2.215-3.448-2.664.738-.573 1.22-1.457 1.22-2.46 0-1.723-1.4-3.124-3.123-3.124-1.722 0-3.124 1.401-3.124 3.124 0 1.003.483 1.888 1.221 2.46-1.412.449-2.644 1.383-3.448 2.664C2.606 12.318 1.972 10.733 1.972 9c0-3.876 3.153-7.03 7.028-7.03 3.875 0 7.028 3.154 7.028 7.03 0 1.732-.634 3.317-1.677 4.544M6.848 8.42c0-1.187.965-2.152 2.152-2.152 1.187 0 2.152.965 2.152 2.152 0 1.186-.965 2.152-2.152 2.152-1.187 0-2.152-.966-2.152-2.152M9 16.028c-1.792 0-3.424-.68-4.666-1.787.011-.016.03-.024.042-.042.958-1.637 2.729-2.654 4.624-2.654 1.894 0 3.666 1.017 4.623 2.653.011.018.028.03.04.046C12.421 15.35 10.79 16.028 9 16.028M9 1C4.59 1 1 4.59 1 9.001 1 13.411 4.59 17 9 17s8-3.588 8-7.999C17 4.589 13.41 1 9 1" transform="translate(-1109 -73) translate(1089 58) translate(19 15) translate(1)"></path></svg></li> */}
                    {/* <button className="sarfaraz">Log In </button> <br /> */}
                    {/* <p id="abl">/</p> */}
                  </Link><Link to="/Singup">
                      
                    <button className="sarfaraz1"> Sign Up</button>
                  </Link>
                  {/* <Link to="/movies/Mymucic" className="s2">My Music</Link> 
                   <Link to="/movies/Mymucic" className="raj">India's Music</Link>
                   <small>Language</small>
                   <span>(Set Music language)</span>
                   <button className="s1"><span>Night Mode</span></button> <hr /> */}
                  
                <Link to="/">  <p id="s3" >Home</p></Link>
                 <Link to="/movies/radio">  <p id="s4" >Radio</p></Link>
               <Link to="/movies/podcast">  <p id="s5" >Podcast</p></Link>
                {/* <Link to="/">  <p id="s6" >Home</p></Link>  */}
                   
               

       </div>
    </div>
    
    
    </> );
}

export default Sidebar;