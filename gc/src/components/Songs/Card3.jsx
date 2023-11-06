import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Card3(props) {
  const {songid} = useParams();
  console.log(typeof(songid));
    return ( <>

      <div className="card3_contener">
       <div className="img3"> 
        <img src={props.img} height={250}width={250} /> 
       
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

    </> );
}

export default Card3;