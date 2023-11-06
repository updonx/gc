/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function Card({thumbnall,hedding,title,artist,url}) {
    // console.log(title)
    return (<>
     
   <div className="img"> <img src={thumbnall}alt="" height={200}  width={400 }/></div>
    
    </> 
    ) 
}

export default Card;
// style={{ backgroundImage: `url(${thumbnall})` }}