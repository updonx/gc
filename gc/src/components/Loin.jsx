import  {  useState } from "react"

// import "./form.css";
import "./card.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




function Login() {
    const [useremail, setEmail] = useState(''); // Initialize email state with an empty string
    const [userpassword, setPassword] = useState(''); // Initialize password state with an empty string
    const [err, setErr] = useState('')
    const navigate= useNavigate()

    function fetchdata() {
        fetch("https://academics.newtonschool.co/api/v1/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'projectId': '92m3t6amyypy'
            },
            body: JSON.stringify({
                email: useremail,
                password: userpassword,
                appType: 'music',
            })
        })
        .then((res) => res.json())
        .then((res) => { console.log(res)
        
        
            document.cookie=res.token 
            // let token=decodeURIComponent(document.cookie)
            // console.log(token)
            if(res.status==='success'){
                navigate("/")
            }else{
                setErr(res. message)
            }
        }
        
        
        
        )
    }

    return (
        <>
        <div className="mainconteer">
        <div className="login">
            <img src="https://logodix.com/logo/661735.jpg" alt="" />
            <h1>Login</h1>
            <p className="p1">Get a personalized experience, and access all</p>
            <p className="p2">your music</p>
            <input type="email" placeholder="User email" onChange={(e) => { setEmail(e.target.value) }} /><br />
            <input type="password" placeholder="User password" onChange={(e) => { setPassword(e.target.value) }} /> <br />
            <p id="err">{err}</p>
            <button type="submit" onClick={fetchdata} className="btn1" >Login</button>
          <Link to="/Singup">  <p className="ins"> don't have an account? singup </p></Link>
         <Link to="/forget"> <button className="btn2">Update Password</button></Link>
            </div>
           
            </div>
        </>
    );
}

export default Login;

