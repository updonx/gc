import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./home.css"
import  { useEffect, useState } from "react"
import Trendingcard from "./Trendingcard";




function TrendingSong({setid}) {
    const [trendingsong, setTrendingsong] = useState([]);

    useEffect(() => {
        fetch('https://academics.newtonschool.co/api/v1/music/album', {
            headers: {
                'projectId': '92m3t6amyypy'
            }
        })
        .then(res => res.json())
        .then(data => setTrendingsong(data.data));
    }, []); // The empty array as a second argument ensures that useEffect runs only once on component mount.
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
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
            
            trendingsong.map((music,key)=>{
                return(
                    <Trendingcard  setId={setid}key={key}img={music.image} title={music.title} id={music._id}/>
                )

            }) 
         }
           </Carousel>
        </>
    );
}

export default TrendingSong;


