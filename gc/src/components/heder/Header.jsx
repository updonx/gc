import { Link } from "react-router-dom";
import "./header.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




function Header() {
    return ( 
    <>

        <div className="contener1">
           
         <Link to="/" className="raj">All</Link>
         <Link to="/movies/TrendingSong"  className="raj">Trending Song</Link>
         <Link to="/movies/newsong" className="raj">New Song</Link>
         <Link to="/movies/oldsong" className="raj">Old Song</Link>
         <Link to="/movies/Moodes&genes" className="raj">Moodes And Genres</Link>

         <Link to="/movies/alumb" className="raj">Alumb</Link>
         <Link to="/movies/podcast" className="raj">Podcast</Link>
         <Link to="/movies/radio" className="raj">Radio</Link>
         <Link to="/movies/Mymucic" className="raj">My Music</Link>

         </div>
                
        
    
    </> 
    );
}

export default Header;