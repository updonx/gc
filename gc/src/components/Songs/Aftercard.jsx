
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card";
import { Link } from "react-router-dom";

function Aftercard(props) {
  console.log(props.id)
  const [cardinfo, setCardinfo] = useState([]);

  useEffect(() => {
    fetch('https://academics.newtonschool.co/api/v1/music/album/:id'+ props.id, {
      headers: {
        'projectId': '92m3t6amyypy'
      }
  })
    .then(res => res.json())
    .then(data =>{setCardinfo (data.data);console.log(data.data)});
  }, [props.id]);

 
  return (
    <>
  <div className="card3_contener">
       <div className="img3"> 
        <img src={`
"https://newton-project-resume-backend.s3.amazonaws.com/thumbnai ? cardinfo.backdrop_path:""`}/> 
       
       </div>
       <div className="content3">
           <p id="pp1">{props.title}</p>
        
           <h1 id="pp3">Udd Jaa Kaale Kaava From "Ga...</h1>
           <div className="c3">
            {/* <Link><p id="pp4">Udd Jaa Kaale Kaava .2023 .4 min 48 sec</p></Link> */}
            <p id="pp4">Udd Jaa Kaale Kaava </p><br />
            <p id="pp4"><span>.</span>2023 </p> 
             <p id="pp4">4 min 48 sec </p>

          
           </div>
           <div className="btn3">

           <button id="bt3">Play Song</button>
           <img src="https://cdn.icon-icons.com/icons2/1112/PNG/512/likeheartcircularoutlinedbutton_79272.png" height={40} width={40} />
          <Link to="/Singup"> <img src="https://cdn.onlinewebfonts.com/svg/img_280039.png" height={40} width={40}/></Link>
           </div>
       </div>
       </div>
       
    
    </>
  );
  

}

export default Aftercard;
