import "./App.css"
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Header from "./components/heder/Header";
import Home from "./components/pagess/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Loin";
import Singup from "./components/pagess/Singup";
import Forgetp from "./components/pagess/Forgetp";
import TrendingSong from "./components/cards/Trendingsong";
import Aftercard from "./components/Songs/Aftercard";
import Sidebar from "./components/cards/Sidebar";


function App() {
  
  return (
    <>
    
   
      <Router>
       
      
    
   
        <Routes>
          
     
        <Route path="/" element={<> <Navbar/> <Header/><Home/>  </>}></Route>
        <Route path="/login" element={ <Login/>}>  </Route>
        <Route path="/Singup" element={ <Singup/>}> 
         </Route>
         <Route path="/forget" element={ <Forgetp/>}>  </Route>
         <Route path="/card3" element={ <Aftercard/>}>  </Route>
         
        

       
        </Routes>
        
      </Router>
    </>
  )
}

export default App
