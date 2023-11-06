import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./home.css"
import  { useEffect, useState } from "react"
import Card from "../Card";
import Footer from "../Footer/Footer";
import TrendingSong from "../cards/Trendingsong";
import H from "../cards/H";
import Aftercard from "../Songs/Aftercard";



function Home() {
    const [ popularMovies, setPopularMovies ] = useState([])
    useEffect(() => {
    fetch('https://academics.newtonschool.co/api/v1/music/song', {
        headers:{
            'projectId': '92m3t6amyypy'
        }
    })
    .then(res => res.json())
    .then(data => setPopularMovies(data.data));
}, [])
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <>
    
    <Carousel responsive={responsive}>
        {
          popularMovies.map((music,key)=>{
            return(
              <Card  key={key}hedding ={music.appType} artist={music.artist} creaditat={music.createdAt} fetured={music.featured} likedBy={music.likedBy} thumbnall={music.thumbnail} title={music.title} type={music.type} v={music._v} id={music._id} url={music.audio_url}/>
            )
          })
        }
        
      </Carousel>
      <H/>
      <TrendingSong/>
     
      {/* <Aftercard/> */}
     
<Footer/>
    </>
  );
}
<div > </div>
export default Home;
