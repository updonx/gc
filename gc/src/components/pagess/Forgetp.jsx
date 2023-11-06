
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

function Forgetp() {
  const [username, setUsername] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [err, setErr] = useState('')
  const navigate= useNavigate()
  

  function handleUpdatePassword() {
    fetch('https://academics.newtonschool.co/api/v1/user/updateMyPassword', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'projectId': '92m3t6amyypy'
      },
      body: JSON.stringify({
        name: username,
        email: useremail,
        passwordCurrent: currentPassword,
        password: newPassword,
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
      <div className="forget">
        <img src="https://logodix.com/logo/661735.jpg" alt="" />
        <h1>Update Password</h1>
        <p className="p1">Get a personalized experience and access all</p>
        <p className="p2">your music</p>
        <input type="text" placeholder="User name" onChange={(e) => setUsername(e.target.value)} /><br />
        <input type="email" placeholder="User Email" onChange={(e) => setUserEmail(e.target.value)} /><br />
        <input type="password" placeholder="Current password" onChange={(e) => setCurrentPassword(e.target.value)} /><br />
        <input type="password" placeholder="New password" onChange={(e) => setNewPassword(e.target.value)} /><br />
        <p id="err1">{err}</p>
        <button className="upbtn" onClick={handleUpdatePassword}>Submit</button>
      </div>
    </>
  );
}

export default Forgetp;
