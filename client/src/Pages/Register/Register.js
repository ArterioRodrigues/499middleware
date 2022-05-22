import React, { useEffect, useState } from 'react'
import { Link,  useNavigate } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
function Register(props) {
  const [username, setUsername] = useState([{}]);
  const [password, setPassword] = useState([{}]);
  const [name, setName] = useState([{}]);
  const [secondBackendData, setSecondBackendData] = useState([{}])
  const navigate = useNavigate();
/*
  const [exercise_category, set] = useState([{}]);
  const [password, setPassword] = useState([{}]);
  const [password, setPassword] = useState([{}]);
*/

  var request = { "username":username , "password": password, "name":name };
  var HandleSubmit = function (event) {
    event.preventDefault();
 
    alert('form submitted');
    console.log(request);
    //
    fetch(`http://localhost:3001/createUser`, {
      method: 'POST',
      mode: 'cors',
      headers: { "Content-Type": "application/json" },
      //convert react state to json and send it as the post body
      body: JSON.stringify(request)
    }).then((response) => response.json()
    ).then(data => {
    setSecondBackendData(data)
      
    })
    console.log(secondBackendData);
    let num = parseInt(secondBackendData[0].user_id);
    console.log(typeof num,num);
    props.setId(num);
    console.log(props.id);
    navigate("/Quiz")
  }
  return (
    <div className='background'>
      <div className='card'>
         <h1>REGISTER</h1>
          <AiIcons.AiOutlineUser className='LoginIcon'/>
          <form onSubmit={HandleSubmit}>
            <input className = 'login-menu username' placeholder= 'Username' type="text" onChange={e => setUsername(e.target.value)}/>
            <input className = 'login-menu' placeholder = 'Password'type="text" onChange={e => setPassword(e.target.value)}/>
            <input className = 'login-menu password'  placeholder = 'Name' type="text" onChange={e => setName(e.target.value)}/>
           
            <input className = 'Login'  type="Submit" value="Register"></input>
          </form>
      </div>
    </div>
  )
}

export default Register;




