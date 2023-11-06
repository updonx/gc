
import  {  useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
  

function Singup(){
    const [name, setName] = useState('')
    const [useremail, setEmail] = useState(''); // Initialize email state with an empty string
    const [userpassword, setPassword] = useState('');
    const [err, setErr] = useState('')
    const navigate= useNavigate()

    function singup(){
        fetch('https://academics.newtonschool.co/api/v1/user/signup', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'projectId': '92m3t6amyypy'
    },
    body: JSON.stringify({
        name: name,
        email: useremail,
        password: userpassword,
        appType: 'music',
    })
})
.then((res) => res.json())
        .then((res) =>{ console.log(res) 
         document.cookie=res.token

    if(res.status==='success'){
        navigate("/")
    }else{
        setErr(res. message)
    }


        
        })
    }
return(
<>
<div className="singupform">
               <img src="https://logodix.com/logo/661735.jpg" alt="" />      
               <h1>Singup</h1>
            <input type="text" placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }} /><br />
            <input type="email" placeholder="Ente your Email" onChange={(e)=> {setEmail(e.target.value)}} /> <br />
            <input type="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}/> <br />
            <p id="err1">{err}</p>
            <button onClick={singup}> Signup</button>
          <Link to="/login"> <p className="ins"> already have an account? login </p></Link> 
            </div>



</>
)
}

export default Singup;