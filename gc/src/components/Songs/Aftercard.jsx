import Card3 from "./Card3";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card";

function Aftercard() {
  const [card31, setCard31] = useState([]);

  useEffect(() => {
    fetch('https://academics.newtonschool.co/api/v1/music/album', {
      headers: {
        'projectId': '92m3t6amyypy'
      }
    })
    .then(res => res.json())
    .then(data => setCard31(data.data));
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
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
        <Card3 />
        {card31?.map((music, key) => (
          <Card
            key={key}
            img={music.image}
            title={music.title}
            artists={music.artists}
            id={music._id}
          />
        ))}
      </Carousel>
    </>
  );
  

}

export default Aftercard;
